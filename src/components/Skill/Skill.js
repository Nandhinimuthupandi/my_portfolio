import React from "react";
import { Element } from "react-scroll";
import SkillItem from "./SkillItem";
import "./Skill.css";
import jwtImg from "../../asset/jwt.png"
import netlifyImg from "../../asset/netlify.png"

function Skills() {
    const skills = [
      {
        name: "React",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        color: "",
      },
      {
        name: "NodeJS",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        color: "",
      },
  
      {
        name: "Express",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        color: "",
      },
  
      {
        name: "Redux",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        color: "",
      },
      {
        name: "Redux-toolkit",
        link: "https://redux.js.org/img/redux.svg",
        color: "",
      },
      {
        name: "AWS",
        link: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1280px-Amazon_Web_Services_Logo.svg.png ",
        color: "",
      },
      {
        name: "Bootstrap",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        color: "",
      },
      {
        name: "Material UI",
        link: "https://material-ui.com/static/logo.png",
        color: "",
      },
      {
        name: "Chart JS",
        link: "https://www.chartjs.org/img/chartjs-logo.svg",
        color: "",
      },
      {
        name: "JWT",
        link:jwtImg,
        color: "",
      }   
   
    ];
    const tools = [
      {
        name: "Postman",
        link: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
        color: "",
      },
      {
        name: "VsCode",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        color: "",
      },
      {
        name: "Heroku",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg",
        color: "",
      },
      {
        name: "GitHub",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg",
        color: "",
      },
      {
        name: "Netlify",
        link: netlifyImg,
        color: "",
      }
    ];
  
    const languages = [
      {
        name: "Javascript",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        color: "",
      },
      {
        name: "HTML5",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        color: "",
      },
      {
        name: "CSS3",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        color: "",
      },
    ];
  
    const database = [
      {
        name: "MySQl",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain.svg",
        color: "",
      },
      {
        name: "Mongo DB",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg",
        color: "",
      },
    ];
    return (
        <Element name="skills">
          <div className="main">
            <h1>
              Professional <span className="skills-highlight">Skillset</span>
            </h1>
            <div className="row skill-container mx-auto">
              <h3 className="pt-3">
                <span className="skills-highlight">Languages</span>
              </h3>
              {languages.map((item, index) => {
                return (
                  <SkillItem
                    key={index}
                    name={item.name}
                    link={item.link}
                    color={item.color}
                  />
                );
              })}
            </div>
            <div className="row skill-container mx-auto">
              <h3 className="pt-3">
                <span className="skills-highlight">Frameworks & other</span>
              </h3>
              {skills.map((item, index) => {
                return (
                  <SkillItem
                    key={index}
                    name={item.name}
                    link={item.link}
                    color={item.color}
                  />
                );
              })}
            </div>
            <div className="row skill-container mx-auto">
              <h3 className="pt-3">
                <span className="skills-highlight">Databases</span>
              </h3>
              {database.map((item, index) => {
                return (
                  <SkillItem
                    key={index}
                    name={item.name}
                    link={item.link}
                    color={item.color}
                  />
                );
              })}
            </div>
            <div className="row skill-container mx-auto">
              <h3 className="pt-3">
                <span className="skills-highlight">Tools</span> I use
              </h3>
              {tools.map((item, index) => {
                return (
                  <SkillItem
                    key={index}
                    name={item.name}
                    link={item.link}
                    color={item.color}
                  />
                );
              })}
            </div>
          </div>
        </Element>
      );
}

export default Skills;