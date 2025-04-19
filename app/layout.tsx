import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import { ReactNode } from "react";
import Footer from '@/components/Footer';
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "Kasas Cheesecake",
  description: "Tartas caseras con amor",
  icons: {
    icon: "/favicon.png", 
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body className="pt-20 bg-[#fff8f2] text-[#3b3b3b] font-sans">
        <Navbar />
        <main className="max-w-5xl mx-auto px-4">{children}</main>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
