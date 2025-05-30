'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSpa, FaFire, FaCut, FaMagic, FaRegSmile, FaCrown } from 'react-icons/fa';

const services = [
  {
    id: 1,
    name: 'Limpeza de Pele Profunda',
    description: 'Tratamento exclusivo que remove impurezas, cravos e células mortas, deixando sua pele revitalizada com um brilho radiante.',
    price: 'R$ 150,00',
    priceDiscount: 'R$ 85,00',
    icon: FaSpa,
    popular: false,
    benefits: [
      'Remoção completa de impurezas',
      'Esfoliação com produtos premium',
      'Hidratação com ativos importados',
      'Máscara personalizada francesa'
    ],
    marketingTag: 'Pele renovada com resultados imediatos'
  },
  {
    id: 2,
    name: 'Drenagem Linfática',
    description: 'Técnica exclusiva que estimula o sistema linfático, reduzindo inchaços e melhorando a circulação com resultados visíveis.',
    price: 'R$ 180,00',
    priceDiscount: 'R$ 80,00',
    icon: FaFire,
    popular: true,
    benefits: [
      'Redução imediata de inchaço',
      'Eliminação acelerada de toxinas',
      'Melhora significativa da circulação',
      'Técnica exclusiva desenvolvida na Suíça'
    ],
    marketingTag: 'Resultados visíveis desde a primeira sessão'
  },
  {
    id: 4,
    name: 'Massagem Modeladora Elite',
    description: 'Protocolo exclusivo que combate a gordura localizada e a celulite, remodelando o corpo com resultados surpreendentes.',
    price: 'R$ 200,00',
    priceDiscount: 'R$ 85,00',
    icon: FaMagic,
    popular: true,
    benefits: [
      'Redução de medidas com tecnologia francesa',
      'Tratamento avançado anti-celulite',
      'Melhora da circulação e drenagem',
      'Firmeza da pele com óleos essenciais exclusivos'
    ],
    marketingTag: 'Exclusivo: pacote VIP com 20% de desconto'
  },
  {
    id: 5,
    name: 'Combo Limpeza facial + Massagem facial',
    description: 'Tratamento de luxo que renova as células da pele, reduzindo manchas, linhas finas e restaurando a textura juvenil da pele.',
    price: 'R$ 180,00',
    priceDiscount: 'R$ 140,00',
    icon: FaRegSmile,
    popular: false,
    benefits: [
      'Renovação celular com ácidos importados',
      'Redução de manchas e uniformização do tom',
      'Protocolo anti-idade exclusivo',
      'Produtos da linha luxury skincare'
    ],
    marketingTag: 'Rejuvenescimento visível em apenas 3 sessões'
  },
  {
    id: 6,
    name: 'Depilação Completa Luxury',
    description: 'Remoção de pelos com técnicas avançadas que minimizam o desconforto e prolongam o resultado por muito mais tempo.',
    price: 'R$ 250,00',
    priceDiscount: 'R$ 210,00',
    icon: FaCut,
    popular: false,
    benefits: [
      'Técnica indolor com aparelhos de última geração',
      'Resultado duradouro garantido',
      'Produtos importados anti-foliculite',
      'Hidratação pós-depilação com ouro coloidal'
    ],
    marketingTag: 'Experiência premium sem dor com resultados duradouros'
  }
];

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState('todos');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const filteredServices = activeTab === 'todos' 
    ? services 
    : activeTab === 'populares' 
      ? services.filter(service => service.popular) 
      : services;

  return (
    <section id="services" className="py-24 bg-white section-padding relative">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t border-l border-[var(--secondary)] opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b border-r border-[var(--secondary)] opacity-50"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 mb-4 text-sm tracking-wider uppercase bg-[var(--cream)] text-[var(--primary)] rounded-full">
            Nossos Tratamentos
          </span>
          <h2 className="section-title">Serviços Premium</h2>
          <div className="elegant-border"></div>
          <p className="section-subtitle">
            Oferecemos tratamentos estéticos exclusivos realizados por especialistas certificados com produtos de altíssima qualidade.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12 space-x-6">
          <button
            className={`px-8 py-3 text-sm font-medium rounded-full transition-all duration-300 shadow-sm ${
              activeTab === 'todos' 
                ? 'bg-[var(--gold)] text-[var(--foreground)]' 
                : 'bg-white border border-[var(--secondary)] text-[var(--foreground)]'
            }`}
            onClick={() => handleTabChange('todos')}
          >
            Todos os Tratamentos
          </button>
          <button
            className={`px-8 py-3 text-sm font-medium rounded-full transition-all duration-300 shadow-sm ${
              activeTab === 'populares' 
                ? 'bg-[var(--gold)] text-[var(--foreground)]' 
                : 'bg-white border border-[var(--secondary)] text-[var(--foreground)]'
            }`}
            onClick={() => handleTabChange('populares')}
          >
            Mais Procurados
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              className="group relative overflow-hidden bg-white rounded-sm border border-[var(--secondary)] shadow-md hover:shadow-xl transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {service.popular && (
                <div className="absolute top-0 right-0 px-4 py-2 text-xs font-medium tracking-wide uppercase text-white bg-[var(--gold)]">
                  <div className="flex items-center">
                    <FaCrown className="mr-1" />
                    <span>Mais Procurado</span>
                  </div>
                </div>
              )}
              
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 mr-4 text-white rounded-full bg-[var(--primary)] shadow-md group-hover:bg-[var(--gold)] transition-colors duration-300">
                    <service.icon size={24} />
                  </div>
                  <h3 className="text-xl font-serif">{service.name}</h3>
                </div>
                
                <p className="mb-6 text-[var(--foreground)]">{service.description}</p>
                
                <ul className="mb-8 space-y-3">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <span className="flex-shrink-0 mr-3 text-[var(--gold)]">✦</span>
                      <span className="text-sm text-[var(--foreground)]">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="p-4 mb-6 text-center bg-[var(--cream)] rounded-sm border-t border-[var(--gold)]">
                  <p className="text-sm text-gray-500 line-through">{service.price}</p>
                  <p className="text-2xl font-serif gold-accent">{service.priceDiscount}</p>
                  <p className="text-xs text-[var(--primary)]">por sessão individual</p>
                </div>

                <div className="p-3 mb-6 text-sm font-medium text-center rounded-sm bg-white border border-dashed border-[var(--gold)] text-[var(--primary)]">
                  {service.marketingTag}
                </div>
                
                <button className="w-full py-3 font-medium text-center text-[var(--foreground)] transition-all duration-300 border-2 rounded-full bg-transparent border-[var(--gold)] hover:bg-[var(--gold)] hover-lift">
                  Agendar Consulta
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          className="p-10 mx-auto mt-20 text-center bg-[var(--cream)] border border-[var(--secondary)] rounded-sm shadow-xl max-w-4xl relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Elementos decorativos */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[var(--gold)]"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[var(--gold)]"></div>
          
          <span className="inline-block px-4 py-1 mb-4 text-xs tracking-wider uppercase bg-white text-[var(--primary)] rounded-full shadow-sm">
            Oferta Exclusiva
          </span>
          <h3 className="mb-4 text-3xl font-serif text-[var(--primary)]">Pacotes Premium</h3>
          <div className="h-0.5 w-32 mx-auto bg-[var(--gold)] mb-6"></div>
          <p className="mb-8 text-lg">
            Experimente nossos pacotes com múltiplas sessões e economize até 30%.<br/>
            Consulte-nos sobre nosso exclusivo plano VIP com benefícios adicionais.
          </p>
          <button className="px-10 py-4 text-[var(--foreground)] font-medium rounded-full bg-[var(--gold)] hover:bg-[var(--gold)] transition-all duration-300 shadow-md hover:shadow-lg hover-lift">
            Conheça os Pacotes Premium
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection; 