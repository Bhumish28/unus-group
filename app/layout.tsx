import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://www.unusgroup.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "UNUS Group",
  title: {
    default: "UNUS Group | Engineering, Consultancy & Interior Design",
    template: "%s | UNUS Group",
  },
  description:
    "UNUS Group brings together engineering consultancy, project management, ground screw construction solutions, homes and interior design services across India.",
  keywords: [
    "UNUS Group",
    "UNUS Engineering & Consultant",
    "UNUS Homes",
    "UNUS Interior & Design",
    "engineering consultancy",
    "quantity surveying",
    "project management consultancy",
    "ground screw foundation",
    "interior design",
    "construction consultancy India",
  ],
  authors: [{ name: "UNUS Group", url: siteUrl }],
  creator: "UNUS Group",
  publisher: "UNUS Group",
  category: "Engineering and Construction",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "UNUS Group",
    title: "UNUS Group | Engineering, Consultancy & Interior Design",
    description:
      "Engineering consultancy, project management, ground screw construction, homes and interior design services under one group.",
    images: [
      {
        url: "/hero/engineering.png",
        alt: "UNUS Group engineering, homes and interior design services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UNUS Group | Engineering, Consultancy & Interior Design",
    description:
      "Engineering consultancy, project management, ground screw construction, homes and interior design services under one group.",
    images: ["/hero/engineering.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  manifest: "/manifest.webmanifest",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "UNUS Group",
  url: siteUrl,
  logo: `${siteUrl}/unus-logo.jpeg`,
  image: `${siteUrl}/unus-logo.jpeg`,
  description:
    "UNUS Group provides engineering consultancy, project management, ground screw construction solutions, homes and interior design services.",
  email: "unusconsultantsak@gmail.com",
  telephone: ["+91-83788-13147", "+91-89993-94694"],
  founder: [
    { "@type": "Person", name: "Aarohi Pawar" },
    { "@type": "Person", name: "Kumar Pawar" },
  ],
  areaServed: [
    "Mumbai",
    "Goa",
    "Pune",
    "Badlapur",
    "Shirdi",
    "Karjat",
    "Sawantwadi",
    "Sindhudurg",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-83788-13147",
      email: "unusconsultantsak@gmail.com",
      contactType: "customer service",
      areaServed: "IN",
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "UNUS Group",
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
  inLanguage: "en-IN",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        {children}
      </body>
    </html>
  );
}
