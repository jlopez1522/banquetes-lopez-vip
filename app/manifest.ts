import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Eventos López VIP",
    short_name: "López VIP",
    description: "Organización de eventos y alquileres para celebraciones en Bogotá.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#090909",
    lang: "es-CO",
    icons: [{ src: "/icon", sizes: "64x64", type: "image/png" }],
  };
}
