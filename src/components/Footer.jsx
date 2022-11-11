import React from "react";
import Typography from "@mui/material/Typography";

import { FaInstagram, FaFacebook, FaLinkedin, FaTiktok } from "react-icons/fa";

import wics from "../imgs/wics.svg";
import wids from "../imgs/wids.svg";
import ubc from "../imgs/ubc.svg";
import aritzia from "../imgs/girlCodeFooter.svg";

export default function Footer() {
  return (
    <>
      <div className="footer-body">
        <div className="footer-top-container">
          <img src={aritzia} alt="ubc girlcode" className="footer-logo"></img>
          <span>
            <a
              href="https://www.facebook.com/events/1625780564822041"
              className="social-link"
            >
              <FaFacebook size={25} className="footer-logo-social" />
            </a>
            <a
              href="https://www.instagram.com/girlcode.ubc/"
              className="social-link"
            >
              <FaTiktok size={25} className="footer-logo-social" />
            </a>
            <a
              href="https://www.instagram.com/girlcode.ubc/"
              className="social-link"
            >
              <FaInstagram size={25} className="footer-logo-social" />
            </a>
          </span>
        </div>
        <div className="footer-bottom-container">
          <div className="footer-left-container">
            <Typography
              color="white"
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
                src={wics}
                alt="ubc girlcode"
                className="footer-logo-club"
              ></img>
              <img
                src={wids}
                alt="ubc girlcode"
                className="footer-logo-club"
              ></img>
            </span>
            <Typography>hello@girlcode.com</Typography>
          </div>
        </div>
      </div>
    </>
  );
}
