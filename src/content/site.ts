export const siteInfo = {
  name: "All Inclusive Construction & Building",
  shortName: "All Inclusive",
  location: "Branchburg, New Jersey",
  region: "Somerset County & Central New Jersey",
  phone: "+1 (732) 484-9008",
  phoneHref: "+17324849008",
  email: "allinclusivenj@gmail.com",
  njRegistration: "13VH09398200",
  paRegistration: "PA182975",
};

export type ContentSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type FAQItem = { question: string; answer: string };

export type ServicePage = {
  slug: string;
  path: string;
  name: string;
  eyebrow: string;
  title: string;
  lead: string;
  image: string;
  imageAlt: string;
  introHeading: string;
  intro: string[];
  sections: ContentSection[];
  faq: FAQItem[];
  seoTitle: string;
  seoDescription: string;
};

export const services: ServicePage[] = [
  {
    slug: "kitchen-remodels",
    path: "/kitchen-remodels/",
    name: "Kitchen remodels",
    eyebrow: "Room to gather",
    title: "A kitchen made for the way your home comes together.",
    lead: "Thoughtful layouts, useful storage and carefully chosen finishes—planned around the people who use the space every day.",
    image: "https://allinclusivenj.com/wp-content/uploads/2024/09/All-Inclusive-Construction-85.jpg",
    imageAlt: "Completed kitchen remodel by All Inclusive Construction",
    introHeading: "A better kitchen starts with better questions.",
    intro: [
      "A kitchen remodel is an opportunity to make everyday routines feel easier. We start by understanding what works, what gets in the way, and what you want the room to do for your household.",
      "From a focused refresh to a full layout rework, the scope is shaped around your home, priorities and selections. The result should feel considered—not copied from a trend list.",
    ],
    sections: [
      {
        heading: "Plan the space around real life",
        paragraphs: ["We look at movement through the room, preparation and cleanup zones, gathering space, natural light and the storage you reach for most."],
        bullets: ["Layout and workflow planning", "Cabinetry and storage options", "Countertops, backsplash and flooring", "Lighting and fixture coordination", "Kitchen islands and everyday dining"],
      },
      {
        heading: "Make the scope clear before work begins",
        paragraphs: ["A well-planned project brings the decisions, materials and construction scope into focus before the build. That gives everyone a shared understanding of what is included and what comes next."],
      },
      {
        heading: "Craftsmanship that belongs in your home",
        paragraphs: ["All Inclusive Construction & Building is based in Branchburg and brings more than 20 years of general contracting experience to residential projects. The team works with you through planning, construction and the final walkthrough."],
      },
    ],
    faq: [
      { question: "Can you change the kitchen layout?", answer: "Layout changes can be considered as part of project planning. The right approach depends on the existing structure, services, goals and approvals for your home." },
      { question: "Do I need to choose finishes before construction?", answer: "Selections and scope are planned in advance wherever possible. The sequence depends on the project and on material availability." },
      { question: "How do I get started?", answer: "Share a little about your kitchen, location and goals through the consultation form, or call the team to discuss a first conversation." },
    ],
    seoTitle: "Kitchen Remodeling in Somerset County, NJ | All Inclusive",
    seoDescription: "Plan a kitchen remodel around the way you cook, gather and live. All Inclusive Construction serves Branchburg, Somerset County and nearby Central NJ.",
  },
  {
    slug: "bathroom-remodels",
    path: "/bathroom-remodels/",
    name: "Bathroom remodels",
    eyebrow: "A little more ease",
    title: "A bathroom that feels considered, calm and completely yours.",
    lead: "From a smarter vanity to a full room transformation, bring comfort, function and lasting materials into the spaces you use every day.",
    image: "https://allinclusivenj.com/wp-content/uploads/2024/09/All-Inclusive-Construction-79.jpg",
    imageAlt: "Bathroom remodel project from the All Inclusive Construction portfolio",
    introHeading: "Comfort is in the details.",
    intro: [
      "A bathroom has to work hard in a small footprint. The right plan makes room for better storage, clear movement, good lighting and finishes that can stand up to daily use.",
      "Whether you are updating a hallway bath, powder room or primary suite, we shape the scope around your priorities and the conditions of your home.",
    ],
    sections: [
      {
        heading: "A practical plan for a personal space",
        paragraphs: ["We work through the layout, fixtures, storage and finish choices with you, balancing the look you want with the way the space needs to function."],
        bullets: ["Walk-in showers and tub updates", "Vanities and custom storage", "Tile, flooring and wall finishes", "Lighting and plumbing fixture updates", "Accessibility-minded design options"],
      },
      {
        heading: "The hidden work matters, too",
        paragraphs: ["Water management, ventilation and careful installation are essential parts of a durable bathroom. Project scope and any required approvals are reviewed for the specific home."],
      },
      {
        heading: "A steady path from planning to walkthrough",
        paragraphs: ["From the first conversation through final review, the team helps coordinate the project and keeps decisions connected to the original scope."],
      },
    ],
    faq: [
      { question: "Can you update only part of a bathroom?", answer: "The right scope depends on the existing room and what you want to improve. Share your priorities so the team can discuss an appropriate next step." },
      { question: "Can a tub be replaced with a walk-in shower?", answer: "A tub-to-shower change may be considered during planning. The layout, plumbing and construction conditions determine what is feasible." },
      { question: "Do you work on smaller bathrooms?", answer: "The team has public portfolio examples across residential bathroom work. Describe your room and location to discuss whether the project is a fit." },
    ],
    seoTitle: "Bathroom Remodeling in Somerset County, NJ | All Inclusive",
    seoDescription: "Explore a thoughtful bathroom remodel with All Inclusive Construction & Building, serving Branchburg, Somerset County and nearby Central New Jersey.",
  },
  {
    slug: "residential-additions",
    path: "/residential-additions/",
    name: "Home additions",
    eyebrow: "Make room to grow",
    title: "More room for what comes next—without leaving the place you love.",
    lead: "Explore an addition that feels connected to your home, your lot and the way your family wants to live.",
    image: "https://allinclusivenj.com/wp-content/uploads/2024/09/All-Inclusive-Construction-124.jpg",
    imageAlt: "Residential addition project in the All Inclusive Construction portfolio",
    introHeading: "A good addition feels like it was always meant to be there.",
    intro: [
      "A new bedroom, home office, family room or expanded living area can change how a home works. The best first step is understanding what you need and what the existing property can support.",
      "Additions involve more than square footage. Structure, design, approvals, access and the relationship to the rest of the house all shape the project plan.",
    ],
    sections: [
      {
        heading: "Start with the space you need",
        paragraphs: ["We discuss how the added space will be used, where it could sit, and how it should connect with the home's existing rooms."],
        bullets: ["Additional bedrooms or suites", "Family rooms and expanded living areas", "Home offices and flexible rooms", "Second-story additions and dormers", "Planning for transitions to the existing home"],
      },
      {
        heading: "Understand feasibility early",
        paragraphs: ["Structural conditions, zoning, permitting and inspections can affect the design and schedule. Requirements vary by municipality and property, so they need to be checked for the project rather than assumed."],
      },
      {
        heading: "One coordinated project conversation",
        paragraphs: ["All Inclusive Construction & Building brings residential general contracting experience to additions and remodeling work in Branchburg, Somerset County and nearby Central New Jersey communities."],
      },
    ],
    faq: [
      { question: "Can you help plan a second-story addition?", answer: "Second-story and dormer projects appear in the company's published project and service content. Feasibility depends on the structure, site, design and local approvals." },
      { question: "Will I need permits?", answer: "Many additions require municipal permits and inspections. The specific requirements depend on the work and location and should be verified during planning." },
      { question: "How long does an addition take?", answer: "Timing depends on design, approvals, project scope, selections and construction conditions. A schedule should be discussed after the project is evaluated." },
    ],
    seoTitle: "Home Additions in Somerset County, NJ | All Inclusive",
    seoDescription: "Explore custom home additions with All Inclusive Construction & Building. Based in Branchburg and serving Somerset County and nearby Central NJ.",
  },
  {
    slug: "decks",
    path: "/decks/",
    name: "Decks & porches",
    eyebrow: "Outside, made yours",
    title: "An outdoor space that brings a little more life outside.",
    lead: "Create room to slow down, gather and enjoy the seasons with a custom deck or porch planned for your home.",
    image: "https://allinclusivenj.com/wp-content/uploads/2024/09/All-Inclusive-Construction-106.jpg",
    imageAlt: "Deck project from the All Inclusive Construction portfolio",
    introHeading: "Make the most of the space just beyond your door.",
    intro: [
      "A deck or porch can extend the way you use your home. We help you think through its size, access, materials and the details that make it comfortable for everyday use and time with friends.",
      "The source portfolio includes outdoor living, deck and porch work. The right materials and project scope are selected to suit the home, site conditions and owner's priorities.",
    ],
    sections: [
      {
        heading: "Designed around how you spend time outdoors",
        paragraphs: ["From a simple place to sit to a larger entertaining area, the layout should feel connected to the home and the yard."],
        bullets: ["Custom deck planning", "Wood and composite options", "Porches and outdoor transitions", "Railings, steps and access", "Built-in details and lighting, when included in the approved scope"],
      },
      {
        heading: "Durability begins with the details",
        paragraphs: ["Material selection, drainage, attachment details and local requirements all matter. We'll discuss the right questions for the specific project before construction."],
      },
      {
        heading: "A local team for your next outdoor project",
        paragraphs: ["All Inclusive Construction & Building is based in Branchburg, New Jersey, and works on residential outdoor projects in its confirmed service area."],
      },
    ],
    faq: [
      { question: "Do you build wood and composite decks?", answer: "We work with both traditional wood and low-maintenance composite options. Material suitability depends on the project and selections." },
      { question: "Can a deck include a porch or railing work?", answer: "Decks, porches and handrail projects are present in the source service and review content. Share the specific scope to discuss project fit." },
      { question: "Are permits needed for a deck?", answer: "Requirements vary with the project and municipality. Confirm the applicable local approvals during project planning." },
    ],
    seoTitle: "Custom Decks & Porches in Somerset County, NJ | All Inclusive",
    seoDescription: "Plan a custom deck or porch with All Inclusive Construction & Building, based in Branchburg and serving Somerset County and nearby Central NJ.",
  },
  {
    slug: "your-trusted-general-contractor-in-central-nj",
    path: "/your-trusted-general-contractor-in-central-nj/",
    name: "General contracting",
    eyebrow: "One considered plan",
    title: "A trusted team to bring the moving parts together.",
    lead: "From a room remodel to a substantial home project, thoughtful planning and clear communication make a difference at every stage.",
    image: "https://allinclusivenj.com/wp-content/uploads/2026/05/All_Inc_Den-Addition.jpg",
    imageAlt: "Residential construction project by All Inclusive Construction",
    introHeading: "A home project deserves a clear point of view.",
    intro: [
      "Remodeling can involve design decisions, materials, construction, approvals and multiple trades. A general contractor helps organize the scope and keep those pieces moving together.",
      "All Inclusive Construction & Building works across kitchens, bathrooms, additions and outdoor projects, along with broader residential construction work.",
    ],
    sections: [
      {
        heading: "A connected scope for your home",
        paragraphs: ["The right project starts with a shared understanding of what you want to change, what the home requires and what the work will include."],
        bullets: ["Residential remodeling and additions", "Kitchen and bathroom projects", "Decks, porches and outdoor improvements", "Custom carpentry and finish work", "Project planning and trade coordination"],
      },
      {
        heading: "Local experience, individual attention",
        paragraphs: ["The company is based in Branchburg and has public project and service content across Somerset County and Central New Jersey. Confirm service-area availability for your address when you reach out."],
      },
      {
        heading: "Clear expectations along the way",
        paragraphs: ["A good working relationship depends on open conversations about scope, selections, timing and site conditions. Those expectations are specific to each project and should be set before work begins."],
      },
    ],
    faq: [
      { question: "What kinds of projects do you take on?", answer: "The published core services include kitchen remodels, bathroom remodels, residential additions, decks and porches. Contact the team with your project type and location to check fit." },
      { question: "Do you work outside Somerset County?", answer: "We also take on projects in nearby Central New Jersey communities. Tell us your town and we will confirm availability." },
      { question: "Can you coordinate multiple parts of a remodel?", answer: "The company describes project management and coordination as part of its general contracting work. The specific responsibilities are defined in each project's proposal." },
    ],
    seoTitle: "General Contractor in Central NJ | All Inclusive Construction",
    seoDescription: "Residential remodeling and general contracting in Branchburg, Somerset County and nearby Central New Jersey. Talk with All Inclusive about your project.",
  },
];

