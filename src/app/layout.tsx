import { Inter } from "next/font/google";
import localFont from "next/font/local";

import type { Metadata } from "next";

import { Navbar } from "@/components/blocks/navbar";
import { StyleGlideProvider } from "@/components/styleglide-provider";
import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.css";

const dmSans = localFont({
  src: [
    { path: "../../fonts/dm-sans/DMSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../fonts/dm-sans/DMSans-Italic.ttf", weight: "400", style: "italic" },
    { path: "../../fonts/dm-sans/DMSans-Medium.ttf", weight: "500", style: "normal" },
    { path: "../../fonts/dm-sans/DMSans-MediumItalic.ttf", weight: "500", style: "italic" },
    { path: "../../fonts/dm-sans/DMSans-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../../fonts/dm-sans/DMSans-SemiBoldItalic.ttf", weight: "600", style: "italic" },
    { path: "../../fonts/dm-sans/DMSans-Bold.ttf", weight: "700", style: "normal" },
    { path: "../../fonts/dm-sans/DMSans-BoldItalic.ttf", weight: "700", style: "italic" },
  ],
  variable: "--font-dm-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Luminso - nowoczesne strony dla lokalnych firm",
    template: "%s | Luminso",
  },
  description:
    "Projekt, domena, uruchomienie i opieka nad stroną internetową w jednym miejscu.",
  authors: [{ name: "Luminso" }],
  creator: "Luminso",
  publisher: "Luminso",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Luminso - nowoczesne strony dla lokalnych firm",
    description:
      "Projekt, domena, uruchomienie i opieka nad stroną internetową w jednym miejscu.",
    siteName: "Luminso",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Luminso",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body className={`${dmSans.variable} ${inter.variable} bg-[#05070d] antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <StyleGlideProvider />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
