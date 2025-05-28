"use client";

import Script from "next/script";
import Carousel from "@/components/Carousel";
import TartaDestacada from "@/components/TartaDestacada";
import Plataformas from "@/components/Plataformas";
import UbicacionMapa from "@/components/UbicacionMapa";

export default function Home() {
  return (
    <div>
      <Script
        src="https://static.elfsight.com/platform/platform.js"
        strategy="afterInteractive"
      />

      <main className="bg-cream">
        {/* Carrusel a pantalla completa */}
        <section className="w-screen overflow-hidden">
          <Carousel />
        </section>

        {/* Tarta destacada */}
        <section className="py-16">
          <div className="bg-white max-w-6xl mx-auto px-4 rounded-xl shadow">
            <TartaDestacada />
            <Plataformas />
            <h2 className="text-3xl font-bold text-center text-oliva mb-10">
              Lo que dicen nuestros clientes
            </h2>
            <Script
              src="https://static.elfsight.com/platform/platform.js"
              strategy="afterInteractive"
            />
            <div
              className="elfsight-app-b78c939e-4946-48ed-890e-813c73ec6578"
              data-elfsight-app-lazy
            ></div>
            <UbicacionMapa />
          </div>          
        </section>
      </main>
    </div>
  );
}
