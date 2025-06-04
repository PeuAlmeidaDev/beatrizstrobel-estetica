'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Juliana Silva',
    initials: 'JS',
    position: 'Empresária',
    text: 'Estou completamente encantada com os resultados do tratamento facial premium. Minha pele está radiante e rejuvenescida, com uma textura que não tinha há anos. A atenção aos detalhes e o atendimento personalizado fazem toda a diferença.',
    rating: 5,
    service: 'Limpeza de Pele Premium e Peeling Facial'
  },
  {
    id: 2,
    name: 'Carla Mendes',
    initials: 'CM',
    position: 'Médica',
    text: 'A drenagem linfática avançada transformou minha rotina! Como médica, sou extremamente exigente, e posso afirmar que a técnica aplicada é impecável. Os resultados são visíveis desde a primeira sessão, com redução significativa do inchaço.',
    rating: 5,
    service: 'Drenagem Linfática Avançada'
  },
  {
    id: 3,
    name: 'Roberta Almeida',
    initials: 'RA',
    position: 'Advogada',
    text: 'O design de sobrancelhas premium trouxe uma transformação completa ao meu rosto. A análise facial computadorizada garantiu um resultado perfeitamente harmônico. Recebo elogios constantes e me sinto muito mais confiante.',
    rating: 5,
    service: 'Design de Sobrancelhas Premium'
  },
  {
    id: 4,
    name: 'Ana Paula Rodrigues',
    initials: 'AR',
    position: 'Diretora de Marketing',
    text: 'A massagem modeladora elite superou todas as minhas expectativas. Os resultados são notáveis - redução de medidas, melhora na textura da pele e diminuição visível da celulite. O ambiente luxuoso e os produtos exclusivos tornam cada sessão uma experiência incrível.',
    rating: 5,
    service: 'Massagem Modeladora Elite'
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 7000);
    
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-[var(--cream)] section-padding relative">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 bg-[radial-gradient(#9F7E69_1px,transparent_1px)] bg-[size:20px_20px] opacity-5"></div>
      
      <div className="container">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 mb-4 text-sm tracking-wider uppercase bg-white text-[var(--primary)] rounded-full shadow-sm">
            Experiências Reais
          </span>
          <h2 className="section-title">Depoimentos de Clientes</h2>
          <div className="elegant-border"></div>
          <p className="section-subtitle">
            Descubra as transformações e experiências de quem já vivenciou nossos tratamentos exclusivos.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Testimonial Slider */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="p-10 bg-white rounded-sm shadow-lg border border-[var(--secondary)]"
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-8 mb-8">
                      {/* Avatar com iniciais em vez de foto */}
                      <div className="relative w-24 h-24 mx-auto md:mx-0 overflow-hidden rounded-full border-2 border-[var(--gold)] bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] flex items-center justify-center">
                        <span className="text-2xl font-serif text-white">{testimonial.initials}</span>
                      </div>
                      <div className="text-center md:text-left">
                        <h3 className="text-xl font-serif text-[var(--foreground)]">{testimonial.name}</h3>
                        <p className="text-sm text-[var(--primary)]">{testimonial.position}</p>
                        <p className="text-xs text-gray-500 mt-1">{testimonial.service}</p>
                        <div className="flex mt-2 justify-center md:justify-start">
                          {[...Array(5)].map((_, i) => (
                            <FaStar 
                              key={i} 
                              className={i < testimonial.rating ? "text-[var(--gold)]" : "text-gray-300"} 
                              size={14} 
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <FaQuoteLeft className="absolute -top-3 -left-3 text-[var(--gold)] opacity-20" size={40} />
                      <p className="relative z-10 text-[var(--foreground)] leading-relaxed italic">{testimonial.text}</p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button 
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center border border-[var(--secondary)] text-[var(--primary)] hover:text-[var(--gold)] transition-colors"
            aria-label="Depoimento anterior"
          >
            <FaLongArrowAltLeft size={20} />
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center border border-[var(--secondary)] text-[var(--primary)] hover:text-[var(--gold)] transition-colors"
            aria-label="Próximo depoimento"
          >
            <FaLongArrowAltRight size={20} />
          </button>

          {/* Dots navigation */}
          <div className="flex justify-center mt-10 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-[var(--gold)] w-6' 
                    : 'bg-[var(--secondary)]'
                }`}
                aria-label={`Ver depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-3xl p-10 mx-auto mt-20 text-center bg-white rounded-sm shadow-xl border border-[var(--secondary)] relative"
        >
          {/* Elementos decorativos */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[var(--gold)]"></div>
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[var(--gold)]"></div>
          
          <h3 className="mb-4 text-2xl font-serif text-[var(--primary)]">
            Experimente a Transformação
          </h3>
          <div className="h-0.5 w-24 mx-auto bg-[var(--gold)] mb-6"></div>
          <p className="mb-8 text-[var(--foreground)]">
            Junte-se às nossas clientes satisfeitas e descubra por que somos referência em tratamentos estéticos premium.<br/>
            Agende uma avaliação personalizada gratuita e inicie sua jornada de transformação.
          </p>
          <button className="px-8 py-3 text-[var(--foreground)] font-medium rounded-full bg-[var(--gold)] hover:bg-[var(--gold)] transition-all duration-300 shadow-md hover:shadow-lg hover-lift">
            Agende sua Avaliação Exclusiva
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 