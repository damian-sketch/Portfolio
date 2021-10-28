import React from 'react';
import './App.css';
import About from './components/about';
import Experience from './components/experience';
import Projects from './components/projects';
import Contact from './components/contact';
import Header from './components/header';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
