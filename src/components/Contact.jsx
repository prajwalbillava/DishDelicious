import React, { useRef, useState } from "react";
import "../styles/Contact.css";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_adf72g4",
        "template_mx19t8n",
        form.current,
        "gzdGmlFTMqx18jkDx"
      )
      .then(
        (result) => {
          setShowPopup(true);
          form.current.reset();
          console.log(result);
        },
        (error) => {
          console.log(error.text);
          alert("Someting went wrong ,please try later");
        }
      );
  };
  function handleHidePopup() {
    setShowPopup(false);
  }
  return (
    <>
      <section className="section">
        <div className="container1">
          <div className="contactinfo">
            <div>
              <h2>Contact Us</h2>
              <ul className="info">
                <li>
                  <span>
                    <img src="https://www.clipartmax.com/png/middle/121-1214856_pro-locator-free-location-icon-vector.png" />
                  </span>
                  <span>
                    1-4/1 , Near Circle <br />
                    Moodubidri <br />
                    Manglore
                  </span>
                </li>
                <li>
                  <span>
                    <img src="https://p7.hiclipart.com/preview/663/97/225/email-computer-icons-message-bounce-address-email-icon.jpg" />
                  </span>
                  <span>dishdelicious00@gmail.com</span>
                </li>
                <li>
                  <span>
                    <img src="https://www.pinclipart.com/picdir/middle/210-2108807_tete-mobile-svg-png-icon-free-download-phone.png" />
                  </span>
                  <span>6361759021</span>
                </li>
              </ul>
            </div>
          </div>
          <form className="contactusform" ref={form} onSubmit={sendEmail}>
            <h2>Send Us A Message</h2>
            <div className="formBox">
              <div className="inputBox w50">
                <input type="text" name="user_1name" required />
                <span>First Name</span>
              </div>
              <div className="inputBox w50">
                <input type="text" name="user_2name" required />
                <span>Last Name</span>
              </div>
              <div className="inputBox w50">
                <input type="text" name="user_email" required />
                <span>Email Address</span>
              </div>
              <div className="inputBox w100">
                <textarea name="message" required></textarea>
                <span>Please enter a message</span>
              </div>
              <div className="inputBox w50">
                <input type="submit" value="Send" />
              </div>
            </div>
          </form>
        </div>
      </section>
      {showPopup && (
        <>
          <div id="overlay" className="overlay1"></div>
          <div className="popup">
            <h2>Email Sent Successfully</h2>
            <p>Your email has been sent successfully.</p>
            <span className="close" onClick={handleHidePopup}>
              &times;
            </span>
          </div>
        </>
      )}
    </>
  );
}

export default Contact;