export const featuredServices = services.slice(0, 4);

export type ProjectCard = {
  id: string;
  title: string;
  category: "Kitchen" | "Bathroom" | "Addition" | "Outdoor";
  image: string;
  alt: string;
  serviceHref: string;
  size?: "tall" | "wide";
};

export const projects: ProjectCard[] = [
  {
    id: "bathroom-79",
    title: "A more considered bathroom",
    category: "Bathroom",
    image: "https://allinclusivenj.com/wp-content/uploads/2024/09/All-Inclusive-Construction-79.jpg",
    alt: "Bathroom remodel from the company's published project gallery",
    serviceHref: "/bathroom-remodels/",
    size: "tall",
  },
  {
    id: "kitchen-85",
    title: "A kitchen made to gather",
    category: "Kitchen",
    image: "https://allinclusivenj.com/wp-content/uploads/2024/09/All-Inclusive-Construction-85.jpg",
    alt: "Kitchen remodel from the company's published project gallery",
    serviceHref: "/kitchen-remodels/",
    size: "wide",
  },
  {
    id: "addition-124",
    title: "Space to settle in",
    category: "Addition",
    image: "https://allinclusivenj.com/wp-content/uploads/2024/09/All-Inclusive-Construction-124.jpg",
    alt: "Home addition project from the company's published project gallery",
    serviceHref: "/residential-additions/",
  },
  {
    id: "deck-106",
    title: "A little more room outside",
    category: "Outdoor",
    image: "https://allinclusivenj.com/wp-content/uploads/2024/09/All-Inclusive-Construction-106.jpg",
    alt: "Deck project from the company's published project gallery",
    serviceHref: "/decks/",
  },
  {
    id: "kitchen-bridgewater-7",
    title: "Kitchen remodel",
    category: "Kitchen",
    image: "https://allinclusivenj.com/wp-content/uploads/2024/08/Kitchen-Remodel-Bridgewater-NJ-7.jpg",
    alt: "Kitchen renovation photo published in the All Inclusive Construction portfolio",
    serviceHref: "/kitchen-remodels/",
  },
  {
    id: "bathroom-73",
    title: "Bathroom renovation",
    category: "Bathroom",
    image: "https://allinclusivenj.com/wp-content/uploads/2024/09/All-Inclusive-Construction-73.jpg",
    alt: "Bathroom renovation photo published in the All Inclusive Construction portfolio",
    serviceHref: "/bathroom-remodels/",
  },
  {
    id: "addition-117",
    title: "Home addition",
    category: "Addition",
    image: "https://allinclusivenj.com/wp-content/uploads/2024/09/All-Inclusive-Construction-117.jpg",
    alt: "Home addition photo published in the All Inclusive Construction portfolio",
    serviceHref: "/residential-additions/",
    size: "wide",
  },
  {
    id: "deck-92",
    title: "Outdoor living project",
    category: "Outdoor",
    image: "https://allinclusivenj.com/wp-content/uploads/2024/09/All-Inclusive-Construction-92.jpg",
    alt: "Outdoor living photo published in the All Inclusive Construction portfolio",
    serviceHref: "/decks/",
  },
  {
    id: "bathroom-newer",
    title: "Bathroom remodel",
    category: "Bathroom",
    image: "https://allinclusivenj.com/wp-content/uploads/2026/02/pc6.jpg",
    alt: "Bathroom remodel image from the current All Inclusive Construction gallery",
    serviceHref: "/bathroom-remodels/",
  },
  {
    id: "kitchen-house-7",
    title: "Kitchen renovation",
    category: "Kitchen",
    image: "https://allinclusivenj.com/wp-content/uploads/2026/02/house-7.jpg",
    alt: "Kitchen renovation image from the current All Inclusive Construction gallery",
    serviceHref: "/kitchen-remodels/",
  },
  {
    id: "porch-addition",
    title: "A bright addition to the home",
    category: "Addition",
    image: "https://allinclusivenj.com/wp-content/uploads/2026/05/All_Inc_SunPorchAdd.jpg",
    alt: "Sun porch addition image published by All Inclusive Construction",
    serviceHref: "/residential-additions/",
  },
  {
    id: "deck-105",
    title: "Custom deck project",
    category: "Outdoor",
    image: "https://allinclusivenj.com/wp-content/uploads/2024/09/All-Inclusive-Construction-105.jpg",
    alt: "Deck image from the All Inclusive Construction portfolio",
    serviceHref: "/decks/",
  },
];

