import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Toaster } from "react-hot-toast";
import SiteLayout from "@/components/layout/SiteLayout";
import "./globals.css";
import ChatWidget from "@/components/shared/ChatWidget";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    default: "Alpine Digital School",
    template: "%s | Alpine Digital School",
  },
  description:
    "A modern premium school website for admissions, faculty, achievements, events, gallery, news, and parent communication.",
  keywords: [
    "school website",
    "Alpine Digital school",
    "admissions",
    "faculty",
    "school events",
    "student achievements",
    "modern education",
  ],
  authors: [{ name: "Alpine Digital School" }],
  creator: "Alpine Digital School",
  openGraph: {
    title: "Alpine Digital School Website",
    description:
      "A modern university-style school website with admissions, faculty, achievements, events, gallery, and admin dashboard.",
    type: "website",
    locale: "en_US",
    siteName: "Alpine Digital School",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <SiteLayout>{children}</SiteLayout>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
<ChatWidget />