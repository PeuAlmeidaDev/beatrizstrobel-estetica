'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import Image from 'next/image';
import DecorativeCorners from '../ui/DecorativeCorners';

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-r from-[#3A3238] to-[#4A4246]"
    >
      {/* Overlay com gradiente elegante */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-[#2A2226]/70 to-black/60"></div>
      
      {/* Elementos decorativos - padrão geométrico sutil */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#9F7E69_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      
      {/* Borda decorativa em ouro */}
      <div className="absolute top-8 left-8 right-8 bottom-8 border border-[var(--gold)] opacity-20 pointer-events-none"></div>
      
      {/* Content */}
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Transforme sua Beleza com
            <span className="block mt-2 text-[var(--gold)]">Tratamentos Exclusivos</span>
          </h1>
          
          <p className="mb-8 text-lg text-gray-300 md:text-xl">
            Descubra o poder da beleza natural com nossos tratamentos estéticos personalizados,
            realizados por profissionais altamente qualificados.
          </p>
          
          <div className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-6 md:justify-center">
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="px-8 py-3 text-lg font-medium text-white transition-all duration-300 rounded-full bg-[var(--primary)] hover:bg-[var(--primary-dark)] shadow-lg hover:shadow-xl hover:-translate-y-1 cursor-pointer"
            >
              Conheça Nossos Serviços
            </Link>
            
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="px-8 py-3 text-lg font-medium transition-all duration-300 border-2 rounded-full text-[var(--gold)] border-[var(--gold)] hover:bg-[var(--gold)] hover:text-white shadow-lg hover:shadow-xl hover:-translate-y-1 cursor-pointer"
            >
              Agende uma Consulta
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decoração nos cantos */}
      <DecorativeCorners size={12} color="var(--gold)" />
    </section>
  );
};

export default HeroSection; 