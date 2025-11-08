
import React from 'react';
import { ClockIcon, WrenchIcon, CogIcon, DollarSignIcon, MoonIcon, ShieldCheckIcon } from './icons';

const features = [
  {
    icon: <ClockIcon className="h-10 w-10 text-brand-blue" />,
    title: 'Rapidez no Atendimento',
    description: 'Chegamos em até 10 minutos em Sorocaba e região. Emergência não pode esperar.',
  },
  {
    icon: <WrenchIcon className="h-10 w-10 text-brand-blue" />,
    title: '25 Anos de Experiência',
    description: 'Mais de duas décadas solucionando problemas com chaves e fechaduras.',
  },
  {
    icon: <CogIcon className="h-10 w-10 text-brand-blue" />,
    title: 'Equipamentos de Última Geração',
    description: 'Máquinas modernas para confecção de chaves nacionais e importadas, codificadas ou não.',
  },
  {
    icon: <DollarSignIcon className="h-10 w-10 text-brand-blue" />,
    title: 'Preço Justo e Transparente',
    description: 'Orçamento claro antes do serviço. Sem surpresas na hora do pagamento.',
  },
  {
    icon: <MoonIcon className="h-10 w-10 text-brand-blue" />,
    title: 'Disponibilidade 24/7',
    description: 'Atendemos todos os dias, 24 horas por dia, incluindo feriados.',
  },
  {
    icon: <ShieldCheckIcon className="h-10 w-10 text-brand-blue" />,
    title: 'Profissionalismo e Segurança',
    description: 'Serviço confiável executado por profissional qualificado.',
  },
];

const WhyChooseUsSection = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark-gray">Por Que Escolher Nosso Serviço de Chaveiro?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 bg-blue-100 rounded-full p-3">
                {feature.icon}
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-brand-dark-gray">{feature.title}</h3>
                <p className="mt-1 text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
