
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import CoverageSection from './components/CoverageSection';
import FaqSection from './components/FaqSection';
import TestimonialsSection from './components/TestimonialsSection';
import CallToActionSection from './components/CallToActionSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white text-brand-dark-gray font-sans">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <CoverageSection />
        <TestimonialsSection />
        <FaqSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
