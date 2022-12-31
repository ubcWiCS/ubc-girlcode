import React, { useState } from "react";

import Typography from "../components/Typography";

import "./accordion.css";

export default function Accordion(props) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    open === true ? setOpen(false) : setOpen(true);
  };

  return (
    <>
      <div className="accordion">
        <div className="accordion-item">
          <div className="accordion-title">
              <Typography
                color="white"
                inline="inline"
                weight="bold"
                variant="h6"
              >
                {props.title}
              </Typography>    
            {open ? (
              <button className="acc-btn" onClick={handleClick}>
                -
              </button>
            ) : (
              <button className="acc-btn" onClick={handleClick}>
                +
              </button>
            )}
          </div>
          {open ? (
            <div className="accordion-content">
              <Typography color="white" inline="inline" variant="h6">
                {props.content}
              </Typography>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
