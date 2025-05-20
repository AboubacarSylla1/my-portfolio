import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-5" id="home">
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
