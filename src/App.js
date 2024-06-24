import React from 'react';
import Header from './Header';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Education from './Education';
import Certifications from './Certifications';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Certifications />
    </div>
  );
}

export default App;

