import React from 'react'
import './Footer.css'
import MailIcon from "@material-ui/icons/Mail";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import CallIcon from '@material-ui/icons/Call';

function Footer() {
    return (
      <footer className="footer">
        <div>
          <span className='footer-icon' onClick={() => window.open("https://github.com/Nandhinimuthupandi", "_blank")}> <GitHubIcon fontSize='small' /> </span>
          <span className='footer-icon' onClick={() => window.open("https://www.linkedin.com/in/nandhini-m-070610260/", "_blank")}> <LinkedInIcon fontSize='small' /></span>
          <span className='footer-icon' onClick={() => window.open("mailto:nandhinivijaya03@gmail.com", "_blank")}> <MailIcon fontSize='small' /></span>
          <span className='footer-icon' onClick={() => window.open("tel://+919940963271", "_blank")}> <CallIcon fontSize='small' /></span>
        </div>
        <div>
          <p className="m-1">Copyright &copy; 2023 All rights reserved | Nandhini</p>
        </div>
      </footer>
    )
  }
  
  export default Footer