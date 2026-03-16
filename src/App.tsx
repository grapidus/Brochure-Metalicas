import React from 'react';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
import HomePage from './pages/HomePage';
import './styles/globals.css';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <HomePage />
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default App;
