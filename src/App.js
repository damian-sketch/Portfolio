import React, { useState } from 'react';
import Header from './components/header/index'
import './App.css';
import Footer from './components/footer/index'
import About from './components/about';
import Experience from './components/experience';
import Projects from './components/projects';
import Contact from './components/contact';


function App() {
  const [currentTab, setCurrentTab] = useState('about')
  return (
    <div className="App">
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
