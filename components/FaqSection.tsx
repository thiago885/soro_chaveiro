import React, { useState } from 'react';
import { ChevronDownIcon } from './icons';

const faqs = [
  {
    question: 'Quanto tempo vocês levam para chegar?',
    answer: 'Em média 10 minutos em Sorocaba. O tempo pode variar conforme o bairro e trânsito, mas priorizamos atendimentos de emergência.',
  },
  {
    question: 'Atendem 24 horas todos os dias?',
    answer: 'Sim! Funcionamos 24 horas por dia, 7 dias por semana, incluindo domingos e feriados.',
  },
  {
    question: 'Quais marcas de veículos vocês atendem?',
    answer: 'Atendemos todas as marcas nacionais e importadas. Possuímos equipamentos de última geração para chaves codificadas.',
  },
  {
    question: 'Qual a forma de pagamento?',
    answer: 'Aceitamos dinheiro, PIX, cartão de débito e crédito. O pagamento é realizado após a conclusão do serviço.',
  },
  {
    question: 'Fazem cópia de chave codificada no local?',
    answer: 'Sim! Realizamos programação de chave presencial com equipamentos especializados, direto no local.',
  },
  {
    question: 'Cobram taxa de deslocamento?',
    answer: 'O valor varia conforme a distância. Entre em contato via WhatsApp para orçamento sem compromisso.',
  },
];

// FIX: Defined a type for the component's props to prevent TypeScript errors with the 'key' prop in lists.
type FaqItemProps = {
  faq: typeof faqs[0],
  index: number,
  openIndex: number | null,
  setOpenIndex: React.Dispatch<React.SetStateAction<number | null>>
};

const FaqItem = ({ faq, index, openIndex, setOpenIndex }: FaqItemProps) => {
  const isOpen = index === openIndex;

  const toggleOpen = () => {
    setOpenIndex(isOpen ? null : index);
  };

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={toggleOpen}
        className="w-full flex justify-between items-center text-left text-lg font-semibold text-brand-dark-gray"
      >
        <span>{faq.question}</span>
        <ChevronDownIcon className={`h-6 w-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
        <p className="text-gray-600 pr-6">{faq.answer}</p>
      </div>
    </div>
  );
};

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark-gray">Dúvidas Frequentes</h2>
          <p className="mt-4 text-lg text-gray-600">Sobre Nosso Serviço de Chaveiro 24h</p>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              faq={faq}
              index={index}
              openIndex={openIndex}
              setOpenIndex={setOpenIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;