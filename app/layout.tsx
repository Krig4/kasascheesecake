import "../styles/globals.css";

export const metadata = {
  title: "Kasas Cheesecake",
  description: "Tienda de tartas artesanas",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-yellow-100 text-green-900 font-sans">
        {children}
      </body>
    </html>
  );
}
