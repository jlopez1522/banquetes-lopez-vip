import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

function resolveSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const vercelHost =
    process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim() ||
    process.env.VERCEL_URL?.trim();
  const candidates = [
    configuredUrl,
    vercelHost
      ? vercelHost.includes("://")
        ? vercelHost
        : `https://${vercelHost}`
      : undefined,
    "http://localhost:3000",
  ];

  for (const candidate of candidates) {
    if (!candidate) continue;

    try {
      return new URL(candidate);
    } catch {
      // Continue to the provider URL or the local development fallback.
    }
  }

  return new URL("http://localhost:3000");
}

export const metadata: Metadata = {
  metadataBase: resolveSiteUrl(),
  applicationName: "Banquetes López V.I.P.",
  title: {
    default: "Banquetes López V.I.P. | Casa de banquetes en Bogotá",
    template: "%s | Banquetes López V.I.P.",
  },
  description:
    "Banquetes López V.I.P.: organización integral, catering, decoración y producción de eventos sociales y empresariales en Bogotá.",
  keywords: [
    "casa de banquetes Bogotá",
    "banquetes Bogotá",
    "decoración de eventos",
    "catering Bogotá",
    "eventos empresariales Bogotá",
    "eventos en Bogotá",
    "Banquetes López V.I.P.",
  ],
  category: "events",
  creator: "Banquetes López V.I.P.",
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: "Banquetes López V.I.P.",
    title: "Banquetes López V.I.P. | Celebraciones en Bogotá",
    description: "Organización integral, catering, decoración y producción para eventos sociales y empresariales.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Banquetes López V.I.P.",
    description: "Organización integral de eventos sociales y empresariales en Bogotá.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: { canonical: "/" },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#121011",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${cormorant.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
