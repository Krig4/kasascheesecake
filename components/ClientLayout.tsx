'use client';

import { usePathname } from "next/navigation";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { ReactNode } from "react";
import { FaWhatsapp } from "react-icons/fa";


export default function ClientLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      <Navbar />
      {isHome ? (
        <>{children}</>
      ) : (
        <main className="max-w-5xl mx-auto px-4">{children}</main>
      )}
      <Footer />

      {/* Botón flotante de WhatsApp */}
      <a
        href="https://api.whatsapp.com/send?phone=34661663123"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl border-2 border-white hover:scale-110 hover:shadow-2xl transition-transform duration-300"
        aria-label="Contáctanos por WhatsApp"
      >
        <FaWhatsapp className="w-7 h-7" />
        <span className="sr-only">Contáctanos por WhatsApp</span>
      </a>
    </>
  );
}
