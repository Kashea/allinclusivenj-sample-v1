import type { ReactNode, SVGProps } from "react";

type IconName = "arrow-right" | "arrow-up-right" | "chevron-down" | "phone" | "menu" | "close" | "pin" | "check" | "spark" | "plus";

const paths: Record<IconName, ReactNode> = {
  "arrow-right": <><path d="M4.5 12h15" /><path d="m13 5.5 6.5 6.5-6.5 6.5" /></>,
  "arrow-up-right": <><path d="M7 17 17 7" /><path d="M8 7h9v9" /></>,
  "chevron-down": <path d="m6 9 6 6 6-6" />,
  phone: <><path d="M7.2 3.5h3l1.5 4.2-2 1.5a13.7 13.7 0 0 0 5.1 5.1l1.5-2 4.2 1.5v3c0 1.1-.9 2-2 2A15.5 15.5 0 0 1 5.2 5.5c0-1.1.9-2 2-2Z" /></>,
  menu: <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>,
  close: <><path d="m6 6 12 12" /><path d="M18 6 6 18" /></>,
  pin: <><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2.2" /></>,
  check: <path d="m5 12 4.5 4.5L19 7" />,
  spark: <><path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z" /><path d="m19 16 .8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z" /></>,
  plus: <><path d="M12 5v14" /><path d="M5 12h14" /></>,
};

export function Icon({
  name,
  className,
  ...props
}: SVGProps<SVGSVGElement> & { name: IconName }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      viewBox="0 0 24 24"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
