'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp, FaClock } from 'react-icons/fa';

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    submitted: false,
    loading: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, loading: true }));

    // Simular envio do formulário
    setTimeout(() => {
      setFormState(prev => ({ 
        ...prev, 
        submitted: true, 
        loading: false,
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      }));
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-[var(--gray-light)] section-padding">
      <div className="container">
        <h2 className="section-title">Entre em Contato</h2>
        <p className="max-w-3xl mx-auto mb-12 text-center">
          Estamos prontos para tirar suas dúvidas e agendar seu horário. 
          Preencha o formulário abaixo ou entre em contato pelos nossos canais de atendimento.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Formulário de Contato */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="p-8 bg-white rounded-lg shadow-md"
          >
            {formState.submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-10">
                <div className="p-4 mb-6 text-white rounded-full bg-green-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mb-2 text-2xl font-bold text-center">Mensagem Enviada!</h3>
                <p className="mb-8 text-center text-gray-600">
                  Obrigado pelo seu contato. Retornaremos em breve!
                </p>
                <button 
                  onClick={() => setFormState(prev => ({ ...prev, submitted: false }))}
                  className="btn-secondary"
                >
                  Enviar Nova Mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">Nome Completo</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formState.name}
                    onChange={handleChange}
                    required 
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:outline-none" 
                    placeholder="Seu nome"
                  />
                </div>
                
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">E-mail</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formState.email}
                      onChange={handleChange}
                      required 
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:outline-none" 
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium">Telefone</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formState.phone}
                      onChange={handleChange}
                      required 
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:outline-none" 
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block mb-2 text-sm font-medium">Serviço de Interesse</label>
                  <select 
                    id="service" 
                    name="service" 
                    value={formState.service}
                    onChange={handleChange}
                    required 
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:outline-none"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="limpeza">Limpeza de Pele</option>
                    <option value="drenagem">Drenagem Linfática</option>
                    <option value="sobrancelhas">Design de Sobrancelhas</option>
                    <option value="massagem">Massagem Modeladora</option>
                    <option value="peeling">Peeling Facial</option>
                    <option value="depilacao">Depilação</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">Mensagem</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:outline-none" 
                    placeholder="Como podemos ajudar?"
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <button 
                    type="submit" 
                    className="w-full btn-primary"
                    disabled={formState.loading}
                  >
                    {formState.loading ? 'Enviando...' : 'Enviar Mensagem'}
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          {/* Informações de Contato */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between"
          >
            <div className="p-8 mb-8 bg-white rounded-lg shadow-md">
              <h3 className="mb-6 text-xl font-semibold">Informações de Contato</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FaMapMarkerAlt className="mt-1 mr-3 text-[var(--primary)]" size={20} />
                  <div>
                    <p className="font-medium">Endereço</p>
                    <p className="text-gray-600">Av. Principal, 123, Centro<br />São Paulo - SP, 01000-000</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <FaPhone className="mt-1 mr-3 text-[var(--primary)]" size={20} />
                  <div>
                    <p className="font-medium">Telefone</p>
                    <p className="text-gray-600">(11) 9876-5432</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <FaWhatsapp className="mt-1 mr-3 text-[var(--primary)]" size={20} />
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <p className="text-gray-600">(11) 98765-4321</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <FaEnvelope className="mt-1 mr-3 text-[var(--primary)]" size={20} />
                  <div>
                    <p className="font-medium">E-mail</p>
                    <p className="text-gray-600">contato@belezaestetica.com.br</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="p-8 bg-white rounded-lg shadow-md">
              <h3 className="mb-6 text-xl font-semibold">Horário de Funcionamento</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FaClock className="mt-1 mr-3 text-[var(--primary)]" size={20} />
                  <div>
                    <p className="font-medium">Segunda a Sexta</p>
                    <p className="text-gray-600">9h às 19h</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <FaClock className="mt-1 mr-3 text-[var(--primary)]" size={20} />
                  <div>
                    <p className="font-medium">Sábado</p>
                    <p className="text-gray-600">9h às 16h</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <FaClock className="mt-1 mr-3 text-[var(--primary)]" size={20} />
                  <div>
                    <p className="font-medium">Domingo</p>
                    <p className="text-gray-600">Fechado</p>
                  </div>
                </li>
              </ul>
              
              <div className="p-4 mt-6 text-center rounded-lg bg-[var(--secondary)]">
                <p className="text-sm font-medium text-[var(--primary-dark)]">
                  Agende seu horário com antecedência para garantir disponibilidade!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 