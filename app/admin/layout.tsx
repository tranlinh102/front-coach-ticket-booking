import type { Metadata } from "next";

import "@/styles/globals.css";

import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Admin Dashboard - Đặt vé xe khách và xe Limousine",
  description: "",
  icons: {
    icon: "/favicon.svg",
  },
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter", 
});

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={inter.variable}>
      <body className="bg-gray-50 text-gray-900">
        <main className="container mx-auto pt-24">{children}</main>
      </body>
    </html>
  );
}
