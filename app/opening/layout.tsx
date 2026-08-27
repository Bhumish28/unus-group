import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Opening Contact App",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function OpeningLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
