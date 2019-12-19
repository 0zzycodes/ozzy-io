import React from 'react';
import Header from './components/header/header';
import About from './sections/about/about';
import Service from './sections/what we offer/service';
import Portfolio from './sections/portfolio/portfolio';
import './App.css';
import Footer from './components/footer/footer';
import Contact from './sections/contact/contact';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div id="about">
          <About />
        </div>
        <div id="service">
          <Service />
        </div>
        <div id="work">
          <Portfolio />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
