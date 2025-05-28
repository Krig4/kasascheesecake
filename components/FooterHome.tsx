import Image from 'next/image';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-4 mt-10 text-sm">
      <div className="container mx-auto px-4 text-center space-y-2">
        <p>Calle Alejo Carpentier, 13, 28806 Alcalá de Henares, Madrid</p>
        <p>Teléfono / Whatsapp: 661 66 31 23</p>
        <p>
          Lun - Sáb: 11:00–19:00 · Dom: 11:00–16:00
        </p>

        <div className="flex justify-center gap-4 mt-2">
          <Image src="/img/glovo.png" alt="Glovo" width={40} height={40} />
          <Image src="/img/ubereats.png" alt="Uber Eats" width={40} height={40} />
          <Image src="/img/toogoodtogo.png" alt="Too Good To Go" width={40} height={40} />
        </div>

        <div className="mt-2 text-white">
          <p>&copy; {year} Kasas Cheesecake. Todos los derechos reservados.</p>
          <p>Diseñado con ❤️ por tu equipo de Kasas Cheesecake.</p>
        </div>
      </div>
    </footer>
  );
}
