'use client';

import Image from 'next/image';

export default function FAQPage() {
  const faqs = [
    {
      question: '¿Es necesario encargar las tartas?',
      answer:
        'No, no es necesario aunque es recomendable si quieres asegurarte que tengamos existencias de tu favorita. Puedes reservarla a través de Whatsapp en el 661663123.',
    },
    {
      question: '¿Se pueden encargar tartas sin gluten?',
      answer:
        'Sí, podemos preparar tartas especiales sin gluten. Puedes contactarnos por Whatsapp para conocer qué tamaños y sabores hay disponibles.',
    },
    {
      question: '¿Se pueden reservar las tartas pequeñas?',
      answer:
        'Sí, pueden reservarse todos los tamaños y sabores de tartas excepto las porciones.',
    },
    {
      question: '¿De cuántas raciones son cada tarta?',
      answer:
        'Aproximadamente, la pequeña correspondería a 2 raciones. La mediana a 8-10. La grande a 14-16.',
    },
    {
      question: '¿Hacéis envío a domicilio?',
      answer:
        'A través de Uber Eats y de Glovo está disponible el servicio delivery solamente en la ciudad de Alcalá de Henares.',
    },
    {
      question: '¿Se puede tomar la tarta en el local?',
      answer:
        'Por supuesto, disponemos de una zona donde podréis tomar vuestras tartas favoritas acompañadas de un delicioso café, infusión o Cola Cao.',
    },
  ];

  return (
    <main className="bg-cream min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto mb-16">
        <h1 className="text-5xl font-extrabold text-center text-oliva mb-16">
          Preguntas Frecuentes
        </h1>

        {/* Grid de dos columnas: imagen + preguntas */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Imagen izquierda */}
          <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/img/faq.jpg"
              alt="Preguntas Frecuentes"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Primer bloque de FAQs */}
          <div className="space-y-6">
            {faqs.slice(0, 3).map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-oliva"
              >
                <h2 className="text-xl font-bold text-oliva">{faq.question}</h2>
                <p className="mt-2 text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Segunda fila: preguntas + segunda imagen */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mt-16">
          {/* Segundo bloque de FAQs */}
          <div className="space-y-6 order-2 lg:order-1">
            {faqs.slice(3).map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-oliva"
              >
                <h2 className="text-xl font-bold text-oliva">{faq.question}</h2>
                <p className="mt-2 text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>

          {/* Imagen derecha */}
          <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-lg order-1 lg:order-2">
            <Image
              src="/img/galletas.jpg"
              alt="Decoración inferior"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
