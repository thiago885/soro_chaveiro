
import React from 'react';
import { MapPinIcon } from './icons';

const bairros = [
  'Centro', 'Cajuru', 'Aparecidinha',
  'Vila Helena', 'Jardim Paulistano', 'Campolim',
  'Jardim Vera Cruz', 'Éden', 'Trujillo',
  'Barcelona', 'Além Ponte', 'Cerrado',
  'Wanel Ville', 'Jardim Santa Rosália', 'Vila Hortência',
];

const phoneNumber = "5515974021661";
const whatsappLink = `https://wa.me/${phoneNumber}?text=Olá, gostaria de confirmar o atendimento em meu bairro.`;

const CoverageSection = () => {
  return (
    <section className="py-20 bg-brand-light-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark-gray">Atendemos Sorocaba e Região com Rapidez</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Prestamos serviço de chaveiro 24 horas em toda Sorocaba, Votorantim e Araçoiaba da Serra. Confira os principais bairros atendidos:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-10 max-w-4xl mx-auto">
          {bairros.map((bairro, index) => (
            <div key={index} className="bg-white p-3 rounded-lg shadow-sm flex items-center justify-center">
              <MapPinIcon className="h-5 w-5 text-brand-blue mr-2 flex-shrink-0" />
              <span className="font-medium text-gray-700">{bairro}</span>
            </div>
          ))}
        </div>
        <p className="mt-8 font-bold text-lg text-gray-800">E também: Votorantim e Araçoiaba da Serra</p>
        <div className="mt-8">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-brand-yellow text-brand-dark-gray font-bold py-3 px-8 rounded-lg shadow-md hover:bg-yellow-500 transition-colors duration-300">
            Não encontrou seu bairro? Entre em contato!
          </a>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;
