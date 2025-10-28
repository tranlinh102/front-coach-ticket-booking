import type { Metadata } from "next";

import "@/styles/globals.css";

import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Mini-Project: Client Components & Hooks",
  description: "Mini-Project: Client Components & Hooks",
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter", 
});

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={inter.variable}>
      <body className="bg-gray-50 text-gray-900">
        <main className="container mx-auto">{children}</main>
      </body>
    </html>
  );
}
