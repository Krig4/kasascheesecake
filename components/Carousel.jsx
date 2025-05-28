"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/img/carrusel/carrousel_1.jpg",    
    "/img/carrusel/tartasvarias.jpeg",
    "/img/carrusel/carrousel_2.jpg",
    "/img/carrusel/carrousel_4.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Fondo del carrusel */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
              quality={100}
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Contenido superpuesto */}
      <div className="relative z-20 flex items-center justify-center h-full px-6">
        <div className="bg-black/50 p-8 rounded-xl text-center max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Bienvenido a <p>Kasas Cheesecake</p>
          </h1>
          <p className="text-lg text-white mb-6">
            La Tarta de Queso definitiva de la que te enamorarás al primer
            bocado y con una historia de cine. Hechas cada día con amor en
            nuestro obrador.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=34661663123"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-black text-white py-3 px-6 rounded-xl hover:bg-oliva/90 transition text-2xl font-bold"
          >
            <FaWhatsapp className="text-5xl" /> Encarga tus tartas
          </a>
        </div>
      </div>

      {/* Paginación */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            } transition`}
          />
        ))}
      </div>
    </div>
  );
}
