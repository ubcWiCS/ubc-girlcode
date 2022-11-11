import React from "react";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

import Typography from "../components/Typography";

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
          <Typography color="white">
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
            <a href="https://ubcwics.com/">
              <img
                src={wics}
                alt="ubc girlcode"
                className="footer-logo-club"
              ></img>
            </a>
          </span>
          <span>
            <a
              href="https://www.instagram.com/girlcode.ubc/"
              className="social-link"
            >
              <FaInstagram size={25} className="footer-logo-social" />
            </a>
            <a
              href="https://www.facebook.com/events/1625780564822041"
              className="social-link"
            >
              <FaFacebook size={25} className="footer-logo-social" />
            </a>
            <a
              href="https://www.tiktok.com/@girlcode.ubc?_t=8XCbykWu7OM&_r=1"
              className="social-link"
            >
              <FaTiktok size={25} className="footer-logo-social" />
            </a>
          </span>
          <Typography color="white">hello@girlcode.com</Typography>
        </div>
      </div>
    </>
  );
}
