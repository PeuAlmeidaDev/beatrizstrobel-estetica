'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import { siteConfig } from '@/config/siteConfig';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="container flex items-center justify-between h-20">
        <Link href="/" className="flex items-center">
          <div className="relative w-10 h-10 overflow-hidden rounded-full border-2 border-[var(--gold)]">
            <div className="absolute inset-0 flex items-center justify-center bg-[var(--primary)]">
              <span className="text-lg font-semibold text-white">BS</span>
            </div>
          </div>
          <h1 className="ml-3 text-xl font-semibold">
            <span className={scrolled ? 'text-[var(--primary)]' : 'text-white'}>Beatriz</span>
            <span className="gold-accent">Strobel</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {siteConfig.navigation.mainItems.map((item) => (
              <li key={item.target}>
                <ScrollLink
                  to={item.target}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className={`text-sm font-medium cursor-pointer transition-colors ${
                    scrolled ? 'text-[var(--foreground)] hover:text-[var(--primary)]' : 'text-white hover:text-[var(--gold)]'
                  }`}
                >
                  {item.name}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={`block p-2 md:hidden ${scrolled ? 'text-[var(--foreground)]' : 'text-white'}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Mobile Menu */}
        <div className={`fixed top-0 right-0 h-full w-72 bg-white bg-opacity-95 backdrop-blur-sm shadow-xl transition-transform duration-500 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden z-50`}>
          <div className="flex justify-end p-6">
            <button 
              onClick={toggleMenu}
              aria-label="Fechar menu"
            >
              <FaTimes size={24} className="text-[var(--primary)]" />
            </button>
          </div>
          
          <div className="flex items-center justify-center mb-8">
            <Link href="/" className="flex flex-col items-center">
              <div className="relative w-16 h-16 overflow-hidden rounded-full border-2 border-[var(--gold)]">
                <div className="absolute inset-0 flex items-center justify-center bg-[var(--primary)]">
                  <span className="text-2xl font-semibold text-white">BE</span>
                </div>
              </div>
              <h2 className="mt-2 text-xl font-semibold">
                <span className="text-[var(--primary)]">Beleza</span>
                <span className="gold-accent">Estética</span>
              </h2>
            </Link>
          </div>
          
          <ul className="px-6">
            {siteConfig.navigation.mainItems.map((item) => (
              <li key={item.target}>
                <ScrollLink
                  to={item.target}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="block py-2 text-lg font-medium text-[var(--foreground)] hover:text-[var(--gold)] transition-colors"
                  onClick={toggleMenu}
                >
                  {item.name}
                </ScrollLink>
              </li>
            ))}
            <li className="pt-6 mt-4 border-t border-[var(--secondary)]">
              <Link 
                href="/contato" 
                className="block w-full py-3 text-center text-[var(--foreground)] rounded-full bg-[var(--gold)] hover:bg-opacity-90 transition-all shadow-md"
              >
                Agende Agora
              </Link>
            </li>
          </ul>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link 
            href="/contato" 
            className={`px-6 py-3 font-medium rounded-full transition-all duration-300 shadow-md hover:shadow-lg
              ${scrolled 
                ? 'bg-[var(--gold)] text-[var(--foreground)] hover:bg-opacity-90' 
                : 'bg-white text-[var(--primary)] hover:bg-[var(--gold)] hover:text-[var(--foreground)]'
              }`}
          >
            Agende Agora
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header; 