import React from 'react';
import './styles.css';
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import {faCopyright} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer(){
    var d = new Date();
    var Year = d.getFullYear();
    return (
      
    <div className="Footer">   
     <ul>   
        <FontAwesomeIcon icon={faGithub} className="icons" onClick={() => window.open('https://github.com/damian-sketch?tab=repositories')}/>
        <FontAwesomeIcon icon={faLinkedin} className="icons"  onClick={() => window.open('https://www.linkedin.com/in/cedric-muuo-7625861aa/')} />
        <FontAwesomeIcon icon={faTwitter} className="icons" onClick={() => window.open('https://twitter.com/CedricMuuo')} />
     </ul> 
     <h3 className="copyright"><FontAwesomeIcon icon={faCopyright} />{Year}</h3>
    </div> 
    )
}


export default Footer;