import * as React from "react";

import { FaInstagram, FaFacebook, FaTiktok, FaLinkedin } from "react-icons/fa";

import "../App.css";

export default function SocialSideBar(props) {
  return (
    <>
      <div className={props.className}>
        <div className={props.className}>
          <a href="https://www.instagram.com/girlcode.ubc/">
            <FaInstagram size={25} className="social-link" />
          </a>
          <a href="https://www.tiktok.com/@girlcode.ubc?_t=8XCbykWu7OM&_r=1">
            <FaTiktok size={25} className="social-link" />
          </a>
          <a href="https://www.facebook.com/events/1625780564822041">
            <FaFacebook size={25} className="social-link" />
          </a>
          <a href="https://www.facebook.com/events/1625780564822041">
            <FaLinkedin size={25} className="social-link" />
          </a>
        </div>
      </div>
    </>
  );
}
