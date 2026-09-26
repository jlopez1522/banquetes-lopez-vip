import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Banquetes López V.I.P.",
    short_name: "Banquetes López",
    description: "Organización integral de eventos sociales y empresariales en Bogotá.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#121011",
    lang: "es-CO",
    icons: [{ src: "/icon", sizes: "64x64", type: "image/png" }],
  };
}
