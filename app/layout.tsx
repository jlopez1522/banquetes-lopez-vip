import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Banquetes Lopez V.I.P. | Casa de banquetes en Bogota",
  description:
    "Banquetes Lopez V.I.P., casa de banquetes y planificacion de eventos en Bogota.",
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
