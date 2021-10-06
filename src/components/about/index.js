import React, { useEffect, useState} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import './styles.css';
import { format } from 'date-fns'


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
        <Time/>
        <p>Scroll down to view my work</p>
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

export const Time = () => {
   

  const [time, setTime] = useState(new Date());

  useEffect(
    () => {
      const intervalId = setInterval(() => {
      
        setTime(new Date());
      }, 60000);
      return () => {
        clearInterval(intervalId)
      }
    } 
  )

  return(
    <div>
      <p>{`My local time is ${format(time, 'HH:mm')} GMT+3`} </p>
    </div>
  )

}




export default About;