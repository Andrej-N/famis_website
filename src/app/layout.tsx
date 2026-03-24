import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FAMIS | Mesna Industrija",
  description:
    "FAMIS mesna industrija — kvalitetni mesni proizvodi. Kobasice, dimljeni proizvodi, suvomesnati proizvodi i paštete.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr" className={`${geistSans.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
