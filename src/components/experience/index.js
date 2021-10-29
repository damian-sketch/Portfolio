import React from 'react';
import './styles.css';


function Experience(){
    return (
      
     <div className="experience">
        <div data-aos="zoom-in" className="exp-text">
        <h1>WHERE I'VE WORKED</h1>
            <h4><a href="https://moringaschool.com/">Moringa School</a> (October 2019 - August 2020)</h4>
            <ul className="expList">
            <li>Managed a team of 5 Software Engineers in designing and deploying a nutrition evaluation application using HTML, CSS, and JavaScript</li><br></br><br></br>
                <li>Achieved 15% to 20% spike in traffic by working closely with my teammates on SEO initiatives.</li><br></br><br></br>
                <li>Implemented websites, and landing pages from concept through deployment using React.</li><br></br><br></br>
                <li>Optimized UI Performance and load times by up to 80% through testing with Selenium.</li>
            </ul>
            <h4><a href="https://trilogy.com/">Trilogy</a> (September 2020 - PRESENT)</h4>
            <ul className="exp-list">
                <li>I manually executed functional testing of over 100 test scenarios beating team averages by 20% against work completion deadlines.</li><br></br><br></br>
                <li>Automated 200+ End-to-End, API, and Mobile tests using the internal Gherkin/behave engine</li><br></br><br></br>
                <li>Reduced false-positive defect rate from 32% to less than 5%</li>
            </ul>
        </div>
     </div>
    )
}


export default Experience;