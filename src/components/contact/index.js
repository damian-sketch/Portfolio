import React from 'react';
import './styles.css';
function Contact(){
    
    const Redirect = () => {
        window.open('mailto:cedricdamian19@gmail.com')
         }
    return(

    <div className="contact">
        <div data-aos="fade-down-left" className="contact-text">
          <h1>Get In Touch</h1>
          <p>I am open to any Frontend Engineering roles that will pose an exciting challenge to me and my career.</p>
          <button onClick={Redirect}>Send Mail</button>
        </div>
    </div>
    )

} 

export default Contact