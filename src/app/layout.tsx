import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://allinclusivenj.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "All Inclusive Construction & Building | Branchburg, NJ",
    template: "%s | All Inclusive Construction",
  },
  description:
    "Thoughtful residential remodeling and construction in Branchburg, Somerset County and nearby Central New Jersey. Explore kitchens, bathrooms, additions and outdoor projects.",
  applicationName: "All Inclusive Construction & Building",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "All Inclusive Construction & Building",
    title: "All Inclusive Construction & Building | Branchburg, NJ",
    description:
      "Thoughtful residential remodeling and construction in Branchburg, Somerset County and nearby Central New Jersey.",
    images: [
      {
        url: "https://allinclusivenj.com/wp-content/uploads/2024/09/All-Inclusive-Construction-124.jpg",
        width: 1200,
        height: 800,
        alt: "Home remodeling and construction project by All Inclusive Construction",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "All Inclusive Construction & Building | Branchburg, NJ",
    description: "Thoughtful residential remodeling and construction in Somerset County and Central New Jersey.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-paper text-ink antialiased">{children}</body>
    </html>
  );
}
