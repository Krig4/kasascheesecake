import Image from 'next/image';

export default function Historia() {
  return (
    <section className="bg-[#fdfaf3] py-16 px-6 md:px-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-5xl font-extrabold text-oliva mb-4">Nuestra Historia</h2>
          <div className="mx-auto w-24 h-1 bg-oliva rounded-full" />
        </div>
        <p className="text-lg text-[#3b3b3b] leading-relaxed mb-4">
          La original <span className="font-semibold">Tarta de Queso de Kasas Cheesecake</span> nació hace más de medio siglo en <strong>Finca El Cine</strong>, el espacio gastronómico que durante varias décadas dio de comer a las estrellas del cine que grabaron películas del oeste en los famosos estudios <strong>Madrid70</strong>, situados en Daganzo de Arriba.
        </p>
        <p className="text-lg text-[#3b3b3b] leading-relaxed mb-4">
          Cuentan que había actores y actrices de renombre que, cuando tenían que grabar en estos estudios, venían felices a la pequeña casa de comidas donde servían una tarta de queso que les recordaba a la famosa <strong>Cheesecake de Nueva York</strong>.
        </p>
        <p className="text-lg text-[#3b3b3b] leading-relaxed">
          Cuando la <span className="font-semibold">familia Casas</span> se hizo con este emblemático lugar en 2020, la tarta recuperó rápidamente su popularidad gracias a su increíble sabor, a su materia prima de alta calidad y al respeto por el producto. Todo ello se traduce en una tarta inigualable que, desde <strong>noviembre de 2024</strong>, tiene su espacio propio en <strong>Alcalá de Henares</strong>.
        </p>
      </div>

      {/* Imagen decorativa al final */}
      <div className="mt-12 flex justify-center">
        <Image
          src="/img/fondo.jpg"
          alt="Finca El Cine"
          width={1000}
          height={500}
          className="rounded-xl shadow-lg object-cover w-full max-w-4xl h-auto"
        />
      </div>
    </section>
  );
}
