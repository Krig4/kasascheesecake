'use client'; // Marca este archivo como un componente del lado del cliente

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white px-6 py-4 fixed w-full z-50 top-0 left-0 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-2xl font-semibold">
            <span className="text-xl">Kasas Cheesecake</span>
          </Link>
          
        </div>

        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-oliva/80">Inicio</Link>
          <Link href="/tartas" className="hover:text-oliva/80">Tartas</Link>
          <Link href="/nuestra-historia" className="hover:text-oliva/80">Nuestra Historia</Link>
          <Link href="/contacto" className="hover:text-oliva/80">Contacto</Link>
          <Link href="/faq" className="hover:text-oliva/80">FAQ</Link>
          <span>🍰</span>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={toggleMenu}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4 bg-oliva text-white py-4 px-6">
          <Link href="/" className="hover:text-oliva/80">Inicio</Link>
          <Link href="/tartas" className="hover:text-oliva/80">Tartas</Link>
          <Link href="/contacto" className="hover:text-oliva/80">Contacto</Link>
          <Link href="/faq" className="hover:text-oliva/80">FAQ</Link>
        </div>
      )}
    </nav>
  );
}
