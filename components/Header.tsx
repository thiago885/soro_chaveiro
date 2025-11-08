
import React, { useState } from 'react';
import { PhoneIcon, WhatsAppIcon, MenuIcon, XIcon } from './icons';

const navLinks = [
  { name: 'Serviços', href: '#servicos' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Contato', href: '#contato' },
];

const phoneNumber = "5515974021661";
const whatsappLink = `https://wa.me/${phoneNumber}?text=Olá, preciso de um chaveiro 24h em Sorocaba, você pode me ajudar?`;
const telLink = `tel:+${phoneNumber}`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-sm shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="text-xl font-extrabold text-brand-dark-gray">Chaveiro Sorocaba 24h</a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-600 hover:text-brand-blue font-medium transition-colors duration-300">
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-2">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-4 py-2 bg-brand-green text-white font-bold rounded-lg shadow-md hover:bg-green-700 transition-transform duration-300 hover:scale-105">
              <WhatsAppIcon className="h-5 w-5 mr-2" />
              <span>WhatsApp</span>
            </a>
            <a href={telLink} className="flex items-center justify-center px-4 py-2 bg-brand-blue text-white font-bold rounded-lg shadow-md hover:bg-blue-800 transition-transform duration-300 hover:scale-105">
              <PhoneIcon className="h-5 w-5 mr-2" />
              <span>Ligar Agora</span>
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-dark-gray">
              {isMenuOpen ? <XIcon className="h-8 w-8" /> : <MenuIcon className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-20 left-0 w-full">
          <nav className="flex flex-col items-center space-y-4 p-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-brand-blue font-medium py-2">
                {link.name}
              </a>
            ))}
            <div className="flex flex-col space-y-3 w-full max-w-xs pt-4">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full px-4 py-3 bg-brand-green text-white font-bold rounded-lg shadow-md hover:bg-green-700 transition-transform duration-300 hover:scale-105">
                <WhatsAppIcon className="h-5 w-5 mr-2" />
                <span>WhatsApp: (15) 97402-1661</span>
              </a>
              <a href={telLink} className="flex items-center justify-center w-full px-4 py-3 bg-brand-blue text-white font-bold rounded-lg shadow-md hover:bg-blue-800 transition-transform duration-300 hover:scale-105">
                <PhoneIcon className="h-5 w-5 mr-2" />
                <span>Ligar Agora: (15) 97402-1661</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
