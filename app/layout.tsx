import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Amor | Estética facial y manicure",
  description: "Servicios de estética facial, manicure y bienestar.",

  openGraph: {
    title: "Amor | Estética facial y manicure",
    description: "Servicios de estética facial, manicure y bienestar.",
    siteName: "Amor",
    type: "website",
    locale: "es_AR",
  },

  twitter: {
    card: "summary_large_image",
    title: "Amor | Estética facial y manicure",
    description: "Servicios de estética facial, manicure y bienestar.",
  },
  other: {
    "instagram:site": "@angel.lux_sanjuan",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
