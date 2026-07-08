import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Claire Ponirou | Entrepreneur & Real Estate Investor",
  description: "Official portfolio of Claire Ponirou - Co-Founder of SWAP and Founder of ALBA RESIDENCES, specializing in luxury fashion resale and property development in Athens, Greece.",
  openGraph: {
    title: "Claire Ponirou | Entrepreneur & Real Estate Investor",
    description: "Official portfolio of Claire Ponirou - Co-Founder of SWAP and Founder of ALBA RESIDENCES, specializing in luxury fashion resale and property development in Athens, Greece.",
    url: "https://albaresidences2024-sketch.github.io/portfolio-website/",
    siteName: "Claire Ponirou Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-bg-primary text-text-primary selection:bg-gold/30 selection:text-gold">
        {children}
      </body>
    </html>
  );
}
