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
              - Delivered releases with reduced defects by 80% in 6 months by
              regularly performing smoke and regression testing.
            </li>
            <br></br>
            <br></br>
            <li>
              - Implemented quality control standards by developing a JIRA
              workflow to ensure consistent approach and results in our QA team.
            </li>
            <br></br>
            <br></br>
            <li>
              - Developed 50+ test scenarios for a learning management system
              using Python and Cucumber framework to cover all end to end
              scenarios which put test coverage of the application at 85%.
            </li>
          </ul>
          <h4>
            <a href="https://qatestlab.com/">QATestlab</a> (October 2021 -
            January 2022)
          </h4>
          <ul className="exp-list">
            <li>
              - Developed a Selenium based automation framework using TypeScript
              to cover high-level functionalities of a web3 wallet extension.
            </li>
            <br></br>
            <br></br>
            <li>
              - Performed manual and automated testing of API endpoints for a
              food delivery application using GraphQL queries which helped
              optimize response speeds.
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
              - Automated end-to-end test cases to cover the high-level
              functionalities for our core fintech platform, increasing our test
              coverage by 30%
            </li>
            <br></br>
            <br></br>
            <li>
              - Converted the framework to use Cucumber’s BDD technique by
              implementing the cucumber pre-processor therefore making test
              cases coherent to non-development members of the company.
            </li>
            <br></br>
            <br></br>
            <li>
              - Maintained the CI/CD test pipeline continuously using Gitlab and
              Cypress dashboard to identify and fix flaky tests. This has
              enabled us to achieve 100% success rate on our test pipeline.
            </li>
            <br></br>
            <br></br>
            <li>
              - Executed manual testing on our core fintech platforms to ensure
              releases are deployed without a hitch(smoke, API, sanity,
              regression testing)
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
              <a href="https://github.com/Christmas-4-Kids/c4k/pull/59/">
                {" "}
                Christmas 4 Kids{" "}
              </a>
              organization repo.
            </li>
            <br></br>
            <br></br>
            <li>
              - I updated the UI/UX to be accessible to all users utilizing a11y
              standards using React Native
            </li>
            <br></br>
            <br></br>
            <li>
              - I updated the colors and the overall look and feel using CSS
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
