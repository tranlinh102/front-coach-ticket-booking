import type { Metadata } from "next";

import "@/styles/globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter", 
});

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={inter.variable}>
      <body className="bg-gray-50 text-gray-900">
        <main className="container mx-auto">{children}</main>
      </body>
    </html>
  );
}
