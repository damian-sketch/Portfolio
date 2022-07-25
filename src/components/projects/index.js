import React from "react";
import "./styles.css";
import nutri from "../../images/nutri.png";
import akan from "../../images/akan.png";
import convo from "../../images/convo.png";
import hunters from "../../images/hunters.png";

function Projects() {
  return (
    <div className="projects">
      <h4>HIGHLIGHTED PROJECTS</h4>

      <div data-aos="zoom-out" className="indivProject">
        <div data-aos="zoom-out" className="project-text">
          <p>
            <h3>
              <a href="https://lucky-empanada-bcd1f2.netlify.app/login">
                HouseHunters
              </a>
            </h3>
            This is an application that is designed to help house seekers to
            connect easily with house providers in Nairobi. The application uses
            the MERN stack and is still a WIP. It is hosted on Netlify and
            Heroku and can be viewed by clicking the title link
          </p>
          <ul className="tech">
            <li>React</li>
            <li>Express</li>
            <li>NodeJS</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div className="projImage">
          <img src={hunters} alt=""></img>
        </div>
      </div>
      <div data-aos="zoom-out" className="indivProject">
        <div data-aos="zoom-out" className="project-text">
          <p>
            <h3>
              <a href="https://happy-davinci-4bd16c.netlify.app/">TEXTR</a>
            </h3>
            This is a mobile-responsive messaging app built using React and
            leverages the use of ChatEngine to provide an interactive
            communication experience. Hosted on Netlify.
          </p>
          <ul className="tech">
            <li>React</li>
            <li>Chat Engine</li>
            <li>React Testing Library</li>
          </ul>
        </div>
        <div className="projImage">
          <img src={convo} alt=""></img>
        </div>
      </div>

      <div data-aos="zoom-out" className="indivProject">
        <div data-aos="zoom-out" className="project-text">
          <p>
            <h3>
              <a href="https://damian-sketch.github.io/NutriCrew/">NUTRIAPP</a>
            </h3>
            This is an application that acts more like a remote doctor. By
            inputing some personal data such as Weight, Height and Physical
            activity, the user reveives ther caloric intake recommendation and
            is able to evaluate their health status.
          </p>
          <ul className="tech">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </div>
        <div className="projImage">
          <img src={nutri} alt=""></img>
        </div>
      </div>

      <div data-aos="zoom-out" className="indivProject">
        <div data-aos="zoom-out" className="project-text">
          <p>
            <h3>
              <a href="https://damian-sketch.github.io/Birthday/">AKAN NAMES</a>
            </h3>
            Akan names are derived from Ghanian culture. Frequently in Ghana,
            children are given their first name as a 'day name' which
            corresponds to the day in the week they were born. This application
            will help you identify an Akan name based on the time you were born.
          </p>
          <ul className="tech">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </div>
        <div className="projImage">
          <img src={akan} alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default Projects;
