'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaSpa, FaGem, FaRegSmile, FaAward } from 'react-icons/fa';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-24 bg-[var(--cream)] section-padding">
      <div className="container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <span className="inline-block px-4 py-1 mb-4 text-sm tracking-wider uppercase bg-white text-[var(--primary)] rounded-full shadow-sm">
            Nossa História
          </span>
          <h2 className="section-title">Sobre Nossa Clínica</h2>
          <div className="elegant-border"></div>
          <p className="section-subtitle">
            Dedicados à excelência em beleza e bem-estar, oferecendo tratamentos exclusivos com técnicas avançadas.
          </p>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              {/* Moldura decorativa */}
              <div className="absolute -top-2 -left-2 w-20 h-20 border-t-2 border-l-2 border-[var(--gold)]"></div>
              <div className="absolute -bottom-2 -right-2 w-20 h-20 border-b-2 border-r-2 border-[var(--gold)]"></div>
              
              <div className="relative h-[500px] w-full rounded-sm overflow-hidden shadow-xl bg-gradient-to-br from-[#9F7E69]/20 to-[#7A6052]/30">
                {/* Elemento decorativo em vez de imagem */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-[60%] h-[60%] flex items-center justify-center">
                    <div className="absolute w-full h-full rounded-full border-2 border-[var(--gold)] opacity-30"></div>
                    <div className="absolute w-3/4 h-3/4 rounded-full border border-[var(--gold)] opacity-20"></div>
                    <div className="absolute w-1/2 h-1/2 rounded-full border border-[var(--gold)] opacity-10"></div>
                    <div className="text-center">
                      <FaSpa className="mx-auto text-6xl text-[var(--gold)] opacity-70 mb-4" />
                      <p className="font-serif text-3xl text-[var(--primary)]">Elegância</p>
                      <p className="text-sm text-[var(--primary-dark)]">& Sofisticação</p>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-[radial-gradient(#9F7E69_1px,transparent_1px)] bg-[size:20px_20px] opacity-10"></div>
              </div>
              
              {/* Badge de qualidade */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center p-2">
                <div className="w-full h-full rounded-full border-2 border-[var(--gold)] flex items-center justify-center flex-col">
                  <span className="text-xs font-medium text-[var(--primary)]">CERTIFICAÇÃO</span>
                  <span className="font-serif text-xl gold-accent">Premium</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-serif text-[var(--primary)]">
              Experiência e Excelência em Estética
            </h3>
            
            <div className="h-1 w-16 bg-[var(--gold)]"></div>
            
            <p className="text-lg text-[var(--foreground)]">
              Nossa clínica de estética foi fundada com o compromisso de proporcionar uma experiência premium de beleza, combinando técnicas tradicionais com as mais avançadas inovações do mercado.
            </p>
            
            <p className="text-[var(--foreground)]">
              Com mais de 10 anos de excelência, nossa equipe de especialistas qualificados e certificados internacionalmente utiliza produtos da mais alta qualidade para garantir resultados verdadeiramente transformadores.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="p-6 text-center bg-white rounded-sm shadow-md border-t border-[var(--gold)] hover-lift hover-glow">
                <div className="flex justify-center mb-3">
                  <FaSpa className="text-3xl text-[var(--gold)]" />
                </div>
                <p className="text-3xl font-serif gold-accent">10+</p>
                <p className="text-sm font-medium text-[var(--primary)]">Anos de Excelência</p>
              </div>
              
              <div className="p-6 text-center bg-white rounded-sm shadow-md border-t border-[var(--gold)] hover-lift hover-glow">
                <div className="flex justify-center mb-3">
                  <FaRegSmile className="text-3xl text-[var(--gold)]" />
                </div>
                <p className="text-3xl font-serif gold-accent">5000+</p>
                <p className="text-sm font-medium text-[var(--primary)]">Clientes Satisfeitos</p>
              </div>
              
              <div className="p-6 text-center bg-white rounded-sm shadow-md border-t border-[var(--gold)] hover-lift hover-glow">
                <div className="flex justify-center mb-3">
                  <FaGem className="text-3xl text-[var(--gold)]" />
                </div>
                <p className="text-3xl font-serif gold-accent">15+</p>
                <p className="text-sm font-medium text-[var(--primary)]">Tratamentos Exclusivos</p>
              </div>
              
              <div className="p-6 text-center bg-white rounded-sm shadow-md border-t border-[var(--gold)] hover-lift hover-glow">
                <div className="flex justify-center mb-3">
                  <FaAward className="text-3xl text-[var(--gold)]" />
                </div>
                <p className="text-3xl font-serif gold-accent">100%</p>
                <p className="text-sm font-medium text-[var(--primary)]">Satisfação Garantida</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 