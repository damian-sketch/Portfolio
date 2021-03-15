import React from 'react';
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import {faCopyright} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './styles.css';


function Contact(){
    return (
      
    <div className="Contact">  
      
    <div className="contactText">
      <h1>CONTACT ME</h1>
      <p>I am open to any Software Engineering roles that will pose an exciting challenge to me and my career.</p>
         <p> Feel free to reach me at: <br/>
         <ul className="contactIcons">   
            <FontAwesomeIcon icon={faGithub} className="icons" onClick={() => window.open('https://github.com/damian-sketch?tab=repositories')}/>
            <FontAwesomeIcon icon={faLinkedin} className="icons"  onClick={() => window.open('https://www.linkedin.com/in/cedric-muuo-7625861aa/')} />
            <FontAwesomeIcon icon={faTwitter} className="icons" onClick={() => window.open('https://twitter.com/CedricMuuo')} />
        </ul>    
         </p>
     </div> 
    </div> 
    )
}


export default Contact;