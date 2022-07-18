import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";

export const Landing = () => {
  const Redirect = () => {
    window.open("https://cedric21.medium.com/");
  };

  return (
    <>
      <div className="intro">
        <div id="intro-text">
          <h3>Cedric Muuo</h3>
          <h2>I build things for the web</h2>

          <p>
            I am a professional Software and Quality Assurance Engineer,
            Open-source contributor, and Author with 2 years of experience in
            building and testing web applications.
          </p>

          <button onClick={Redirect}>Check out my Blog !</button>
        </div>
      </div>
      <div class="contactSect">
        <ul className="contactIcons">
          <li>
            <FontAwesomeIcon
              icon={faGithub}
              className="icons"
              onClick={() =>
                window.open("https://github.com/damian-sketch?tab=repositories")
              }
            />
          </li>
          <br></br>{" "}
          <li>
            <FontAwesomeIcon
              icon={faLinkedin}
              className="icons"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/cedric-muuo-7625861aa/"
                )
              }
            />
          </li>
          <br></br>{" "}
          <li>
            <FontAwesomeIcon
              icon={faTwitter}
              className="icons"
              onClick={() => window.open("https://twitter.com/CedricMuuo")}
            />
          </li>
        </ul>
      </div>
    </>
  );
};
