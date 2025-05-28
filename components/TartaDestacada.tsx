import Image from "next/image";

export default function TartaDestacada() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-4">
        <div className="relative w-full h-80 md:h-[450px]">
          <Image
            src="/img/tartas/tartaQueso.jpeg"
            alt="Tarta de Queso Clásica"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="rounded-xl shadow-lg object-cover"
            priority
          />
        </div>
        <div>
          <h2 className="text-4xl font-bold text-oliva mb-6 leading-tight">
            La Tarta de Queso Original
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            La original Tarta de Queso de <strong>Kasas Cheesecake</strong>{" "}
            nació hace más de medio siglo en <em>Finca El Cine</em>, el espacio
            gastronómico que durante varias décadas dio de comer a las
            estrellas del cine que grabaron películas del oeste en los famosos
            estudios <strong>Madrid70</strong>, situados en Daganzo de Arriba.
          </p>
        </div>
      </div>
    </section>
  );
}
