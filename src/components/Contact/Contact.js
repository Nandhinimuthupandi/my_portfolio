import React, { useState } from "react";
import { Element } from "react-scroll";
import "./Contact.css";
import MailIcon from "@material-ui/icons/Mail";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import SendIcon from "@material-ui/icons/Send";
import CallIcon from "@material-ui/icons/Call";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { Link } from "react-scroll";
import axios from "axios";
import balloonImag from "../../asset/balloon.png"
import footerImag from "../../asset/footer-wave-dark.png"



function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [conformMessage, setConformmessage] = useState("");
    const [loading, setLoding] = useState(false);
  
    const handleSubmit = async (e) => {
      try {
        e.preventDefault();
        setLoding(true);
        let data = {
          Name: name,
          Email: email,
          Message: message,
        };
        console.log(data);
        let val = await axios.post(
          "https://sheet.best/api/sheets/000c7e4f-3979-4a5a-82cb-3c048d9ce11d",
          data
        );
        setLoding(false);
        if (val.status === 200) {
          setConformmessage("Request Send Successfull");
          setMessage("");
          setEmail("");
          setName("");
          setTimeout(() => {
            setConformmessage("");
          }, 4000);
        } else {
          setConformmessage("Request Send Failled");
        }
      } catch (error) {}
    };
    return (
        <Element id="Contact">
          <div className="contact">
            <img
              src={footerImag}
              alt="footer-wave-dark"
              className="contact-img"
            />
            <div>
              <div className="row  contact-main">
                <div className="col-sm-12 col-md-6 contact-left-container">
                  <h1>Connect with me</h1>
                  <div>
                    <div className="contact-icon">
                      <p 
                        onClick={() =>
                          window.open("https://github.com/Nandhinimuthupandi", "_blank")
                        }
                      >
                        <GitHubIcon fontSize="medium" /> Github
                      </p>
                      <p
                        onClick={() =>
                          window.open(
                            "https://www.linkedin.com/in/nandhini-m-070610260/",
                            "_blank"
                          )
                        }
                      >
                        <LinkedInIcon fontSize="medium" /> LinkedIn
                      </p>
                      <p
                        onClick={() => window.open("tel://+919940963271", "_blank")}
                      >
                        <CallIcon fontSize="medium" /> +91 9940963271
                      </p>
                      <p className="ss"
                        onClick={() =>
                          window.open("mailto:nandhinivijaya03@gmail.com", "_blank")
                        }
                      >
                        <MailIcon fontSize="medium" /> nandhinivijaya03@gmail.com
                      </p>
                    </div>
                    <div>
                      <img
                        src={balloonImag}
                        className="balloon"
                        alt="balloon"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <h1>Say hi</h1>
                  <form onSubmit={handleSubmit} className="contact-form">
                    <input
                      type="text"
                      name="Name"
                      id="name"
                      placeholder="Name *"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      required
                    />
                    <br />
                    <input
                      type="email"
                      name="Email"
                      id="email"
                      placeholder="Email *"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      required
                    />
                    <br />
                    <textarea
                      name="Message"
                      id="message"
                      cols="30"
                      rows="5"
                      placeholder="Message *"
                      onChange={(e) => setMessage(e.target.value)}
                      value={message}
                      required
                    ></textarea>
                    <br />
                    <div>
                      <button type="submit">
                        {loading ? (
                          <img
                          //  src="./asset/load.svg"
                          //  alt=""
                            style={{
                              color: "green",
                              width: "1rem",
                              maxHeight: "26px",
                              minWidth: "64px",
                              background:"none"
                            }}
                          />
                        ) : (
                          <>
                            Send <SendIcon />
                          </>
                        )}
                      </button>
                      {conformMessage.length > 0 && conformMessage ? (
                        <span>{conformMessage}</span>
                      ) : (
                        <span className="text-danger">{conformMessage}</span>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="arrow">
            <Link to="home" spy={true} smooth={true} offset={-100} duration={250}>
              <ArrowUpwardIcon className="arrows" />
            </Link>
          </div>
        </Element>
      );

}

export default Contact;