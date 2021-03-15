import React from 'react';
import './styles.css';

function Header({setCurrentTab}){
    return (
      
    <div className="NavBar">   
     <ul className="Headerlist">   
       
        <li onClick={() => {setCurrentTab('about')}}>About Me</li>
        <li onClick={() => {setCurrentTab('experience')}}>Experience</li>
        <li onClick={() => {setCurrentTab('stack')}}>Stack</li>
        <li onClick={() => {setCurrentTab('contact')}}>Contact</li>
         
     </ul> 
    </div> 
    )
}


export default Header;