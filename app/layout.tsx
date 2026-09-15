import type { Metadata } from "next";
import { DM_Mono, DM_Sans, Syne } from "next/font/google";
import "./globals.css";

const display = Syne({
  variable: "--font-display",
  subsets: ["latin"],
});

const mono = DM_Mono({
  variable: "--font-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
});

const sans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lysere — Automatisations sur mesure",
  description: "Automatisations commerciales, recherche B2B et agent vocal : des systèmes conçus pour le travail réel.",
  metadataBase: new URL("https://lysere.fr"),
  openGraph: {
    title: "Lysere — Systèmes pour le travail qui n’attend pas",
    description: "Automatisations commerciales, recherche B2B et agent vocal : trois systèmes documentés sans décor de SaaS.",
    type: "website",
    locale: "fr_FR",
    images: [{ url: "/og-editorial.png", width: 1731, height: 909, alt: "Lysere — Portfolio de systèmes métier" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lysere — Systèmes pour le travail qui n’attend pas",
    description: "Automatisations commerciales, recherche B2B et agent vocal : trois systèmes documentés sans décor de SaaS.",
    images: ["/og-editorial.png"],
  },
  icons: {
    icon: "/lysere-favicon.svg",
    shortcut: "/lysere-favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${display.variable} ${sans.variable} ${mono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
