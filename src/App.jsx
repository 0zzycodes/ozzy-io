import React from 'react';
// import { Route } from 'react-router-dom';
import Header from './components/header/header';
import About from './sections/about/about';
import Service from './sections/what we offer/service';
import Portfolio from './sections/portfolio/portfolio';
import './App.css';
import Footer from './components/footer/footer';
import Contact from './sections/contact/contact';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Route path="/about" component={About} />
      <Route path="/service" component={Service} />
      <Route path="/work" component={Portfolio} /> */}
      <About />
      <Service />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
