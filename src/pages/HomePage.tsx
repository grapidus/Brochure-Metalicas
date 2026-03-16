import React from 'react';
import Hero from '../components/sections/Hero/Hero';
import About from '../components/sections/About/About';
import MissionVision from '../components/sections/About/MissionVision';
import Services from '../components/sections/Services/Services';
import Portfolio from '../components/sections/Portfolio/Portfolio';
import Team from '../components/sections/Team/Team';
import Contact from '../components/sections/Contact/Contact';

const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <About />
      <MissionVision />
      <Services />
      <Portfolio />
      <Team />
      <Contact />
    </main>
  );
};

export default HomePage;
