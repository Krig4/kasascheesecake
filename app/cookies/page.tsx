"use client";

import { useState } from "react";
import Image from "next/image";

export default function Cookies() {
  const [modalImage, setModalImage] = useState<string | null>(null);

  const openModal = (src: string) => setModalImage(src);
  const closeModal = () => setModalImage(null);

  const cookie = [
    "Cookie Clásica",
    "Cookie Avellana",
    "Cookie Nutella",
    "Cookie Pistacho",
  ];

  return (
    <div>
      <main className="bg-cream min-h-screen py-16 px-6">
        {/* Imagen vitrina */}
        <div className="mb-12 max-w-5xl mx-auto">
          <Image
            src="/img/galletas.jpg"
            alt="Vitrina de galletas"
            width={1200}
            height={500}
            className="w-full h-auto rounded-xl shadow-xl object-cover"
          />
        </div>

        <h2 className="text-5xl font-extrabold text-center text-oliva mb-6">
          Nuestras Cookies
        </h2>
        <p className="text-center text-lg text-[#555] mb-14 max-w-xl mx-auto">
          Descubre nuestras irresistibles cookies artesanales. <br />
          Perfectas para cualquier momento dulce del día.
        </p>

        <section className="mb-24">
          <div className="max-w-4xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
              {cookie.map((title, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-md w-72 transform hover:scale-105 transition cursor-pointer hover:shadow-xl"
                  onClick={() =>
                    openModal(`/img/cookies/cookie${index + 1}.jpeg`)
                  }
                >
                  <Image
                    src={`/img/cookies/cookie${index + 1}.jpeg`}
                    alt={title}
                    className="rounded-xl object-cover w-full h-48"
                    width={300}
                    height={200}
                  />
                  <h4 className="text-xl font-semibold text-oliva mt-4 text-center">
                    {title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Precios */}
        <section className="bg-[#fdfaf3] py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-4xl font-bold text-center text-oliva mb-10">
              Precios
            </h3>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              {[
                { desc: "Cookie Clásica", price: "2,95€" },
                { desc: "Cookie de Sabores", price: "3,95€" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md text-center w-60 hover:shadow-lg transition"
                >
                  <span className="block text-oliva font-semibold text-lg mb-2">
                    {item.desc}
                  </span>
                  <span className="text-xl font-bold text-[#5a5a5a]">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Modal de imagen */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in"
          onClick={closeModal}
        >
          <div
            className="bg-white p-4 rounded-xl shadow-lg max-w-3xl w-full max-h-[90vh] overflow-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-gray-800"
              onClick={closeModal}
              aria-label="Cerrar imagen"
            >
              ×
            </button>
            <Image
              src={modalImage}
              alt="Cookie ampliada"
              width={800}
              height={600}
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
}
