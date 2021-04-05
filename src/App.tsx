import React from 'react';
import "./App.css";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import ContactUs from './components/ContactUs/ContactUs';
import Events from './components/Events/Events';

function App() {

  return (
    <div>
      <Header />
      <div className="content">
        <Banner />
        <ContactUs />
        <Events />
      </div>
      <Footer />
    </div>
  );
}

export default App;
