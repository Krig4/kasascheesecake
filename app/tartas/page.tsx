"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [modalImage, setModalImage] = useState<string | null>(null);

  const openModal = (src: string) => setModalImage(src);
  const closeModal = () => setModalImage(null);

  const tartas = [
    "Chocolate Belga",
    "Kinder",
    "Oreo",
    "Lotus",
    "Pistacho",
    "Pantera Rosa",
    "Chocolate Blanco",
  ];

  return (
    <div>
      <main className="bg-cream min-h-screen py-16 px-6">
        {/* Imagen vitrina */}
        <div className="mb-12">
          <Image
            src="/img/SayCheese.jpg"
            alt="Vitrina de tartas"
            width={1200}
            height={500}
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </div>

        <h2 className="text-5xl font-extrabold text-center text-oliva mb-10">
          Nuestras Tartas
        </h2>

        {/* Tarta principal */}
        <section className="text-center mb-20">
          <div className="relative group inline-block cursor-pointer" onClick={() => openModal("/img/tartas/tartaQueso.jpeg")}>
            <Image
              src="/img/tartas/tartaQueso.jpeg"
              alt="Tarta de Queso Clásica"
              width={500}
              height={400}
              className="mx-auto rounded-xl shadow-lg object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h3 className="text-3xl font-bold text-oliva mt-6">
            Tarta de Queso Clásica
          </h3>
          <p className="text-lg text-oliva/80 mt-2">
            Una historia de cine que no te dejará indiferente.{" "}
            <Link
              href="/nuestra-historia"
              className="text-oliva font-semibold underline hover:text-oliva/70"
            >
              Conócela aquí.
            </Link>
          </p>
        </section>

        {/* Tartas adicionales */}
        <section className="mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
            {tartas.map((title, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg w-72 transform hover:scale-105 transition cursor-pointer"
                onClick={() => openModal(`/img/tartas/tarta${index + 1}.jpeg`)}
              >
                <Image
                  src={`/img/tartas/tarta${index + 1}.jpeg`}
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
        </section>

        {/* Precios */}
        <section className="bg-[#fdfaf3] py-16 mt-16">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-oliva mb-10">
              Precios
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-[#3b3b3b]">
              {[
                { desc: "Porción Tarta de Queso Clásica", price: "4,50€" },
                { desc: "Porción Tarta de Sabores", price: "4,95€" },
                { desc: "Tarta de Queso Clásica Pequeña", price: "9,95€" },
                { desc: "Tarta Sabores Pequeña", price: "12,50€" },
                { desc: "Tarta de Queso Clásica Mediana", price: "24,95€" },
                { desc: "Tarta Sabores Mediana", price: "29,95€" },
                { desc: "Tarta de Queso Clásica Grande", price: "34,95€" },
                { desc: "Tarta Sabores Grande", price: "39,95€" },
                { desc: "Tarta de Pistacho Mediana", price: "38,50€" },
                { desc: "Tarta de Pistacho Grande", price: "45,90€" },
              ].map((item, index) => (
                <li
                  key={index}
                  className="bg-white p-4 rounded-xl shadow text-center flex flex-col items-center hover:shadow-md transition"
                >
                  <span className="font-medium text-oliva mb-1">
                    {item.desc}
                  </span>
                  <span className="text-lg font-bold text-[#5a5a5a]">
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>
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
            >
              ×
            </button>
            <Image
              src={modalImage}
              alt="Tarta ampliada"
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
