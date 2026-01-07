import React from 'react';
import confetti from 'canvas-confetti';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Categories from './sections/Categories';
import Services from './sections/Services';
import Factory from './sections/Factory';
import WhyUs from './sections/WhyUs';

import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Cont from './sections/Cont';
import Effects from './components/Effect';



export default function App() {
 
  return (
    <div className="relative bg-black min-h-screen">
      <Effects />
      <Navbar />
      <Hero />
      <Categories />
      <Services />
       <Factory />
       <WhyUs />
       <Cont />
       <Contact />
       <Footer />
    </div>
  );
}
