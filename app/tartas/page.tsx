'use client'

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ image: '', title: '', description: '' });

  const handleImageClick = (image: string, title: string, description: string) => {
    setModalContent({ image, title, description });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <main className="bg-cream min-h-screen py-16 px-6">
        <section className="max-w-5xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-oliva mb-4">
            Bienvenido a Kasas Cheesecake
          </h1>
          <p className="text-lg text-oliva/80 mb-8">
            Tartas artesanas, irresistibles y hechas con amor. Descubre nuestros sabores únicos y vive una experiencia dulce.
          </p>
          <button className="bg-oliva text-white py-2 px-4 rounded-xl hover:bg-oliva/90 transition">
            ¡Haz tu pedido!
          </button>
        </section>

        {/* Tartas destacadas */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-oliva mb-6">Nuestras Tartas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
            {[
              {
                image: '/img/tarta1.jpg',
                title: 'Cheesecake de Fresa',
                description: 'Suave, cremoso y con un topping de fresas frescas.',
              },
              {
                image: '/img/tarta2.jpg',
                title: 'Cheesecake de Chocolate',
                description: 'Exquisito cheesecake con un intenso sabor a chocolate.',
              },
              {
                image: '/img/tarta3.jpg',
                title: 'Cheesecake de Vainilla',
                description: 'Delicioso cheesecake con una suave crema de vainilla.',
              },
              {
                image: '/img/tarta4.jpg',
                title: 'Cheesecake de Mango',
                description: 'Exótica y dulce cheesecake con un toque de mango tropical.',
              },
              {
                image: '/img/tarta5.jpg',
                title: 'Cheesecake de Limón',
                description: 'Refrescante cheesecake con un delicioso sabor a limón.',
              },
              {
                image: '/img/tarta6.jpg',
                title: 'Cheesecake de Frambuesa',
                description: 'Sabor frutal con una base crujiente y un toque ácido de frambuesas.',
              },
              {
                image: '/img/tarta7.jpg',
                title: 'Cheesecake de Pistacho',
                description: 'Un sabor suave y cremoso con un toque de pistacho.',
              },
              {
                image: '/img/tarta8.jpg',
                title: 'Cheesecake de Café',
                description: 'Sabor profundo a café en una cheesecake cremosa.',
              },
              {
                image: '/img/tarta9.jpg',
                title: 'Cheesecake de Oreo',
                description: 'Tarta de galletas Oreo y crema suave de cheesecake.',
              },
            ].map((tarta, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg w-72 cursor-pointer"
                onClick={() => handleImageClick(tarta.image, tarta.title, tarta.description)}
              >
                <Image
                  src={tarta.image}
                  alt={tarta.title}
                  className="rounded-xl"
                  width={300}
                  height={200}
                />
                <h3 className="text-xl font-semibold text-oliva mt-4">{tarta.title}</h3>
                <p className="text-gray-600 mt-2">{tarta.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Modal con imagen a la izquierda y texto a la derecha */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white p-6 rounded-xl shadow-lg w-11/12 md:w-3/4 max-w-4xl flex flex-col md:flex-row gap-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-xl font-bold text-gray-600 hover:text-gray-800"
            >
              X
            </button>
            <div className="w-full md:w-1/2">
              <Image
                src={modalContent.image}
                alt={modalContent.title}
                width={500}
                height={500}
                className="rounded-xl w-full h-auto object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h3 className="text-3xl font-semibold text-oliva mb-4">{modalContent.title}</h3>
              <p className="text-gray-700 text-lg">{modalContent.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
