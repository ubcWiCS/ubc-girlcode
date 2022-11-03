import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook } from "react-icons/fa";

import logo from "../imgs/girlcode.svg";

import "../App.css";

export default function NavBar() {
  return (
    <>
      <AppBar position="static" className="navbar">
        <Link to="/" className="nav-link">
          <img src={logo} alt="ubc girlcode" className="navbar-logo"></img>
        </Link>

        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Link to="/about" className="social-link">
              <FaInstagram size={25} className="social" />
            </Link>
            <a
              href="https://www.facebook.com/events/1625780564822041/?acontext=%7B%22ref%22%3A%2252%22%2C%22action_history%22%3A%22[%7B%5C%22surface%5C%22%3A%5C%22share_link%5C%22%2C%5C%22mechanism%5C%22%3A%5C%22share_link%5C%22%2C%5C%22extra_data%5C%22%3A%7B%5C%22invite_link_id%5C%22%3A1080145729316975%7D%7D]%22%7D"
              className="social-link"
            >
              <FaFacebook size={25} className="social" />
            </a>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
            <Link to="/sign-up" className="nav-link">
              Register
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
