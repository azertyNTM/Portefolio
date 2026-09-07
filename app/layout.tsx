import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alexis Automations — Processus utiles, systèmes fiables",
  description: "Portfolio d'automatisations IA conçues pour accélérer les opérations commerciales et métier.",
  metadataBase: new URL("https://alexis-automations-portfolio.instalife.chatgpt.site"),
  openGraph: {
    title: "Alexis Automations — Systèmes IA utiles",
    description: "Des automatisations IA conçues pour rendre les opérations plus nettes, rapides et fiables.",
    type: "website",
    locale: "fr_FR",
    images: [{ url: "/og-refined.png", width: 1734, height: 907, alt: "Alexis Automations — Systèmes IA utiles" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alexis Automations — Systèmes IA utiles",
    description: "Des automatisations IA conçues pour rendre les opérations plus nettes, rapides et fiables.",
    images: ["/og-refined.png"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
