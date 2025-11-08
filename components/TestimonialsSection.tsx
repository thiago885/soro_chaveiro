
import React from 'react';
import { StarIcon } from './icons';

const testimonials = [
  {
    name: 'Ana Paula, Campolim',
    quote: "Perdi a chave do carro no shopping e estava desesperada. O chaveiro chegou em 15 minutos e resolveu tudo na hora. Super recomendo!",
    rating: 5,
  },
  {
    name: 'Carlos Eduardo, Cajuru',
    quote: "Profissional sério e rápido. Fez a cópia da chave codificada do meu Cruze no estacionamento mesmo. Preço justo!",
    rating: 5,
  },
  {
    name: 'Juliana Mendes, Aparecidinha',
    quote: "Atendimento às 3h da madrugada, chave quebrou na fechadura. Chegaram rápido e resolveram sem danificar a porta. Salvaram meu dia!",
    rating: 5,
  },
];

const Rating = ({ count }: { count: number }) => (
    <div className="flex items-center">
        {Array.from({ length: count }).map((_, i) => (
            <StarIcon key={i} className="h-5 w-5 text-brand-yellow" />
        ))}
    </div>
);


const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-brand-light-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark-gray">O Que Nossos Clientes Dizem</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col">
              <Rating count={testimonial.rating} />
              <blockquote className="mt-4 text-gray-600 italic flex-grow">"{testimonial.quote}"</blockquote>
              <footer className="mt-4 font-bold text-brand-dark-gray">— {testimonial.name}</footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
