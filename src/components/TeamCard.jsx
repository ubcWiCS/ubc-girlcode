import * as React from "react";
import Typography from "../components/Typography";
import {FaLinkedin} from "react-icons/fa";

import "../App.css";

export default function TeamCard(props) {
  return (
    <>
      <div className={props.className}>
        <div className="circle">
            <img src={props.imageUrl} alt = "alt"/>
            <div className = "textOverlay">
                <br/>
                <br/>
                <Typography
                color="white"
                inline="inline"
                weight="bold"
                variant="h5"
                >
                {props.name}
                </Typography>
                <Typography
                inline="inline"
                weight="bold"
                variant="h6"
                >
                {props.position}
                </Typography>
                <Typography
                color="white"
                inline="inline"
                weight="bold"
                variant="h6"
                >
                Email: {props.email}
                </Typography>
                <a href={props.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={50} className="social-link" />
                </a>
            </div>
            
        </div>
      </div>
    </>
  );
}
