import React from "react";
import Typography from "@mui/material/Typography";

import { FaInstagram, FaFacebook, FaLinkedin, FaTiktok } from "react-icons/fa";

import wics from "../imgs/wics.svg";
import wids from "../imgs/wids.svg";
import ubc from "../imgs/ubc.svg";
import aritzia from "../imgs/girlcode-aritzia.svg";

export default function Footer() {
  return (
    <>
      <div className="footer-body">
        <div className="footer-left-container">
          <img src={aritzia} alt="ubc girlcode" className="footer-logo"></img>
          <Typography
            color="textSecondary"
            component="p"
            variant="caption"
            gutterBottom={false}
          >
            Copyright © girlCode, 2022 | Code of Conduct | Privacy Policy
          </Typography>
        </div>
        <div className="footer-right-container">
          <span className="footer-clubs">
            <img
              src={ubc}
              alt="ubc girlcode"
              className="footer-logo-club"
            ></img>
            <img
              src={wids}
              alt="ubc girlcode"
              className="footer-logo-club"
            ></img>
            <img
              src={wics}
              alt="ubc girlcode"
              className="footer-logo-club"
            ></img>
          </span>
          <span>
            <a
              href="https://www.facebook.com/events/1625780564822041/?acontext=%7B%22ref%22%3A%2252%22%2C%22action_history%22%3A%22[%7B%5C%22surface%5C%22%3A%5C%22share_link%5C%22%2C%5C%22mechanism%5C%22%3A%5C%22share_link%5C%22%2C%5C%22extra_data%5C%22%3A%7B%5C%22invite_link_id%5C%22%3A1080145729316975%7D%7D]%22%7D"
              className="social-link"
            >
              <FaInstagram size={25} className="footer-logo-social" />
            </a>
            <a
              href="https://www.facebook.com/events/1625780564822041/?acontext=%7B%22ref%22%3A%2252%22%2C%22action_history%22%3A%22[%7B%5C%22surface%5C%22%3A%5C%22share_link%5C%22%2C%5C%22mechanism%5C%22%3A%5C%22share_link%5C%22%2C%5C%22extra_data%5C%22%3A%7B%5C%22invite_link_id%5C%22%3A1080145729316975%7D%7D]%22%7D"
              className="social-link"
            >
              <FaFacebook size={25} className="footer-logo-social" />
            </a>
            <a
              href="https://www.facebook.com/events/1625780564822041/?acontext=%7B%22ref%22%3A%2252%22%2C%22action_history%22%3A%22[%7B%5C%22surface%5C%22%3A%5C%22share_link%5C%22%2C%5C%22mechanism%5C%22%3A%5C%22share_link%5C%22%2C%5C%22extra_data%5C%22%3A%7B%5C%22invite_link_id%5C%22%3A1080145729316975%7D%7D]%22%7D"
              className="social-link"
            >
              <FaLinkedin size={25} className="footer-logo-social" />
            </a>
            <a
              href="https://www.facebook.com/events/1625780564822041/?acontext=%7B%22ref%22%3A%2252%22%2C%22action_history%22%3A%22[%7B%5C%22surface%5C%22%3A%5C%22share_link%5C%22%2C%5C%22mechanism%5C%22%3A%5C%22share_link%5C%22%2C%5C%22extra_data%5C%22%3A%7B%5C%22invite_link_id%5C%22%3A1080145729316975%7D%7D]%22%7D"
              className="social-link"
            >
              <FaTiktok size={25} className="footer-logo-social" />
            </a>
          </span>
          <Typography>hello@girlcode.com</Typography>
        </div>
      </div>
    </>
  );
}
