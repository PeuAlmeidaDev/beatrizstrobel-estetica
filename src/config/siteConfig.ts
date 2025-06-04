export const siteConfig = {
  companyName: 'Beatriz Strobel',
  contact: {
    address: {
      street: 'Av. Principal, 123',
      neighborhood: 'Centro',
      city: 'São Paulo',
      state: 'SP',
      zipCode: '01000-000'
    },
    phone: '(11) 9876-5432',
    whatsapp: '(11) 98765-4321',
    email: 'contato@belezaestetica.com.br'
  },
  socialMedia: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    whatsapp: 'https://wa.me/5500000000000'
  },
  businessHours: {
    weekdays: {
      days: 'Segunda a Sexta',
      hours: '9h às 19h'
    },
    saturday: {
      days: 'Sábado',
      hours: '9h às 16h'
    },
    sunday: {
      days: 'Domingo',
      hours: 'Fechado'
    }
  },
  navigation: {
    mainItems: [
      { name: 'Início', target: 'home' },
      { name: 'Sobre', target: 'about' },
      { name: 'Serviços', target: 'services' },
      { name: 'Depoimentos', target: 'testimonials' },
      { name: 'Contato', target: 'contact' }
    ]
  },
  services: [
    {
      id: 'limpeza',
      name: 'Limpeza de Pele',
      value: 'limpeza'
    },
    {
      id: 'drenagem',
      name: 'Drenagem Linfática',
      value: 'drenagem'
    },
    {
      id: 'sobrancelhas',
      name: 'Design de Sobrancelhas',
      value: 'sobrancelhas'
    },
    {
      id: 'massagem',
      name: 'Massagem Modeladora',
      value: 'massagem'
    },
    {
      id: 'peeling',
      name: 'Peeling Facial',
      value: 'peeling'
    },
    {
      id: 'depilacao',
      name: 'Depilação',
      value: 'depilacao'
    }
  ]
}; 