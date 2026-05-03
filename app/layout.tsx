import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Astra — 3-Month Forex & Synthetic Indices Mentorship | Divya Special",
  description:
    "Join Astra, a premium 3-month intensive mentorship program on Forex & Synthetic Indices Trading. Master technical analysis, strategy development, and trading systems with Divya Special.",
  keywords: [
    "forex trading",
    "synthetic indices",
    "trading mentorship",
    "Divya Special",
    "Astra program",
    "trading course",
    "technical analysis",
  ],
  openGraph: {
    title: "Astra — Forex & Synthetic Indices Mentorship by Divya Special",
    description:
      "A premium 3-month intensive mentorship program. Master trading with 6 comprehensive modules.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
