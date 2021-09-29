import React, { useState } from 'react';
import Header from './components/header/index'
import './App.css';
import Footer from './components/footer/index'
import About from './components/about';
import Experience from './components/experience';
import Stack from './components/stack';
import Contact from './components/contact';


function App() {
  const [currentTab, setCurrentTab] = useState('about')
  return (
    <div className="App">
      <Header setCurrentTab={setCurrentTab}/>
      
      {currentTab === 'about' && (<About/>)}
      {currentTab === 'experience' && (<Experience/>)}
      {currentTab === 'stack' && (<Stack/>)}
      {currentTab === 'contact' && (<Contact/>)}
    
      <Footer/>
    </div>
  );
}

export default App;
