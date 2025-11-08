
import React from 'react';
import { PhoneIcon, WhatsAppIcon } from './icons';

const phoneNumber = "5515974021661";
const whatsappLink = `https://wa.me/${phoneNumber}?text=Olá, preciso de um chaveiro agora!`;
const telLink = `tel:+${phoneNumber}`;

const CallToActionSection = () => {
  return (
    <section className="bg-brand-dark-gray text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold">Precisa de um Chaveiro Agora?</h2>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          Atendimento emergencial em Sorocaba, Votorantim e Araçoiaba da Serra.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-brand-green text-white font-bold text-lg rounded-lg shadow-xl hover:bg-green-700 transition-transform duration-300 hover:scale-105 transform">
            <WhatsAppIcon className="h-6 w-6 mr-3" />
            <span>Chamar no WhatsApp</span>
          </a>
          <a href={telLink} className="flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-white text-brand-dark-gray font-bold text-lg rounded-lg shadow-xl hover:bg-gray-200 transition-transform duration-300 hover:scale-105 transform">
            <PhoneIcon className="h-6 w-6 mr-3 text-brand-blue" />
            <span>Ligar: (15) 97402-1661</span>
          </a>
        </div>
        <p className="mt-8 text-sm text-gray-400">
          Resposta imediata • Atendimento 24/7 • Chegada em até 10 minutos
        </p>
      </div>
    </section>
  );
};

export default CallToActionSection;