export const testimonials = [
  {
    quote: "Working with Geraldine, Ed and the team was easy, collaborative and fun. They were extremely prompt and professional from the estimate through completion.",
    name: "Clare D.",
    source: "Houzz review",
    service: "Bathroom remodel",
  },
  {
    quote: "They are a great company—honest, hard-working employees who go above and beyond to make the customer happy. They are easy to get ahold of and answer questions quickly.",
    name: "Kelly H.",
    source: "Houzz review",
    service: "Kitchen remodel",
  },
  {
    quote: "They are the most on-time and responsive construction company I have dealt with in my 56 years living in this area. I give them the highest possible recommendation.",
    name: "Richard L.",
    source: "Houzz review",
    service: "Kitchen remodel",
  },
  {
    quote: "The handrails came in a few weeks ahead of schedule. They came to do a final check after installation to be sure the job was done to our liking.",
    name: "Lori P.",
    source: "Houzz review",
    service: "Handrails",
  },
];

export const awards = [
  { year: "2023", title: "Remodeler of the Year", organization: "Metropolitan Builders and Contractors Association", image: "https://allinclusivenj.com/wp-content/uploads/2024/08/remodeler-of-year.jpg" },
  { year: "2023", title: "Best Outdoor Living Space", organization: "Award listing; deck project, Easton, PA", image: "https://allinclusivenj.com/wp-content/uploads/2024/08/2023-Best-Outdoor-Living-Space-1024x683-1.jpg" },
  { year: "2023", title: "Best Bathroom Renovation", organization: "Award listing; Branchburg, NJ", image: "https://allinclusivenj.com/wp-content/uploads/2024/08/2023-Best-Bathroom-Renovation-.jpg" },
  { year: "2023", title: "Best Special Feature Space", organization: "Award listing; music studio, Watchung, NJ", image: "https://allinclusivenj.com/wp-content/uploads/2024/08/2023-Best-Special-Feature-Space.jpg" },
  { year: "2022", title: "Best Outdoor Living Space", organization: "Award listing; deck with custom bench seating, Branchburg, NJ", image: "https://allinclusivenj.com/wp-content/uploads/2024/08/2022-Best-Outdoor-Living-Space.jpg" },
  { year: "2021", title: "Best Addition ($250k+)", organization: "Award listing; Bridgewater, NJ", image: "https://allinclusivenj.com/wp-content/uploads/2024/08/2021-Best-Addition.jpg" },
  { year: "2021", title: "Best Accessibility Renovation", organization: "Award listing; Middletown, NJ", image: "https://allinclusivenj.com/wp-content/uploads/2024/08/2021-Best-Accessibility-Renovation.jpg" },
];

