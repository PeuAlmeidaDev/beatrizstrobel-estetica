'use client';

import Link from 'next/link';
import { FaInstagram, FaFacebook, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope, FaHeart } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import { siteConfig } from '@/config/siteConfig';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[var(--foreground)] text-white pt-20 pb-10 relative">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent"></div>
      <div className="absolute top-0 w-full h-20 bg-[url('/images/pattern-luxury.png')] bg-repeat opacity-5"></div>
      
      <div className="container">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo e Redes Sociais */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center">
                <div className="relative w-12 h-12 overflow-hidden rounded-full border-2 border-[var(--gold)]">
                  <div className="absolute inset-0 flex items-center justify-center bg-[var(--primary)]">
                    <span className="text-xl font-semibold text-white">BS</span>
                  </div>
                </div>
                <div className="ml-3">
                  <h2 className="text-xl font-semibold">
                    <span className="text-white">Beatriz</span>
                    <span className="text-[var(--gold)]">Strobel</span>
                  </h2>
                </div>
              </div>
            </Link>
            <p className="mb-6 text-sm text-gray-300">
              Transformando vidas através da beleza e do cuidado personalizado.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href={siteConfig.socialMedia.instagram} target="_blank" rel="noopener noreferrer" 
                className="flex items-center justify-center w-10 h-10 transition-all duration-300 border rounded-full text-gray-300 border-gray-700 hover:border-[var(--gold)] hover:text-[var(--gold)]">
                <FaInstagram size={18} />
              </a>
              <a href={siteConfig.socialMedia.facebook} target="_blank" rel="noopener noreferrer" 
                className="flex items-center justify-center w-10 h-10 transition-all duration-300 border rounded-full text-gray-300 border-gray-700 hover:border-[var(--gold)] hover:text-[var(--gold)]">
                <FaFacebook size={18} />
              </a>
              <a href={siteConfig.socialMedia.whatsapp} target="_blank" rel="noopener noreferrer" 
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
              {siteConfig.navigation.mainItems.map((item) => (
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
                <span>{siteConfig.businessHours.weekdays.days}:</span>
                <span className="text-white">{siteConfig.businessHours.weekdays.hours}</span>
              </li>
              <li className="text-sm text-gray-300 flex justify-between">
                <span>{siteConfig.businessHours.saturday.days}:</span>
                <span className="text-white">{siteConfig.businessHours.saturday.hours}</span>
              </li>
              <li className="text-sm text-gray-300 flex justify-between">
                <span>{siteConfig.businessHours.sunday.days}:</span>
                <span className="text-white">{siteConfig.businessHours.sunday.hours}</span>
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
                <span className="text-gray-300">
                  {siteConfig.contact.address.street}, {siteConfig.contact.address.neighborhood}<br />
                  {siteConfig.contact.address.city} - {siteConfig.contact.address.state}, {siteConfig.contact.address.zipCode}
                </span>
              </li>
              <li className="flex items-center text-sm">
                <FaPhone className="flex-shrink-0 mr-3 text-[var(--gold)]" />
                <span className="text-gray-300">{siteConfig.contact.phone}</span>
              </li>
              <li className="flex items-center text-sm">
                <FaEnvelope className="flex-shrink-0 mr-3 text-[var(--gold)]" />
                <span className="text-gray-300">{siteConfig.contact.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 mt-12 text-sm text-center border-t border-gray-800">
          <p className="text-gray-400">&copy; {currentYear} {siteConfig.companyName}. Todos os direitos reservados.</p>
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