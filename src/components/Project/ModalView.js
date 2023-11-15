import React, { useState, useEffect } from "react";
import ClearIcon from "@material-ui/icons/Clear";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import ReactMarkdown from "react-markdown";
import { Modal } from "@material-ui/core";


function ModalView({ handleClose, open, data }) {
    const {
      sourceCode,githubBackEnd,githubFrontEnd,img,title,longNote,skills,} = data;
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const updateDimensions = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    useEffect(() => {
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
    }, []);
    const style = {
      main: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: "red",
        backgroundColor: "#cff4fc",
        width: width > 730 ? "70%" : "95%",
        margin: "0 auto",
        borderRadius: "15px",
        height: "80%",
        overflowY: "auto",
        overflowX: "hidden",
        border: "none",
        outline: "none",
      },
      contain: {
        margin: "20px auto",
        border: "none",
      },
      para: {
        MaxHeight: "250px",
        overflow: "auto",
      },
      button: {
        padding: "5px 18px",
        border: "none",
        borderRadius: "10px",
      },
      img: {
        width: width > 520 ? "450px" : "327px",
        height: height > 520 ? "auto" : "auto",
      },
      cancel: {
        position: "fixed",
        top: "0",
        right: "0",
        padding: "6px 15px",
        color: "blue",
      },
      hover: {
        cursor: "pointer",
        fontSize: "2.7rem",
        border: "none",
      },
      paras : {
        color:"black",
      },
    };
    function MouseOver(event) {
      event.target.style.color = "red";
    }
    function MouseOut(event) {
      event.target.style.color = "blue";
    }
    return (
      <>
        {" "}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div style={style.main} className="container-fluid">
            <div>
              -
              <div
                style={style.cancel}
                onMouseOver={MouseOver}
                onMouseOut={MouseOut}
                onClick={handleClose}
              >
                <ClearIcon style={style.hover} />
              </div>
            </div>
            <h1 className="text-center"> {title}</h1>
            <div
              style={style.contain}
              className="row justify-content-sm-center align-items-center "
            >
              <div className="col-sm-auto col-md-auto col-xl-6 ">
                <div style={style.para}>
                  {longNote.length > 0 &&
                    longNote.map((para, index) => {
                      return (
                        <p key={index}  style={style.paras}>
                          <ReactMarkdown
                            components={{
                              strong: ({ node, ...props }) => (
                                <span
                                  style={{
                                    color: "#B137E3",
                                    fontSize: "16px",
                                    fontWeight: "bold",
                                  }}
                                  {...props}
                                />
                              ),
                            }}
                            children={para}
                          />
                        </p>
                      );
                    })}
                </div>
                <div className="d-flex justify-content-evenly align-items-center flex-wrap">
                  <button
                    style={style.button}
                    variant="contained"
                    className="btn btn-secondary "
                    onClick={() => window.open(`${sourceCode}`, "_blank")}
                  >
                    <span>
                      <OpenInNewIcon fontSize="medium" />
                    </span>
                     {" "}Live Site
                  </button>
                  {githubFrontEnd.length > 0 && githubFrontEnd ? (
                    <button
                      style={style.button}
                      variant="contained"
                      className="btn btn-secondary"
                      onClick={() => window.open(`${githubFrontEnd}`, "_blank")}
                    >
                      <span>
                        <GitHubIcon fontSize="medium" />
                      </span>
                       {" "}Github FE
                    </button>
                  ) : null}
                  {githubBackEnd.length > 0 && githubBackEnd ? (
                    <button
                      style={style.button}
                      variant="contained"
                      className="btn btn-secondary mt-2 mt-md-0"
                      onClick={() => window.open(`${githubBackEnd}`, "_blank")}
                    >
                      <span>
                        <GitHubIcon fontSize="medium" />
                      </span>
                       {" "}Github BE
                    </button>
                  ) : null}
                </div>
                <div className="d-flex justify-content-evenly align-items-center flex-wrap mt-3 mb-3">
                  {skills.length > 0 &&
                    skills.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className=" m-2 d-flex justify-content-between align-items-center flex-column"
                          style={{ height: "3rem" }}
                        >
                          <img
                            src={item.link}
                            alt={item.name}
                            style={{ width: "2.3rem" }}
                          />
                          <p>{item.name}</p>
                        </div>
                      );
                    })}
                </div>
              </div>
              <div className="col-sm-auto col-md-auto col-xl-auto">
                <img style={style.img} src={img} alt={title} />
              </div>
            </div>
          </div>
        </Modal>
      </>
    );
  }
  
  export default ModalView;