export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  imageAlt: string;
  sections: ArticleSection[];
  sourceLink?: { label: string; href: string };
};

export const articles: Article[] = [
  {
    slug: "second-story-addition-vs-moving-to-a-bigger-home-whats-the-right-choice-for-you",
    title: "A second-story addition or a move: questions to help you decide",
    excerpt: "When a home no longer fits, the choice between expanding and moving depends on the property, your priorities and the work involved.",
    category: "Planning a project",
    image: "https://allinclusivenj.com/wp-content/uploads/2024/09/All-Inclusive-Construction-102.jpg",
    imageAlt: "Home project image used in the original addition article",
    sections: [
      { heading: "Start with what you need from home", paragraphs: ["A growing household, a need for a dedicated workspace or a different daily routine can make the current layout feel limiting. Write down the changes that would make home work better before comparing options.", "A renovation may help you keep a neighborhood and a property you value. A move may be a better fit when the location itself no longer works or the changes required are not practical for the home."] },
      { heading: "Understand the property before sketching an addition", paragraphs: ["An addition depends on more than available yard space. Existing structure, access, zoning, setbacks, utilities and municipal approvals can all shape what is feasible. A second story may involve structural evaluation and extensive coordination.", "The first planning conversation should identify which professionals, approvals and site information are needed—not assume a design can be built as drawn."] },
      { heading: "Compare the full project, not just square footage", paragraphs: ["Moving and renovating have different costs, timelines and disruptions. Compare the complete scope of each option with qualified real-estate, financial and construction advice. Market conditions change, so avoid relying on an old online average."] },
      { heading: "Take a practical next step", paragraphs: ["If you love your location and want to explore what your property could support, an early conversation can help frame the questions to investigate. All Inclusive Construction & Building works on residential additions and remodeling in its confirmed service area."] },
    ],
  },
  {
    slug: "renovate-or-move-the-3-factors-to-consider-all-inclusive-construction",
    title: "Renovate or move? Three factors to consider first",
    excerpt: "A simple framework for weighing location, project scope and the way you want to live in your next home.",
    category: "Planning a project",
    image: "https://allinclusivenj.com/wp-content/uploads/2024/09/All-Inclusive-Construction-124.jpg",
    imageAlt: "Residential project image from the All Inclusive Construction portfolio",
    sections: [
      { heading: "1. Does your location still fit?", paragraphs: ["A home can change, but a neighborhood cannot. Consider the parts of your current location that matter to you and whether the house can be adapted to your needs."] },
      { heading: "2. What does the house need?", paragraphs: ["Make a clear list of the problems you want to solve. Some needs can be addressed with a room remodel; others may call for structural work or may be difficult to change. A site evaluation helps clarify feasibility."] },
      { heading: "3. What does each option ask of you?", paragraphs: ["Renovation involves planning, selections and construction disruption. Moving involves finding another property, transaction costs and a transition to a new place. Talk with the right professionals about your own budget, timing and priorities."] },
      { heading: "There is no one-size-fits-all answer", paragraphs: ["The strongest choice is the one that supports your longer-term goals. A contractor can help assess a renovation scope; real-estate and financial professionals can advise on the parts outside construction."] },
    ],
  },
  {
    slug: "home-renovation-trends-in-nj-for-2026-what-homeowners-are-asking-for-now",
    title: "Home renovation ideas that put everyday life first",
    excerpt: "Comfort, adaptable rooms and practical storage are more useful starting points than chasing a trend for its own sake.",
    category: "Design notes",
    image: "https://allinclusivenj.com/wp-content/uploads/2026/04/All_Inc_SunRoom_Add.jpg",
    imageAlt: "Sunroom addition photo from All Inclusive Construction",
    sections: [
      { heading: "Design around the routine", paragraphs: ["The most useful renovation ideas start with the way a household actually uses its rooms. Think about where people gather, how storage is used and what causes friction in a typical day."] },
      { heading: "Create flexible rooms", paragraphs: ["An office that can also host guests, a family room with useful storage, or a finished area designed for more than one activity can make a home feel more adaptable."] },
      { heading: "Choose finishes for the long term", paragraphs: ["A material should suit its job as well as the look of the room. Consider durability, maintenance and how a finish will work with existing spaces before choosing it."] },
      { heading: "Make inspiration personal", paragraphs: ["Trends can spark an idea, but the best plan reflects the home and the people who live there. A project conversation helps turn inspiration into a realistic scope."] },
    ],
  },
  {
    slug: "what-nj-homeowners-want-in-a-modern-kitchen-2026-guide",
    title: "What makes a modern kitchen work well?",
    excerpt: "Good kitchen design is less about a single look and more about movement, storage, lighting and the daily habits of the household.",
    category: "Kitchen design",
    image: "https://allinclusivenj.com/wp-content/uploads/2026/04/IMG_1429-scaled.jpg",
    imageAlt: "Kitchen image from the All Inclusive Construction article gallery",
    sections: [
      { heading: "Plan the workflow", paragraphs: ["Pay attention to how you move between food storage, preparation, cooking and cleanup. A layout should make those tasks easier without ignoring the way family and guests use the room."] },
      { heading: "Make storage earn its place", paragraphs: ["Cabinet interiors, pantry space, deep drawers and accessible everyday items can reduce clutter. Start with what you store and reach for before choosing organizers."] },
      { heading: "Balance function and feeling", paragraphs: ["Lighting, durable work surfaces and a considered palette all contribute to how a kitchen feels. A strong plan brings the practical decisions together with a style that belongs in your home."] },
      { heading: "Design for your household—not a headline", paragraphs: ["A kitchen should reflect the people using it. The right design may be classic, contemporary or somewhere between; the aim is a space that stays useful after today's trends move on."] },
    ],
  },
  {
    slug: "geraldine-smith-with-congressman-josh-gottheimer-nj-5",
    title: "Geraldine Smith joins a housing conversation in Washington, D.C.",
    excerpt: "A company news item about Geraldine Smith's participation in an NAHB Leadership Orientation and conversations about housing policy.",
    category: "Company news",
    image: "https://allinclusivenj.com/wp-content/uploads/2026/06/Geraldine.jpg",
    imageAlt: "Geraldine Smith, owner of All Inclusive Construction & Building",
    sections: [
      { heading: "An industry leadership opportunity", paragraphs: ["Geraldine Smith, owner of All Inclusive Construction and Building, wrote about joining a small group of home-builder association members for an NAHB Leadership Orientation in Washington, D.C."] },
      { heading: "Discussing housing issues", paragraphs: ["The source article describes orientation sessions with NAHB leaders and meetings with members of Congress about issues facing builders and remodelers."] },
      { heading: "Read the original account", paragraphs: ["The original company post links to the Metropolitan Builders & Contractors Association newsletter. Follow the source link for the full contemporaneous account."] },
    ],
    sourceLink: { label: "Read the original newsletter", href: "https://myemail.constantcontact.com/Weekender-for-June-9--2023.html?soid=1102126239843&aid=yOgY-oHgaP0" },
  },
  {
    slug: "nahb-emerging-leaders-talk-housing-with-lawmakers-on-capitol-hill",
    title: "NAHB emerging leaders discuss housing with lawmakers",
    excerpt: "Geraldine Smith joined an NAHB leadership program and conversations with industry leaders and members of Congress.",
    category: "Company news",
    image: "https://allinclusivenj.com/wp-content/uploads/2026/06/Geraldine.jpg",
    imageAlt: "Geraldine Smith at an industry leadership event",
    sections: [
      { heading: "Representing the remodeling industry", paragraphs: ["All Inclusive Construction and Building owner Geraldine Smith was invited to Washington, D.C. for an NAHB Leadership Orientation, according to the source company post."] },
      { heading: "A conversation about housing", paragraphs: ["The original post says the group met with senior NAHB officers and members of Congress to discuss policy issues facing builders and remodelers."] },
      { heading: "Read the NAHB article", paragraphs: ["For the full report and policy context, read the original National Association of Home Builders article."] },
    ],
    sourceLink: { label: "Read the NAHB article", href: "https://www.nahb.org/blog/2023/04/nahb-emerging-leaders-talk-housing-with-lawmakers-on-capitol-hill" },
  },
  {
    slug: "kitchen-remodeling-costs-in-new-jersey-what-homeowners-should-know",
    title: "What shapes the cost of a kitchen remodel?",
    excerpt: "Kitchen renovation budgets depend on the room, the work and the selections—not a single statewide average.",
    category: "Kitchen planning",
    image: "https://allinclusivenj.com/wp-content/uploads/2024/09/All-Inclusive-Construction-114.jpg",
    imageAlt: "Kitchen renovation photo from the All Inclusive Construction portfolio",
    sections: [
      { heading: "There is no single number for every kitchen", paragraphs: ["Two rooms that look similar can have different scopes. The useful first step is describing what you want to change and what should stay."] },
      { heading: "The decisions that affect scope", paragraphs: ["Cabinetry, countertops, appliances and finish selections all contribute to the plan. Changes to layout, walls, plumbing or electrical can add planning and construction work.", "The size and condition of the room matter, but they are not the only factors. A smaller room with significant custom work may involve more complexity than a larger, simpler update."] },
      { heading: "Create a clear project brief", paragraphs: ["List your priorities, preferred features and constraints. Ask for a written scope that explains included work, allowances, assumptions and exclusions before comparing proposals."] },
      { heading: "Talk through your home specifically", paragraphs: ["Generic online cost ranges are not a substitute for a project evaluation. Contact the team to discuss the home and the kind of renovation you are considering; no pricing is promised by this guide."] },
    ],
  },
  {
    slug: "7-smart-design-ideas-for-small-bathroom-remodels-in-nj",
    title: "Seven thoughtful ideas for a small bathroom",
    excerpt: "A compact bathroom can work harder with a well-planned layout, purposeful storage and details that help the room feel open.",
    category: "Bathroom design",
    image: "https://allinclusivenj.com/wp-content/uploads/2026/04/MMH3.jpg",
    imageAlt: "Bathroom project image from All Inclusive Construction",
    sections: [
      { heading: "1. Start with the layout", paragraphs: ["Before selecting tile, note how the door, fixtures and walking space work together. Keeping plumbing in place may be a practical choice, depending on the project."] },
      { heading: "2. Build storage into the plan", paragraphs: ["A recessed niche, a useful vanity drawer or a medicine cabinet can keep everyday items close without crowding the counter."] },
      { heading: "3. Keep the visual field calm", paragraphs: ["Mirrors, consistent finishes, glass and a considered palette can help a small room feel more open. Choose materials that suit the room and the maintenance you want."] },
      { heading: "4. Give the room one point of interest", paragraphs: ["A feature tile, vanity or light can add character. Let the surrounding elements support rather than compete with it."] },
      { heading: "5. Plan the lighting", paragraphs: ["A combination of useful task light and comfortable general light can make daily routines easier. Electrical work should be reviewed for the specific space."] },
      { heading: "6. Prioritize the parts you cannot see", paragraphs: ["Waterproofing, ventilation and installation quality matter to the long-term performance of a bathroom. Include them in the project conversation."] },
      { heading: "7. Make choices that fit your household", paragraphs: ["Accessibility, storage and fixture decisions should reflect the people using the room now and in the future. A qualified project team can help discuss practical options."] },
    ],
  },
];

