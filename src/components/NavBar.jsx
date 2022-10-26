import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import { Link } from "react-router-dom";

import '../App.css';

export default function NavBar() {
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="nav-bar">
        <Toolbar>
            <Link to="/about" className="nav-link">
            About
            </Link>
            <Link to="/sign-up" className="nav-link">
              Sign Up
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  );
}


