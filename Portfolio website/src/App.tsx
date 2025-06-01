import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import PersonalDetails from './components/PersonalDetails';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <About />
          <Education />
          <Projects />
          <Skills />
          <PersonalDetails />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;