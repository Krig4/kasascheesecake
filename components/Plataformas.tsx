import Image from "next/image";

const plataformas = [
  {
    name: "Glovo",
    img: "/img/logos/glovo.png",
    link: "https://glovoapp.com/es/es/alcala-de-henares/kasas-cheesecake-alcala-de-henares-y-torrejon-de-ardoz/",
  },
  {
    name: "Uber Eats",
    img: "/img/logos/ubereats.png",
    link: "https://www.ubereats.com/es/store/kasas-cheesecake/KoNURrVDWzS-QEyiTBquxg",
  },
  {
    name: "Too Good To Go",
    img: "/img/logos/toogoodtogo.png",
    link: null,
  },
];

export default function Plataformas() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-oliva mb-10">
          Encuéntranos también en
        </h2>
        <div className="grid md:grid-cols-3 gap-5 text-center">
          {plataformas.map((item, i) => (
            <div key={i} className="flex flex-col items-center px-4">
              {item.link ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={80}
                    height={64}
                    className="mb-4 object-contain"
                  />
                </a>
              ) : (
                <Image
                  src={item.img}
                  alt={item.name}
                  width={80}
                  height={64}
                  className="mb-4 object-contain"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

