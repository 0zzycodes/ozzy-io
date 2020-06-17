import React from 'react';
import Header from './components/header/header';
import About from './sections/about/about';
import Portfolio from './sections/portfolio/portfolio';
import './App.css';
import Footer from './components/footer/footer';
import Contact from './sections/contact/contact';

const App = () => {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      document.querySelector('.navbar').classList.remove('fancy');
      document.querySelector('.navbar').classList.add('white-bg');
    } else {
      document.querySelector('.navbar').classList.add('fancy');
      document.querySelector('.navbar').classList.remove('white-bg');
    }
  });
  return (
    <div className="app">
      <Header />
      <div id="about">
        <About />
      </div>
      <div id="work">
        <Portfolio />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;
