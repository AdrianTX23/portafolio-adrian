import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { LocaleProvider } from "@/components/providers/locale-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const description =
  "Ingeniero de Sistemas especializado en desarrollo Full Stack moderno con Next.js, React, TypeScript y PostgreSQL.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Adrián Pico Martínez — Ingeniero de Sistemas",
    template: "%s · Adrián Pico Martínez",
  },
  description,
  keywords: [
    "Adrián Pico Martínez",
    "Ingeniero de Sistemas",
    "Frontend Software Engineer",
    "Next.js",
    "React",
    "TypeScript",
    "Desarrollador Full Stack",
    "Barranquilla",
  ],
  authors: [{ name: "Adrián Pico Martínez", url: siteUrl }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Adrián Pico Martínez",
    title: "Adrián Pico Martínez — Ingeniero de Sistemas",
    description,
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Adrián Pico Martínez — Ingeniero de Sistemas",
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/* suppressHydrationWarning: las extensiones del navegador inyectan atributos en <body> antes de que React hidrate */}
      <body suppressHydrationWarning className="flex min-h-full flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LocaleProvider>
            <TooltipProvider>{children}</TooltipProvider>
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