export const locationPages = [
  {
    slug: "home-remodeling-in-branchburg",
    path: "/home-remodeling-in-branchburg/",
    eyebrow: "Home base",
    title: "Home remodeling in Branchburg, NJ.",
    lead: "All Inclusive Construction & Building is based in Branchburg and helps local homeowners plan thoughtful residential remodeling and construction projects.",
    image: "https://allinclusivenj.com/wp-content/uploads/2024/09/All-Inclusive-Construction-81.jpg",
    imageAlt: "Home remodeling project from the All Inclusive Construction portfolio",
    sections: [
      { heading: "Projects shaped around your home", paragraphs: ["From a kitchen or bathroom remodel to an addition or outdoor project, each conversation begins with what you want to improve and what the property can support."] },
      { heading: "A local starting point", paragraphs: ["The team works from Branchburg and serves homeowners in its confirmed local service area. Tell us your town and project type so we can confirm availability."] },
    ],
  },
  {
    slug: "home-remodeling-home-improvement-services-in-somerset-county-nj",
    path: "/home-remodeling-home-improvement-services-in-somerset-county-nj/",
    eyebrow: "Somerset County",
    title: "Home remodeling across Somerset County.",
    lead: "Bring your goals, your questions and your home. We will start with a clear conversation about the project you have in mind.",
    image: "https://allinclusivenj.com/wp-content/uploads/2024/09/All-Inclusive-Construction-125.jpg",
    imageAlt: "Residential remodeling work from the All Inclusive Construction project gallery",
    sections: [
      { heading: "A range of residential projects", paragraphs: ["The company's published work includes kitchen and bathroom remodels, additions, decks and porches, and broader residential construction. A project plan is developed around the home's conditions and the owner's priorities."] },
      { heading: "Confirming service availability", paragraphs: ["Service coverage can depend on project type, timing and location. Contact the team with your town and a brief project description to confirm that your home is within the active service area."] },
    ],
  },
];

