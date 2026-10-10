import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const display = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lysere — Automatisation de processus sur mesure",
  description: "Lysere conçoit des automatisations sur mesure pour réduire les tâches manuelles, connecter les outils et accélérer les processus des entreprises.",
  metadataBase: new URL("https://lysere.fr"),
  openGraph: {
    title: "Lysere — Automatisation de processus sur mesure",
    description: "Des systèmes sur mesure pour réduire les tâches manuelles, connecter les outils et accélérer les processus des entreprises.",
    type: "website",
    locale: "fr_FR",
    images: [{ url: "/og-lysere.png", width: 1200, height: 630, alt: "Lysere — Automatisation de processus sur mesure" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lysere — Automatisation de processus sur mesure",
    description: "Des systèmes sur mesure pour réduire les tâches manuelles, connecter les outils et accélérer les processus des entreprises.",
    images: ["/og-lysere.png"],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }, { url: "/favicon.ico", sizes: "any" }],
    apple: "/favicon-180.png",
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
        className={`${display.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
