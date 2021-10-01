import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import './styles.css';
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const About = () => {
    useEffect(() => {
      Aos.init({ 
        duration: 1000, 
      });
    }, [])
  
  
  return (
  <>
     
     <div className="intro">
       <div id="intro-text">
        <h3 style={{color : 'white'}} >Cedric Muuo</h3>
        <p>I'm a Front-end developer</p>
        <p>Scroll down to view my work</p>
       </div>
        
      </div> 

      <div className="about">
        <div data-aos="fade-up" className="aboutText">
        <p>I am an adept Front End Engineer with 2 years of Professional Software engineering experience and a passion in developing and designing web applications using React.<br></br>
          Author of Software Engineering and Testing articles on <a href="https://cedric21.medium.com/">Medium</a><br></br><br></br>
        <a href="https://github.com/damian-sketch?tab=repositories">Let's make something special</a>
        </p>
        </div>
      </div> 

      <div className="experience">
        <div data-aos="zoom-in" className="exp-text">
          <h1>MY EXPERIENCE</h1>
            <p>
            <h4>MORINGA SCHOOL, KENYA(OCT '19 - AUG '20)</h4>
                At Moringa, I implemented websites, mobile applications, and landing pages from concept through deployment. I also collaborated with product team members to implement new feature developments.
                <br></br><br></br>
            <h4>QA Engineer, Trilogy(SEP '20 - PRESENT)</h4>
            At Trilogy, I am part of the QA Automation team which focuses on automating End-to-End tests, API, Mobile and Desktop tests from over 80 products in Crossover's portfolio through Behave, Gherkin, Selenium and Cucumber.
            </p>
        </div>
     </div>

     <div className="projects">
       <div data-aos="zoom-out" className="project-text">
       <h1>PROJECTS</h1>
      <p>
          <h3><a href="https://github.com/damian-sketch/Unkultured-frontend">UNKULTURED</a></h3>
          An entertainment platform meant to promote the modern day culture by portraying the different Cultures, Fashion Trends, Music Releases and Trending Industry news.
          <h3><a href="https://damian-sketch.github.io/Birthday/">AKAN NAMES</a></h3>
          Akan names are derived from Ghanian culture. Frequently in Ghana, children are given their first name as a 'day name' which corresponds to the day in the week they were born. This application will help you identify an Akan name based on the time you were born.
          <h3><a href="https://damian-sketch.github.io/Made-easy/">MADE-EASY INSURANCE</a></h3>
          A portfolio website for an insurance agency based in Nairobi.
      </p>
       </div>
      
     </div>

      <div className="contact">
        <div data-aos="fade-down-left" className="contact-text">
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
      </div>

      
  </>

    
    
    )
};


export default About;