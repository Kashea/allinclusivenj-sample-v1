"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects, type ProjectCard } from "@/content/site";
import type { SanityProject } from "@/sanity/lib/queries";
import { Icon } from "@/components/icons";

const filters = ["All work", "Kitchen", "Bathroom", "Addition", "Outdoor"] as const;
type Filter = (typeof filters)[number];

export function ProjectGallery({ compact = false, cmsProjects }: { compact?: boolean; cmsProjects?: SanityProject[] }) {
  const [activeFilter, setActiveFilter] = useState<Filter>("All work");
  const displayProjects = useMemo(() => {
    if (!cmsProjects?.length) return projects;
    const categoryMap: Record<string, ProjectCard["category"]> = {
      kitchen: "Kitchen",
      bathroom: "Bathroom",
      addition: "Addition",
      outdoor: "Outdoor",
      deck: "Outdoor",
      porch: "Outdoor",
    };
    const hrefMap: Record<ProjectCard["category"], string> = {
      Kitchen: "/kitchen-remodels/",
      Bathroom: "/bathroom-remodels/",
      Addition: "/residential-additions/",
      Outdoor: "/decks/",
    };
    const mapped = cmsProjects.flatMap((project): ProjectCard[] => {
      const rawCategory = project.serviceCategory?.toLowerCase() || "";
      const categoryEntry = Object.entries(categoryMap).find(([key]) => rawCategory.includes(key));
      const image = project.coverImage?.asset?.url;
      if (!categoryEntry || !image) return [];
      const category = categoryEntry[1];
      return [{
        id: project._id,
        title: project.title || "Residential project",
        category,
        image,
        alt: project.coverAlt || project.coverImage?.alt || project.title || "Residential construction project",
        serviceHref: hrefMap[category],
      }];
    });
    return mapped.length ? mapped : projects;
  }, [cmsProjects]);
  const visibleProjects = useMemo(() => {
    const source = compact ? displayProjects.slice(0, 4) : displayProjects;
    return activeFilter === "All work" ? source : source.filter((project) => project.category === activeFilter);
  }, [activeFilter, compact, displayProjects]);

  return (
    <div>
      {!compact && (
        <div aria-label="Filter projects by type" className="mb-9 flex flex-wrap gap-2" role="group">
          {filters.map((filter) => {
            const selected = activeFilter === filter;
            return (
              <button
                aria-pressed={selected}
                className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${selected ? "border-forest bg-forest text-white" : "border-ink/15 bg-transparent text-ink hover:border-forest"}`}
                key={filter}
                onClick={() => setActiveFilter(filter)}
                type="button"
              >
                {filter}
              </button>
            );
          })}
        </div>
      )}
      <div aria-live="polite" className="sr-only">Showing {visibleProjects.length} project images.</div>
      <div className={`grid grid-cols-1 gap-4 sm:grid-cols-2 ${compact ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
        {visibleProjects.map((project, index) => (
          <article className={`group lift-card overflow-hidden bg-white ${project.size === "tall" && !compact ? "lg:row-span-2" : ""}`} key={project.id}>
            <Link aria-label={`${project.title}, view ${project.category.toLowerCase()} service`} className="block h-full no-underline" href={project.serviceHref}>
              <div className={`image-frame relative ${project.size === "tall" && !compact ? "aspect-[4/5] lg:h-full lg:min-h-[34rem]" : project.size === "wide" && !compact ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
                <Image
                  alt={project.alt}
                  className="transition duration-500 group-hover:scale-[1.03]"
                  fill
                  priority={compact && index === 0}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  src={project.image}
                />
                <span className="absolute left-4 top-4 rounded-full bg-paper/95 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-forest">{project.category}</span>
              </div>
              <div className="flex items-center justify-between gap-4 px-5 py-4 sm:px-6">
                <div>
                  <h3 className="m-0 font-display text-xl font-normal tracking-[-0.03em] text-ink">{project.title}</h3>
                  <p className="mb-0 mt-1 text-xs text-muted">View {project.category.toLowerCase()} projects</p>
                </div>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-ink/15 text-forest transition group-hover:border-forest group-hover:bg-forest group-hover:text-white">
                  <Icon className="h-4 w-4" name="arrow-up-right" />
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>
      {visibleProjects.length === 0 && <p className="rounded-md bg-white p-8 text-center text-sm text-muted">No projects are listed in this category yet.</p>}
    </div>
  );
}
