import React from 'react';
import { Link } from 'react-scroll';
import './styles.css';



function Header(){

    return (
      
    <div className="NavBar">   
     <ul className="Headerlist">   
       <li><Link to="about" spy={true} smooth={true}>About</Link></li>
       <li><Link to="experience" spy={true} smooth={true}>Experience</Link></li>
       <li><Link to="projects" spy={true} smooth={true}>Projects</Link></li>
       <li><Link to="contact" spy={true} smooth={true}>Contact</Link></li>
     </ul> 
    </div> 
    )
}


export default Header;