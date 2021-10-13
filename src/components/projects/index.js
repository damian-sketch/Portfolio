import React from 'react';
import './styles.css';


function Projects(){
    return (
      
    <div className="projects">
        <div data-aos="zoom-out" className="project-text">
        <h1>PROJECTS</h1>
           <p>
               <h3><a href="https://damian-sketch.github.io/NutriCrew/">NUTRIAPP</a></h3>
               This is an application that acts more like a remote doctor. By inputing some personal data such as Weight, Height and Physical activity, the user reveives ther caloric intake recommendation and is able to evaluate their health status. 
               <h3><a href="https://damian-sketch.github.io/Birthday/">AKAN NAMES</a></h3>
               Akan names are derived from Ghanian culture. Frequently in Ghana, children are given their first name as a 'day name' which corresponds to the day in the week they were born. This application will help you identify an Akan name based on the time you were born.
               <h3><a href="https://damian-sketch.github.io/Made-easy/">MADE-EASY INSURANCE</a></h3>
               A portfolio website for an insurance agency based in Nairobi.
           </p>
        </div>
    </div>
    )
}


export default Projects;