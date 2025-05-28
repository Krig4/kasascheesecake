
export default function UbicacionMapa() {
  return (
    <section className="bg-white py-16 relative">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-oliva mb-10">
          Dónde estamos
        </h2>
        <div className="relative">
          <div className="rounded-lg overflow-hidden h-[500px] relative">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.2412529304043!2d-3.3761206!3d40.4945901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4249df33a929ad%3A0x8175b5c8ced3b039!2sKasas%20Cheesecake!5e0!3m2!1ses!2ses!4v1716732579152!5m2!1ses!2ses"
            ></iframe>
            <div className="absolute bottom-6 right-6 bg-white bg-opacity-90 backdrop-blur-sm p-6 rounded-lg shadow-md w-full max-w-md">
              <div className="mb-4">
                <h3 className="text-xs font-semibold text-gray-900 tracking-widest">
                  DIRECCIÓN
                </h3>
                <p className="text-sm mt-1 text-gray-700">
                  Calle Alejo Carpentier, 13 28806 Alcalá de Henares, Madrid
                </p>
              </div>
              <div className="mb-4">
                <h3 className="text-xs font-semibold text-gray-900 tracking-widest">
                  HORARIO
                </h3>
                <p className="text-sm text-gray-700">
                  Lunes a sábado: 11:00 a 19:00 | Domingo: 11:00 a 16:00
                </p>
              </div>
              <div>
                <h3 className="text-xs font-semibold text-gray-900 tracking-widest">
                  TELÉFONO
                </h3>
                <p className="text-sm text-gray-700">661 663 123</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

