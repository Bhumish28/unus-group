import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UNUS Homes | Ground Screw Construction",
  description:
    "Explore UNUS Homes ground screw foundation solutions for homes, cottages, solar foundations, fencing and lightweight structures with efficient installation.",
  alternates: {
    canonical: "/companies/homes",
  },
  openGraph: {
    title: "UNUS Homes | Ground Screw Construction",
    description:
      "Ground screw foundation solutions for homes, cottages, solar foundations, fencing and lightweight structures.",
    url: "/companies/homes",
    images: [
      {
        url: "/hero/homes.jpg",
        alt: "UNUS Homes ground screw construction",
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
      name: "UNUS Homes",
      item: "https://www.unusgroup.in/companies/homes",
    },
  ],
};

export default function HomesLayout({
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
