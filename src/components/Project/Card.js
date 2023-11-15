import React, { useState } from "react";
import "./Project.css";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import ModalView from "./ModalView";

function Card({ data }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
      <>
        <div className="col-sm-12 col-md-6 col-lg-3 project-card p-0 ">
          <img src={data.img} alt="aa" />
          <div>
            <h5>{data.title}</h5>
            <p>{data.shortNote}</p>
          </div>
          <div className="buttons">
            <button onClick={() => window.open(`${data.sourceCode}`, "_blank")}>
              <OpenInNewIcon fontSize="medium" /> Live Site
            </button>
            <button type="button" onClick={handleOpen}>
              <LibraryBooksIcon /> More
            </button>
          </div>
        </div>
        <ModalView
          open={open}
          handleClose={handleClose}
          handleOpen={handleOpen}
          data={data}
        />
      </>
    );
  }
  
  export default Card;