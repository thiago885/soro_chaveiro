
import React from 'react';
import { PhoneIcon, WhatsAppIcon, CheckCircleIcon } from './icons';

const phoneNumber = "5515974021661";
const whatsappLink = `https://wa.me/${phoneNumber}?text=Olá, preciso de um chaveiro 24h em Sorocaba, você pode me ajudar?`;
const telLink = `tel:+${phoneNumber}`;

const HeroSection = () => {
  return (
    <section 
      className="relative bg-cover bg-center text-white pt-32 pb-20 md:pt-48 md:pb-32" 
      style={{backgroundImage: "url('https://picsum.photos/1200/800?blur=5')"}}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">
          Chaveiro 24 Horas em Sorocaba
        </h1>
        <p className="mt-4 text-xl md:text-2xl font-semibold text-brand-yellow drop-shadow-md">
          Atendimento Emergencial em Até 10 Minutos
        </p>
        <h2 className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-200">
          Especialistas em Abertura Automotiva e Cópia de Chave Codificada
          <br/>
          <span className="opacity-80">25 Anos de Experiência | Equipamentos de Última Geração</span>
        </h2>
        
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-brand-green text-white font-bold text-lg rounded-lg shadow-xl hover:bg-green-700 transition-transform duration-300 hover:scale-105 transform">
            <WhatsAppIcon className="h-6 w-6 mr-3" />
            <span>Chamar no WhatsApp</span>
          </a>
          <a href={telLink} className="flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-brand-blue text-white font-bold text-lg rounded-lg shadow-xl hover:bg-blue-800 transition-transform duration-300 hover:scale-105 transform">
            <PhoneIcon className="h-6 w-6 mr-3" />
            <span>Ligar Agora (15) 97402-1661</span>
          </a>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-4 text-sm font-medium">
          <div className="flex items-center">
            <CheckCircleIcon className="h-5 w-5 text-brand-green mr-2" />
            <span>Atendimento 24/7</span>
          </div>
          <div className="flex items-center">
            <CheckCircleIcon className="h-5 w-5 text-brand-green mr-2" />
            <span>Sorocaba e Região</span>
          </div>
          <div className="flex items-center">
            <CheckCircleIcon className="h-5 w-5 text-brand-green mr-2" />
            <span>Todas as Marcas</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
