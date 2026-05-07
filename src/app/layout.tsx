import type { Metadata } from "next";
import { Inter, Oswald, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin", "vietnamese"],
  weight: ["700"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ParticleCanvas from "@/components/ParticleCanvas";
import AuthProvider from "@/components/AuthProvider";
import BackgroundMusic from "@/components/BackgroundMusic";

export const metadata: Metadata = {
  title: "Helios Talent TCN",
  description: "Mạng lưới dẫn đầu về sáng tạo nội dung, cung cấp hệ sinh thái Studio chuẩn quốc tế giúp tài năng trẻ bứt phá trên TikTok.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${inter.variable} ${oswald.variable} ${spaceMono.variable} antialiased`}>
      <body className="selection:bg-pink-500 selection:text-white min-h-screen flex flex-col">
        <AuthProvider>
          <BackgroundMusic />
          <ParticleCanvas />
          <Header />
          <main className="flex-grow relative z-10">
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
