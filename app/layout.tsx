import type { Metadata } from "next";
import { DM_Mono, Syne } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Alexis Automations — Portfolio de systèmes métier",
  description: "Automatisations commerciales, recherche B2B et agent vocal : des systèmes conçus pour le travail réel.",
  metadataBase: new URL("https://alexis-automations-portfolio.instalife.chatgpt.site"),
  openGraph: {
    title: "Alexis Automations — Systèmes pour le travail qui n’attend pas",
    description: "Automatisations commerciales, recherche B2B et agent vocal : trois systèmes documentés sans décor de SaaS.",
    type: "website",
    locale: "fr_FR",
    images: [{ url: "/og-editorial.png", width: 1731, height: 909, alt: "Alexis Automations — Portfolio de systèmes métier" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alexis Automations — Systèmes pour le travail qui n’attend pas",
    description: "Automatisations commerciales, recherche B2B et agent vocal : trois systèmes documentés sans décor de SaaS.",
    images: ["/og-editorial.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
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
        className={`${display.variable} ${mono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
