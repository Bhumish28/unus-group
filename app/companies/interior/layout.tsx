import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interior & Design",
  description:
    "UNUS Interior & Design creates residential and commercial interiors, modular kitchens, space planning, lighting design, customized furniture and turnkey interiors.",
  alternates: {
    canonical: "/companies/interior",
  },
  openGraph: {
    title: "UNUS Interior & Design",
    description:
      "Residential and commercial interior design, modular kitchens, space planning, lighting and turnkey interior solutions by UNUS Group.",
    url: "/companies/interior",
    images: [
      {
        url: "/hero/interior.jpg",
        alt: "UNUS Interior & Design",
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
      name: "UNUS Interior & Design",
      item: "https://www.unusgroup.in/companies/interior",
    },
  ],
};

export default function InteriorLayout({
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
