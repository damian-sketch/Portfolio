import React from 'react';
import './styles.css';
import nutri from '../../images/nutri.png';
import akan from '../../images/akan.png';
import easy from '../../images/easy.png';

function Projects(){
    return (
      
    <div className="projects">
        <div data-aos="zoom-out" className="indivProject">
            <div data-aos="zoom-out" className="project-text">
                <h4>PROJECTS</h4>
                <p>
                    <h3><a href="https://damian-sketch.github.io/NutriCrew/">NUTRIAPP</a></h3>
                    This is an application that acts more like a remote doctor. By inputing some personal data such as Weight, Height and Physical activity, the user reveives ther caloric intake recommendation and is able to evaluate their health status.
                </p>
                <ul className="tech">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                </ul>
            </div>
           <div className="projImage"><img src={nutri} alt=""></img></div>
        </div>

        <div data-aos="zoom-out" className="indivProject">
            <div data-aos="zoom-out" className="project-text">
                <p>
                    <h3><a href="https://damian-sketch.github.io/NutriCrew/">AKAN NAMES</a></h3>
                    Akan names are derived from Ghanian culture. Frequently in Ghana, children are given their first name as a 'day name' which corresponds to the day in the week they were born. This application will help you identify an Akan name based on the time you were born.
                </p>    
                <ul className="tech">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                </ul>
            </div>
           <div className="projImage"><img src={akan} alt=""></img></div>
        </div>

        <div data-aos="zoom-out" className="indivProject">
            <div data-aos="zoom-out" className="project-text">
                <p>
                    <h3><a href="https://damian-sketch.github.io/NutriCrew/">MADE-EASY INSURANCE</a></h3>
                    A portfolio website for an insurance agency based in Nairobi.
                </p>
                <ul className="tech">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                </ul>
            </div>
           <div className="projImage"><img src={easy} alt=""></img></div>
        </div>
    </div>
    )
}


export default Projects;