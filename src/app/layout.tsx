import type { Metadata } from "next";
import "./globals.css";

import { Inter } from 'next/font/google'

const inter = Inter({
  weight: ['400', '500'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Clean Meter App",
  description: "Minimalist performance monitor to track your system's stats in real-time",
  openGraph: {
    images: ["https://www.cleanmeter.app/logo.png"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
