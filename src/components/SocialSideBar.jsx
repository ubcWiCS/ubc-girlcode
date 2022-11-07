import * as React from "react";
import AppBar from "@mui/material/AppBar";

import { FaInstagram, FaFacebook, FaTiktok, FaLinkedin } from "react-icons/fa";

import "../App.css";

export default function NavBar() {
  return (
    <>
      <AppBar position="absolute" className="socialSideBar">
          <div className = "icons">
            <FaInstagram size={25} className="social vertical" />
            <FaTiktok size={25} className="social vertical" />
            <a href="https://www.facebook.com/events/1625780564822041/?acontext=%7B%22ref%22%3A%2252%22%2C%22action_history%22%3A%22[%7B%5C%22surface%5C%22%3A%5C%22share_link%5C%22%2C%5C%22mechanism%5C%22%3A%5C%22share_link%5C%22%2C%5C%22extra_data%5C%22%3A%7B%5C%22invite_link_id%5C%22%3A1080145729316975%7D%7D]%22%7D">
              <FaFacebook size={25} className="social vertical" />
            </a>
            <FaLinkedin size={25} className="social vertical" />
          </div>
      </AppBar>
    </>
  );
}
