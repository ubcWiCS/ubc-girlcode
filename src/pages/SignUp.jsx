import * as React from "react";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SocialSideBar from "../components/SocialSideBar";
import Typography from "../components/Typography";

import bubblesRight from "../imgs/bubbles-right.svg";

export default function SignUp() {
  return (
    <>
      <NavBar />
      <div className="page-starter-container">
        <div>
          <gradient-large>Register</gradient-large>
        </div>
        <SocialSideBar className="icons" />
        <img
          src={bubblesRight}
          alt="Aritzia"
          className="bubbles-right registerRight"
        ></img>
      </div>
      <div className="centered-no-padding">
        <div className="about-responsive page-container">
          <Typography color="white" weight="bold" variant="h1">
            Registration is now closed.
          </Typography>
        </div>
      </div>
      
      <Footer />
    </>
  );
}
