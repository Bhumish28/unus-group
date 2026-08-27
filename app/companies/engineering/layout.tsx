import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering & Consultant",
  description:
    "UNUS Engineering & Consultant provides quantity surveying, cost estimation, cost control, contract administration, planning and project management services.",
  alternates: {
    canonical: "/companies/engineering",
  },
  openGraph: {
    title: "UNUS Engineering & Consultant",
    description:
      "Quantity surveying, cost estimation, cost control, contract administration and project management services by UNUS Group.",
    url: "/companies/engineering",
    images: [
      {
        url: "/hero/engineering.png",
        alt: "UNUS Engineering & Consultant",
      },
    ],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "UNUS Group",
      item: "https://www.unusgroup.in/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "UNUS Engineering & Consultant",
      item: "https://www.unusgroup.in/companies/engineering",
    },
  ],
};

export default function EngineeringLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
