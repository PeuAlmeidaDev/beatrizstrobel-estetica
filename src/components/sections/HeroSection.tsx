'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import Image from 'next/image';

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
      <div className="container relative z-10 px-4 py-24 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block mb-4"
        >
          <span className="inline-block px-4 py-1 text-xs tracking-widest uppercase bg-[var(--gold)] text-[var(--foreground)] rounded-full">
            Experiência Premium em Estética
          </span>
        </motion.div>
        
        <motion.h1 
          className="text-4xl font-bold md:text-5xl lg:text-6xl xl:text-7xl font-serif"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="block">Desperte sua</span>
          <span className="relative">
            Beleza Natural
            <span className="absolute bottom-0 left-1/2 w-48 h-1 -translate-x-1/2 bg-[var(--gold)]"></span>
          </span>
        </motion.h1>
        
        <motion.p 
          className="max-w-2xl mx-auto mt-8 text-lg font-light md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Tratamentos estéticos personalizados por especialistas renomados para realçar sua beleza natural e elevar sua autoconfiança a outro nível.
        </motion.p>
        
        <motion.div 
          className="flex flex-col items-center justify-center gap-6 mt-12 md:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="px-8 py-4 text-lg font-medium rounded-full cursor-pointer bg-[var(--gold)] text-[var(--foreground)] hover:bg-[var(--gold)] hover:[opacity:0.9] transition-all duration-300 shadow-md hover:shadow-lg hover-lift"
          >
            Agende sua Consulta
          </Link>
          
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="px-8 py-4 text-lg font-medium bg-transparent border-2 rounded-full cursor-pointer border-white hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-300 hover-lift"
          >
            Descobrir Tratamentos
          </Link>
        </motion.div>

        {/* Destaque de promoção com design mais luxuoso */}
        <motion.div 
          className="max-w-md p-6 mx-auto mt-16 border border-[var(--gold)] bg-black/30 backdrop-blur-sm rounded-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-[var(--gold)]">Oferta Exclusiva</p>
          <div className="my-2 h-px w-24 mx-auto bg-[var(--gold)]"></div>
          <p className="mt-2 text-2xl font-serif">20% de desconto em qualquer tratamento premium</p>
          <p className="mt-1 text-sm text-white/80">Para novos clientes até o final do mês</p>
        </motion.div>
      </div>
      
      {/* Decoração nos cantos */}
      <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-[var(--gold)]"></div>
      <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-[var(--gold)]"></div>
      <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-[var(--gold)]"></div>
      <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-[var(--gold)]"></div>
    </section>
  );
};

export default HeroSection; 