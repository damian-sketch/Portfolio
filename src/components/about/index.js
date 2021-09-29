import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import './styles.css';
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const About = () => {
    useEffect(() => {
      Aos.init({ duration: 2000 });
    }, [])
  
  
  return (
  <>
     
      <div className="aboutText">
        <h1>ABOUT ME</h1>
        <p>Adept Software Developer with 2 years of Professional Software engineering experience
          Front End Engineer with industry experience developing and designing systems in JavaScript and React
          Author of Software Engineering and Testing articles on <a href="https://cedric21.medium.com/">Medium</a><br></br>

          All of my projects, including this site can be found on <a href="https://github.com/damian-sketch?tab=repositories">Github</a>
        </p>
      </div> 


      <div data-aos="fade-up" className="contactText">
        <h1>CONTACT ME</h1>
        <p>I am open to any Frontend Engineering roles that will pose an exciting challenge to me and my career.</p>
          <p> Feel free to reach me at: <br/>
          <ul className="contactIcons">   
              <FontAwesomeIcon icon={faGithub} className="icons" onClick={() => window.open('https://github.com/damian-sketch?tab=repositories')}/>
              <FontAwesomeIcon icon={faLinkedin} className="icons"  onClick={() => window.open('https://www.linkedin.com/in/cedric-muuo-7625861aa/')} />
              <FontAwesomeIcon icon={faTwitter} className="icons" onClick={() => window.open('https://twitter.com/CedricMuuo')} />
          </ul>    
          </p>
      </div>
      
  </>

    
    
    )
};


export default About;