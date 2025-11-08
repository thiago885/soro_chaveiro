
import React from 'react';
import { PhoneIcon, WhatsAppIcon } from './icons';

const phoneNumber = "5515974021661";
const whatsappLink = `https://wa.me/${phoneNumber}?text=Olá, preciso de um chaveiro 24h em Sorocaba, você pode me ajudar?`;
const telLink = `tel:+${phoneNumber}`;

const Footer = () => {
  return (
    <footer id="contato" className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Logo & Info */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-white">Chaveiro Sorocaba 24h</h3>
            <p className="mt-2 text-sm text-gray-400">25 anos solucionando emergências com chaves e fechaduras.</p>
          </div>
          
          {/* Column 2: Contato */}
          <div>
            <h4 className="font-semibold text-white tracking-wider uppercase">Contato</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-white">
                  <WhatsAppIcon className="h-5 w-5 mr-2 text-brand-green"/>
                  <span>(15) 97402-1661</span>
                </a>
              </li>
              <li>
                <a href={telLink} className="flex items-center hover:text-white">
                  <PhoneIcon className="h-5 w-5 mr-2 text-brand-blue"/>
                  <span>(15) 97402-1661</span>
                </a>
              </li>
              <li className="text-gray-400">
                <span className="font-semibold">Horário:</span> 24 horas
              </li>
            </ul>
          </div>

          {/* Column 3: Serviços */}
          <div>
            <h4 className="font-semibold text-white tracking-wider uppercase">Serviços</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#servicos" className="hover:text-white">Chaveiro Automotivo</a></li>
              <li><a href="#servicos" className="hover:text-white">Chaveiro Residencial</a></li>
              <li><a href="#servicos" className="hover:text-white">Chaveiro Comercial</a></li>
              <li><a href="#servicos" className="hover:text-white">Cópia de Chave Codificada</a></li>
            </ul>
          </div>
          
          {/* Column 4: Áreas Atendidas */}
          <div>
            <h4 className="font-semibold text-white tracking-wider uppercase">Áreas Atendidas</h4>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-400">Sorocaba/SP</li>
              <li className="text-gray-400">Votorantim/SP</li>
              <li className="text-gray-400">Araçoiaba da Serra/SP</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Chaveiro Sorocaba 24h - Todos os direitos reservados.</p>
          <a href="#" className="mt-2 inline-block hover:text-white">Política de Privacidade</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
