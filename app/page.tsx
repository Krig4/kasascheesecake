'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <main className="bg-cream min-h-screen px-4 md:px-8">
        {/* Hero */}
        <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 py-16 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-oliva mb-4 leading-tight">
              Bienvenido a <span className="text-oliva/80">Kasas Cheesecake</span>
            </h1>
            <p className="text-lg text-oliva/80 mb-6">
              Tartas artesanas, irresistibles y hechas con amor. Descubre nuestros sabores únicos y vive una experiencia dulce.
            </p>
            <button className="bg-black text-white py-3 px-6 rounded-xl hover:bg-oliva/90 transition text-lg">
              ¡Haz tu pedido!
            </button>
          </div>
          <div className="flex justify-center">
            <Image
              src="/img/intro.jpg"
              alt="Cheesecake principal"
              width={500}
              height={400}
              className="rounded-xl shadow-lg object-cover w-full max-w-md"
            />
          </div>
        </section>

        {/* Tartas destacadas */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-center text-oliva mb-10">Tartas Destacadas</h2>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {[
              {
                title: 'Cheesecake de Fresa',
                desc: 'Suave, cremoso y con un topping de fresas frescas.',
                img: '/img/tarta1.jpg',
              },
              {
                title: 'Cheesecake de Chocolate',
                desc: 'Exquisito cheesecake con un intenso sabor a chocolate.',
                img: '/img/tarta2.jpg',
              },
              {
                title: 'Cheesecake de Mango',
                desc: 'Exótica y dulce cheesecake con un toque de mango tropical.',
                img: '/img/tarta4.jpg',
              },
            ].map((tarta, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg transition hover:scale-105 duration-300">
                <Image
                  src={tarta.img}
                  alt={tarta.title}
                  width={300}
                  height={200}
                  className="rounded-xl w-full h-48 object-cover"
                />
                <h3 className="text-xl font-semibold text-oliva mt-4">{tarta.title}</h3>
                <p className="text-gray-600 mt-2">{tarta.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Ventajas / valores */}
        <section className="bg-white py-16">
          <h2 className="text-3xl font-bold text-center text-oliva mb-10">¿Por qué elegirnos?</h2>
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-center">
            {[
              {
                icon: '🍓',
                title: 'Ingredientes Naturales',
                desc: 'Solo usamos ingredientes frescos, locales y sin conservantes.',
              },
              {
                icon: '🎂',
                title: 'Tartas Personalizadas',
                desc: 'Crea tu propia cheesecake para eventos, cumpleaños o antojos.',
              },
              {
                icon: '🚚',
                title: 'Reparto en el día',
                desc: 'Entregamos en tu casa o en el evento, siempre fresquísimo.',
              },
            ].map((v, i) => (
              <div key={i} className="flex flex-col items-center px-4">
                <div className="text-5xl mb-4">{v.icon}</div>
                <h3 className="text-xl font-semibold text-oliva mb-2">{v.title}</h3>
                <p className="text-gray-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
