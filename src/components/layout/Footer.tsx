'use client';

import Link from 'next/link';
import { FaInstagram, FaFacebook, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope, FaHeart } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const navItems = [
    { name: 'Início', target: 'home' },
    { name: 'Sobre', target: 'about' },
    { name: 'Serviços', target: 'services' },
    { name: 'Depoimentos', target: 'testimonials' },
    { name: 'Contato', target: 'contact' },
  ];

  return (
    <footer className="bg-[var(--foreground)] text-white pt-20 pb-10 relative">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent"></div>
      <div className="absolute top-0 w-full h-20 bg-[url('/images/pattern-luxury.png')] bg-repeat opacity-5"></div>
      
      <div className="container">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo e Descrição */}
          <div className="space-y-6">
            <Link href="/" className="flex flex-col items-start">
              <div className="flex items-center space-x-2">
                <div className="relative w-10 h-10 overflow-hidden rounded-full border-2 border-[var(--gold)]">
                  <div className="absolute inset-0 flex items-center justify-center bg-[var(--primary)]">
                    <span className="text-xl font-semibold text-white">BS</span>
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-serif">
                    <span className="text-white">Beatriz</span>
                    <span className="text-[var(--gold)]">Strobel</span>
                  </h1>
                </div>
              </div>
              <div className="w-32 h-0.5 mt-2 bg-gradient-to-r from-[var(--gold)] to-transparent"></div>
            </Link>
            
            <p className="text-sm font-light text-gray-300">
              Oferecemos tratamentos estéticos exclusivos e personalizados para realçar sua beleza natural e elevar sua autoconfiança, com a mais alta qualidade e tecnologia disponível no mercado.
            </p>
            
            <div className="flex space-x-4 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                className="flex items-center justify-center w-10 h-10 transition-all duration-300 border rounded-full text-gray-300 border-gray-700 hover:border-[var(--gold)] hover:text-[var(--gold)]">
                <FaInstagram size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="flex items-center justify-center w-10 h-10 transition-all duration-300 border rounded-full text-gray-300 border-gray-700 hover:border-[var(--gold)] hover:text-[var(--gold)]">
                <FaFacebook size={18} />
              </a>
              <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer" 
                className="flex items-center justify-center w-10 h-10 transition-all duration-300 border rounded-full text-gray-300 border-gray-700 hover:border-[var(--gold)] hover:text-[var(--gold)]">
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="mb-6 text-lg font-serif text-[var(--gold)]">Links Rápidos</h3>
            <div className="h-0.5 w-16 bg-[var(--gold)] opacity-30 mb-6"></div>
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.target}>
                  <ScrollLink
                    to={item.target}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="text-sm cursor-pointer text-gray-300 hover:text-[var(--gold)] transition-colors"
                  >
                    {item.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Horário de Funcionamento */}
          <div>
            <h3 className="mb-6 text-lg font-serif text-[var(--gold)]">Horário de Atendimento</h3>
            <div className="h-0.5 w-16 bg-[var(--gold)] opacity-30 mb-6"></div>
            <ul className="space-y-4">
              <li className="text-sm text-gray-300 flex justify-between">
                <span>Segunda a Sexta:</span>
                <span className="text-white">9h às 19h</span>
              </li>
              <li className="text-sm text-gray-300 flex justify-between">
                <span>Sábado:</span>
                <span className="text-white">9h às 16h</span>
              </li>
              <li className="text-sm text-gray-300 flex justify-between">
                <span>Domingo:</span>
                <span className="text-white">Fechado</span>
              </li>
            </ul>
            <div className="mt-6">
              <Link 
                href="/contato" 
                className="inline-block px-6 py-2 text-sm border border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--foreground)] transition-all duration-300 rounded-sm"
              >
                Agende sua Consulta
              </Link>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h3 className="mb-6 text-lg font-serif text-[var(--gold)]">Contato</h3>
            <div className="h-0.5 w-16 bg-[var(--gold)] opacity-30 mb-6"></div>
            <ul className="space-y-4">
              <li className="flex items-start text-sm">
                <FaMapMarkerAlt className="flex-shrink-0 mt-1 mr-3 text-[var(--gold)]" />
                <span className="text-gray-300">Av. Principal, 123, Centro<br />São Paulo - SP, 01000-000</span>
              </li>
              <li className="flex items-center text-sm">
                <FaPhone className="flex-shrink-0 mr-3 text-[var(--gold)]" />
                <span className="text-gray-300">(11) 9876-5432</span>
              </li>
              <li className="flex items-center text-sm">
                <FaEnvelope className="flex-shrink-0 mr-3 text-[var(--gold)]" />
                <span className="text-gray-300">contato@belezaestetica.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 mt-12 text-sm text-center border-t border-gray-800">
          <p className="text-gray-400">&copy; {currentYear} BelezaEstética. Todos os direitos reservados.</p>
          <div className="flex justify-center mt-4 space-x-6">
            <Link href="/politica-de-privacidade" className="text-gray-400 hover:text-[var(--gold)] transition-colors">
              Política de Privacidade
            </Link>
            <Link href="/termos-de-uso" className="text-gray-400 hover:text-[var(--gold)] transition-colors">
              Termos de Uso
            </Link>
          </div>
          <p className="flex items-center justify-center mt-6 text-xs text-gray-500">
            Desenvolvido com <FaHeart className="mx-1 text-[var(--gold)]" size={10} /> para a beleza natural
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 