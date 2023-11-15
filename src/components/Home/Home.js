import React from "react";
import { Element } from "react-scroll";
import "./Home.css";
import programmerImage from "../../asset/programmer.png"
import MailIcon from "@material-ui/icons/Mail";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TouchAppIcon from "@material-ui/icons/TouchApp";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CallIcon from "@material-ui/icons/Call";
import Type from "./Type";
import { Link } from "react-scroll";

function Home() {
    return (
      <Element name="home">
        <div className="container-fluid home">
          <div className="row ">
            <div className=" col-sm-12 col-md-6 col-lg-6 home-left-container ">
              <div>
                <h1>
                  <span className="hi"> Hi!...</span>
                </h1>
                <h1>
                  I'm <span className="hi">Nandhini</span>
                </h1>
                <h3 className="type" style={{ color: "red", minWidth: "350px" }}>
                  <Type />
                </h3>
                <div className="home-icon">
                  <span
                   
                    onClick={() =>
                      window.open("https://github.com/Nandhinimuthupandi", "_blank")
                    }
                  >
                    <GitHubIcon fontSize="medium" />
                  </span>
                  <span
                    
                    onClick={() =>
                      window.open("https://www.linkedin.com/in/nandhini-m-070610260/", "_blank" )
                    }
                  >
                    <LinkedInIcon fontSize="medium" />
                  </span>
                  <span
                 
                    onClick={() =>
                      window.open("mailto:nandhinivijaya03@gmail.com", "_blank")
                    }
                  >
                    <MailIcon fontSize="medium" />
                  </span>
                  <span
                    
                    onClick={() => window.open("tel://+919940963271", "_blank")}
                  >
                    
                    <CallIcon fontSize="small" />
                  </span>
                </div>
                <Link
                    to="Contact"
                    spy={true}
                    smooth={true}
                    offset={350}
                    duration={250}
                  >
                <button type="button" className="home-button">
                
                    Hire Me <TouchAppIcon />
                
                </button>
                </Link>
                <Link
                    to="Project"
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={250}
                  >
                <button type="button" className="home-button ms-3">
                 
                    Project <EventNoteIcon />
                </button>
                </Link>
              </div>
            </div>
            <div className=" col-sm-12 col-md-6 col-lg-6 home-right-container">
              <img src={programmerImage} alt="heroimage2" />
            </div>
          </div>
        </div>
      </Element>
    );
  }
  
  export default Home;