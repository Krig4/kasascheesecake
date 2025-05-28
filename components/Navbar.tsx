'use client';

import { useState, useRef, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Cerrar el menú si haces clic fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <nav className="bg-black text-white px-6 py-8 fixed w-full z-50 top-0 left-0 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/img/Logo.png"
              alt="Kasas Cheesecake Logo"
              width={40}
              height={40}
              className="rounded-md"
              priority
            />
            <span className="text-2xl font-semibold">Kasas Cheesecake</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="hover:text-oliva/80">Inicio</Link>
          <Link href="/tartas" className="hover:text-oliva/80">Tartas</Link>
          <Link href="/nuestra-historia" className="hover:text-oliva/80">Nuestra Historia</Link>
          <Link href="/contacto" className="hover:text-oliva/80">Contacto</Link>
          <Link href="/faq" className="hover:text-oliva/80">FAQ</Link>
          <a
            href="https://www.instagram.com/kasas_cheesecake/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-oliva/80 text-xl"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/p/Kasas-Cheesecake-61569461282667/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-oliva/80 text-xl"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div ref={menuRef} className="md:hidden flex flex-col space-y-4 mt-4 text-white py-4 px-6 bg-black">
          <Link href="/" className="hover:text-oliva/80" onClick={() => setIsOpen(false)}>Inicio</Link>
          <Link href="/tartas" className="hover:text-oliva/80" onClick={() => setIsOpen(false)}>Tartas</Link>
          <Link href="/nuestra-historia" className="hover:text-oliva/80" onClick={() => setIsOpen(false)}>Nuestra Historia</Link>
          <Link href="/contacto" className="hover:text-oliva/80" onClick={() => setIsOpen(false)}>Contacto</Link>
          <Link href="/faq" className="hover:text-oliva/80" onClick={() => setIsOpen(false)}>FAQ</Link>
          <div className="flex space-x-6 mt-2 justify-center">
            <a
              href="https://www.instagram.com/kasas_cheesecake/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-oliva/80 text-2xl"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/p/Kasas-Cheesecake-61569461282667/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-oliva/80 text-2xl"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
