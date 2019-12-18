import React from 'react';
import Header from './components/header/header';
import About from './sections/about/about';
import Service from './sections/what we offer/service';
import Portfolio from './sections/portfolio/portfolio';
import './App.css';
import Footer from './components/footer/footer';
import Contact from './sections/contact/contact';
import ScrollableAnchor from 'react-scrollable-anchor';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <ScrollableAnchor id={'about'}>
          <About />
        </ScrollableAnchor>
        <ScrollableAnchor id={'service'}>
          <Service />
        </ScrollableAnchor>
        <ScrollableAnchor id={'work'}>
          <Portfolio />
        </ScrollableAnchor>
        <ScrollableAnchor id={'contact'}>
          <Contact />
        </ScrollableAnchor>
        <Footer />
      </>
    );
  }
}

export default App;
