import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import DescriptionIcon from "@material-ui/icons/Description";


function Navbar({open,setOpen}) {
    const handleClick = () => setOpen(!open);
    const closeMenu = () => setOpen(false);
    return (
      <nav>
        <div className="nav_left">
          <h3>
            <span className="hi">Nandhini</span><span> M</span>
          </h3>
        </div>
        <div className="nav_right" id={open ? null : "hide"}>
          <div className="menu_icon" onClick={handleClick}>
            <span> <CloseIcon className="nav-menu" /></span>
          </div>
          <h6>
            <Link
              to="home"
              activeclassname="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={250}
              onClick={closeMenu}
            >
              <HomeIcon className="nav-icon" /> Home
            </Link>
          </h6>
          <h6>
            <Link
              to="about"
              activeclassname="active"
              spy={true}
              smooth={true}
              offset={-90}
              duration={250}
              onClick={closeMenu}
            >
              <InfoIcon className="nav-icon" /> About
            </Link>
          </h6>
          <h6>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-90}
              duration={250}
              onClick={closeMenu}
            >
              <EmojiObjectsIcon className="nav-icon" /> Skills
            </Link>
          </h6>
          <h6>
            <Link
              to="project"
              spy={true}
              smooth={true}
              offset={-90}
              duration={250}
              onClick={closeMenu}
            >
              <FormatListNumberedIcon className="nav-icon" /> Project
            </Link>
          </h6>
          <h6>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-90}
              duration={250}
              onClick={closeMenu}
            >
              <MailIcon className="nav-icon" /> Contact
            </Link>
          </h6>
          <h6>
            <a
              className="resume"
              to="contact"
              href="https://drive.google.com/file/d/1iG1oKpyXtFDSjnLvCcswtNXUsn9Gwf1-/view?usp=drivesdk"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              <DescriptionIcon className="nav-icon" /> Resume
            </a>
          </h6>
        </div>
        <div className="menu_icon2 " onClick={handleClick}>
          <span> <MenuIcon className="nav-menu" /></span>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  