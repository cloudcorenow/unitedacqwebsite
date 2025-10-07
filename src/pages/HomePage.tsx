import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Services from '../components/home/Services';
import Stats from '../components/home/Stats';
import CTA from '../components/home/CTA';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'United Acquisitions LLC | Professional Debt Collection & Recovery';
  }, []);

  return (
    <>
      <Hero />
      <Features />
      <Services />
      <Stats />
      <CTA />
    </>
  );
};

export default HomePage;