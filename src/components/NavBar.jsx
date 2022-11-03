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
        <img src={logo} alt="ubc girlcode" className="navbar-logo"></img>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Link to="/about" className="social-link">
              <FaInstagram size={25} className="social" />
            </Link>
            <Link to="/about" className="social-link">
              <FaFacebook size={25} className="social" />
            </Link>
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
