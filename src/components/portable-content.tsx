import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";

export function PortableContent({ value }: { value: PortableTextBlock[] }) {
  if (!value?.length) return null;

  return (
    <div className="space-y-5 text-sm leading-7 text-muted [&_a]:font-semibold [&_a]:text-forest [&_h2]:mb-3 [&_h2]:mt-8 [&_h2]:font-display [&_h2]:text-3xl [&_h2]:font-normal [&_h2]:tracking-[-0.04em] [&_h2]:text-ink [&_h3]:mb-2 [&_h3]:mt-6 [&_h3]:font-semibold [&_h3]:text-ink [&_li]:pl-1 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-5 [&_p]:m-0 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
      <PortableText value={value} />
    </div>
  );
}
