import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

import { LanguageProvider } from "@/context/LanguageContext";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export const metadata: Metadata = {
  title: "PT Nawasena Jaya Group",
  description: "Solusi Pengadaan & Distribusi Terpercaya. Layanan Pengiriman Barang, Pengadaan ATK, Alat Kesehatan, dan Perlengkapan Printer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${inter.className} ${montserrat.variable} antialiased min-h-screen flex flex-col overscroll-none`}>
          <LanguageProvider>
            <div className="flex flex-col min-h-screen overflow-x-clip w-full max-w-[100vw]">
              {children}
            </div>
            <FloatingWhatsApp />
          </LanguageProvider>
      </body>
    </html>
  );
}
