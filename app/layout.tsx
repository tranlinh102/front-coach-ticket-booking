import type { Metadata } from "next";

import "@/styles/globals.css";

import { Inter } from "next/font/google";

import Header from "@/components/common/Header/Header";
import Footer from "@/components/common/Footer";
import FloatingButtons from "@/components/ui/FloatingButtons";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter", 
});

export const metadata: Metadata = {
  title: "Đặt vé xe khách và xe Limousine",
  description: "",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={inter.variable}>
      <body className="bg-gray-50 text-gray-900">
        <Header />
        <main className="container mx-auto pt-25">{children}</main>
        <FloatingButtons />
        <Footer />
      </body>
    </html>
  );
}
