import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./styles.css";
import Profile from "../../images/Profile.jpeg";

const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <div className="about">
        <div data-aos="fade-up" className="aboutText">
          <h4>ABOUT ME</h4>
          <p>
            Hello! My name is Cedric and I love to build exciting and beautiful
            web applications that genuinely help people's lives and businesses.
            <br></br>
            <br></br> I have 2 years of experience working as a remote developer
            and in fast-moving companies. I am very flexible with different
            technologies and am able to learn and adapt to new environments
            quickly. <br></br>
            <br></br> My knowledge spans the following technologies:
            <ul className="skillList">
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>NodeJS</li>
              <li>Deployment (Docker, AWS, Heroku, GCP )</li>
              <li>QA(Selenium, Cypress, Jest)</li>
              <li>Express</li>
            </ul>
          </p>
        </div>

        <div className="image">
          <img alt="" src={Profile}></img>
        </div>
      </div>
    </>
  );
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
