'use client'; // Marca el archivo como componente del lado del cliente

import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import { ReactNode } from "react";
import Footer from '@/components/Footer';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  const isUnderMaintenance = true; // Cambia a 'false' cuando quieras quitar la página de mantenimiento

  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <title>Kasas Cheesecake</title>
        <meta name="description" content="Tartas caseras con amor" />
      </head>
      <body className="pt-0 bg-[#f8f1e1] text-[#3b3b3b] font-sans min-h-screen">
        {isUnderMaintenance ? (
          // Página de mantenimiento
          <div className="flex justify-center items-center min-h-screen bg-[#f8f1e1]">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4 text-[#3b3b3b]">¡Estamos horneando algo delicioso!</h1>
              <p className="text-lg mb-6 text-[#3b3b3b]">
                La web está en construcción. Mientras tanto, visita nuestro Instagram para más información sobre nuestras tartas.
              </p>
              <a
                href="https://www.instagram.com/kasas_cheesecake/"
                className="inline-block px-6 py-3 bg-[#8A9A5B] text-white rounded-lg hover:bg-[#7a884e] transition duration-300"
              >
                Visítanos en Instagram
              </a>
            </div>
          </div>
        ) : (
          <>
            <Navbar />
            <main className="max-w-5xl mx-auto px-4">{children}</main>
            <Footer />
          </>
        )}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