export const legalPageContent: Record<string, { title: string; body: string[]; needsReview?: boolean }> = {
  "accessibility-statement": {
    title: "Accessibility statement",
    body: [
      "All Inclusive Construction & Building is committed to making this website usable by as many people as possible. We continue to review the site and improve its accessibility as content and features change.",
      "If you encounter a barrier or need information in another format, please contact the team at allinclusivenj@gmail.com or call +1 (732) 484-9008.",
    ],
    needsReview: true,
  },
  "privacy-policy": {
    title: "Privacy policy",
    body: [
      "The source website's public policy page did not return complete policy text during this review. The policy for this rebuilt site must be supplied and approved by the business before public launch.",
      "This prototype inquiry form asks for contact information and project details so the team can respond to a request. Please do not include sensitive personal information in the message field. Contact allinclusivenj@gmail.com with privacy questions.",
    ],
    needsReview: true,
  },
  "terms-conditions": {
    title: "Terms & conditions",
    body: [
      "The source website's public terms page did not return complete terms during this review. Approved terms must be supplied by the business and reviewed before this page is published as final legal copy.",
    ],
    needsReview: true,
  },
  "cookie-policy": {
    title: "Cookie policy",
    body: [
      "The source website's public cookie-policy page did not return complete policy text during this review. The final copy should describe the actual analytics, cookies and consent controls used on the production site.",
    ],
    needsReview: true,
  },
};
