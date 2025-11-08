import React from 'react';
import { CarIcon, HomeIcon, BuildingIcon } from './icons';

const phoneNumber = "5515974021661";

const services = [
  {
    title: 'Chaveiro Automotivo',
    icon: <CarIcon className="h-10 w-10 text-brand-blue" />,
    features: [
      'Abertura de Portas Trancadas',
      'Cópia de Chave Simples e Codificada',
      'Programação de Chave Presencial',
      'Reparo de Ignição e Cilindro',
      'Chave Quebrada na Ignição',
      'Abertura de Porta-Malas',
    ],
    highlight: true,
    ctaText: 'Solicitar Atendimento Automotivo',
    whatsappMessage: 'Olá, preciso de um chaveiro 24h para um serviço AUTOMOTIVO, você pode me ajudar?',
    image: 'https://picsum.photos/seed/car/400/300',
  },
  {
    title: 'Chaveiro Residencial',
    icon: <HomeIcon className="h-10 w-10 text-brand-blue" />,
    features: [
      'Abertura de Portas Trancadas',
      'Instalação de Fechaduras',
      'Troca de Segredo',
      'Cópia de Chaves Residenciais',
      'Reparos em Fechaduras',
    ],
    highlight: false,
    ctaText: 'Solicitar Atendimento Residencial',
    whatsappMessage: 'Olá, preciso de um chaveiro 24h para um serviço RESIDENCIAL, você pode me ajudar?',
    image: 'https://picsum.photos/seed/home/400/300',
  },
  {
    title: 'Chaveiro Comercial',
    icon: <BuildingIcon className="h-10 w-10 text-brand-blue" />,
    features: [
      'Abertura de Estabelecimentos',
      'Instalação de Fechaduras de Segurança',
      'Abertura de Cofres',
      'Sistemas de Controle de Acesso',
      'Manutenção Preventiva',
    ],
    highlight: false,
    ctaText: 'Solicitar Orçamento Comercial',
    whatsappMessage: 'Olá, preciso de um chaveiro 24h para um serviço COMERCIAL, você pode me ajudar?',
    image: 'https://picsum.photos/seed/office/400/300',
  },
];

// FIX: Defined a type for the component's props to prevent TypeScript errors with the 'key' prop in lists.
type ServiceCardProps = {
  service: typeof services[0];
};

const ServiceCard = ({ service }: ServiceCardProps) => {
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(service.whatsappMessage)}`;

  return (
    <div className={`flex flex-col bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 ${service.highlight ? 'border-4 border-brand-yellow' : 'border border-gray-200'}`}>
      <img src={service.image} alt={service.title} className="w-full h-48 object-cover" loading="lazy" />
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center mb-4">
          {service.icon}
          <h3 className="ml-4 text-2xl font-bold text-brand-dark-gray">{service.title}</h3>
        </div>
        <ul className="space-y-2 text-gray-600 mb-6 flex-grow">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-brand-green mr-2 mt-1">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        {service.title === 'Chaveiro Automotivo' && (
            <p className="text-sm text-gray-500 mt-auto mb-4 font-semibold">Atendemos todas as marcas nacionais e importadas.</p>
        )}
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="mt-auto w-full text-center px-6 py-3 bg-brand-blue text-white font-bold rounded-lg shadow-md hover:bg-blue-800 transition-colors duration-300">
          {service.ctaText}
        </a>
      </div>
    </div>
  );
};


const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 bg-brand-light-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark-gray">Nossos Serviços de Chaveiro 24h em Sorocaba</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Soluções rápidas e profissionais para emergências automotivas, residenciais e comerciais.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;