import React from "react";
import "./styles.css";

function Experience() {
  return (
    <div className="overallExp">
      <div className="experience">
        <div data-aos="zoom-in" className="exp-text">
          <h1>WHERE I'VE WORKED</h1>

          <h4>
            <a href="https://trilogy.com/">Trilogy</a> (September 2020 - October
            2021)
          </h4>
          <ul className="exp-list">
            <li>
              - I manually executed functional testing of over 100 test
              scenarios beating team averages by 20% against work completion
              deadlines.
            </li>
            <br></br>
            <br></br>
            <li>
              - Automated 200+ End-to-End, API, and Mobile tests using the
              internal Gherkin/behave engine
            </li>
            <br></br>
            <br></br>
            <li>
              - Reduced false-positive defect rate from 32% to less than 5%
            </li>
          </ul>
          <h4>
            <a href="https://qatestlab.com/">QATestlab</a> (October 2021 -
            January 2022)
          </h4>
          <ul className="exp-list">
            <li>
              - Developed a test framework using Selenium and TypeScript for a
              web3 wallet.
            </li>
            <br></br>
            <br></br>
            <li>
              - Setup a GraphQL testing framework for a hotel delivery
              application
            </li>
            <br></br>
            <br></br>
            <li>
              - Automated 30+ test cases for a model-based testing tool using
              Cypress and JavaScript
            </li>
          </ul>

          <h4>
            <a href="https://www.tradecore.com/">TradeCore</a> (January 2022 -
            Present)
          </h4>
          <ul className="exp-list">
            <li>
              - Automated 20 test cases using TypeScript as the primary language
            </li>
            <br></br>
            <br></br>
            <li>
              - Streamlined automation capabilities that improved test life
              cycle by 80%
            </li>
            <br></br>
            <br></br>
            <li>
              - Converted more than 50 test cases from the old Cypress framework
              to a new Cucumber based framework
            </li>
            <br></br>
            <br></br>
            <li>
              - Achieved 100% success rate on tests by continuously maintaining
              the CI/CD pipeline
            </li>
          </ul>
        </div>
      </div>
      <div className="openSource">
        <div data-aos="zoom-in" className="exp-text">
          <h1>OPEN-SOURCE CONTRIBUTIONS</h1>
          <h4>
            <a href="https://christmas4kids.org/">Christmas 4 Kids</a> (November
            2021 - December 2021)
          </h4>
          <ul className="exp-list">
            <li>
              - I am an active open-source contributor to the
              <a href="https://github.com/Christmas-4-Kids/">
                {" "}
                Christmas 4 Kids{" "}
              </a>
              organization repo.
            </li>
            <br></br>
            <br></br>
            <li>
              - I updated the UI/UX to be accessible to all users utilizing a11y
              standards
            </li>
            <br></br>
            <br></br>
            <li>- I updated the colors and the overall look and feel</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
