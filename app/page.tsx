export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold text-pink-600 mb-4">🍰 Kasas Cheesecake</h1>
      <p className="text-lg text-gray-700">Tailwind está funcionando correctamente ✅</p>
      <button className="mt-6 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
        ¡Pide tu tarta!
      </button>
    </main>
  );
}
