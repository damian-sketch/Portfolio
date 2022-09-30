import React from "react";
import "./styles.css";
function Contact() {
  const Redirect = () => {
    window.open("mailto:cedricdamian19@gmail.com");
  };
  return (
    <div className="contact">
      <div data-aos="fade-down-left" className="contact-text">
        <h1>Get In Touch</h1>
        <p>
          Want to Pair Program? I'm open to open-source contributing too. Hit me
          up!
        </p>
        <button onClick={Redirect}>Send Mail</button>
      </div>
    </div>
  );
}

export default Contact;
