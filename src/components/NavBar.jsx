import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import { Link } from "react-router-dom";

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
            <Link to="/register" className="nav-link">
              <button className="reg-button">
              Register Now
              </button>           
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
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
