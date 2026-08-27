import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "UNUS Group",
    short_name: "UNUS",
    description:
      "Engineering consultancy, homes, ground screw construction and interior design services.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#145A46",
    icons: [
      {
        src: "/favicon.png",
        sizes: "472x529",
        type: "image/png",
      },
    ],
  };
}
