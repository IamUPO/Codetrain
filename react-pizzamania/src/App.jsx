import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Gallary from './components/gallary/Gallary';
import Shop from './components/shop/Shop';
import Subscription from './components/subscription/Subscription';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Gallary />
      <Shop />
      <Subscription />
      <Footer />
    </>
  )
}

export default App
