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

const Redirect = () => {
   window.open('https://cedric21.medium.com/')
    }
  
  
  return (
  <>
     <div className="intro">
       <div id="intro-text">
        <h3>Cedric Muuo</h3>
        <h2>I build things for the web</h2>
        
        <p>I’m a Frontend engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m searching and open to any remote opportunities.</p>

        <button onClick={Redirect}>Check out my Blog !</button>
       </div>

      <div class="contactSect">
        <ul className="contactIcons">   
                  <li><FontAwesomeIcon icon={faGithub} className="icons" onClick={() => window.open('https://github.com/damian-sketch?tab=repositories')}/></li>
                 <br></br> <li><FontAwesomeIcon icon={faLinkedin} className="icons"  onClick={() => window.open('https://www.linkedin.com/in/cedric-muuo-7625861aa/')} /></li>
                 <br></br> <li><FontAwesomeIcon icon={faTwitter} className="icons" onClick={() => window.open('https://twitter.com/CedricMuuo')} /></li>
        </ul> 
      </div>
       
        
      </div>

      <div className="about">
        <div data-aos="fade-up" className="aboutText">
        <p>I am an adept Front End Engineer with 2 years of Professional Software engineering experience and a passion in developing and designing web applications using React.<br></br>
          Author of Software Engineering and Testing articles on <a href="https://cedric21.medium.com/" rel="noreferrer" target='_blank'>Medium</a><br></br><br></br>
        <a href='https://www.linkedin.com/in/cedric-muuo-7625861aa/' rel="noreferrer" target='_blank'>Let's make something special</a>
        </p>
        </div>
      </div> 
  </>

    
    
  )
};

// Hooks to display updated time. Scraping it for now as it's facing issues

// export const Time = () => {
   

//   const [time, setTime] = useState(moment());

//   const utcDate = time().tz('Africa/Nairobi').format('ha z');

//   useEffect(
//     () => {
//       const intervalId = setInterval(() => {
      
//         setTime(moment().format('h:mm a'));
//       }, 60000);
//       return () => {
//         clearInterval(intervalId)
//       }
//     } 
//   )

//   return(
//     <div>
//       <p>{`My local time is ${utcDate} GMT+3`} </p>
//     </div>
//   )

// }




export default About;