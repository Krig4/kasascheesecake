'use client';

import Image from "next/image";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";

export default function ContactoPage() {
  return (
    <main className="relative min-h-screen bg-cream py-24 px-4 md:px-8 overflow-hidden">
      {/* Imagen de fondo difuminada */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/contacto.jpg"
          alt="Fondo decorativo de contacto"
          fill
          className="object-cover opacity-20 blur-sm"
          priority
        />
        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm" />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Título */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-extrabold text-oliva mb-6 drop-shadow-sm">
            ¡Ven a vernos!
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Te esperamos para que disfrutes nuestras tartas o hagas tu pedido por teléfono o WhatsApp.
            ¡Será un placer atenderte!
          </p>
        </div>

        {/* Sección de contacto + mapa */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Datos de contacto */}
          <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-10 space-y-10">
            <div className="flex items-start gap-5">
              <FaMapMarkerAlt className="text-3xl text-oliva mt-1" />
              <div>
                <h2 className="text-xl font-bold text-oliva mb-1">Dirección</h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  Calle Alejo Carpentier, 13<br />
                  28806 Alcalá de Henares, Madrid
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <FaPhoneAlt className="text-3xl text-oliva mt-1" />
              <div>
                <h2 className="text-xl font-bold text-oliva mb-1">Teléfono / WhatsApp</h2>
                <a
                  href="https://wa.me/34661663123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-gray-700 underline hover:text-oliva/70 transition"
                >
                  661 663 123
                </a>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <FaClock className="text-3xl text-oliva mt-1" />
              <div>
                <h2 className="text-xl font-bold text-oliva mb-1">Horario</h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  Lunes a sábado: 11:00 – 19:00<br />
                  Domingo: 11:00 – 16:00
                </p>
              </div>
            </div>
          </div>

          {/* Mapa integrado */}
          <div className="w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-white/70">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.2412529304043!2d-3.3761206!3d40.4945901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4249df33a929ad%3A0x8175b5c8ced3b039!2sKasas%20Cheesecake!5e0!3m2!1ses!2ses!4v1716732579152!5m2!1ses!2ses"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}
