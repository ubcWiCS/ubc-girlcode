import * as React from "react";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SocialSideBar from "../components/SocialSideBar";
import Typography from "../components/Typography";

export default function CaseProblem() {
  return (
    <>
      <NavBar />
      <div className="page-starter-container">
        <div>
          <gradient-medium>Case Problem</gradient-medium>
        </div>
        <SocialSideBar className="icons" />
      </div>
      <div className="about-responsive page-container title">
        <Typography color="white" inline="inline" weight="bold" variant="h6">
          TBA
        </Typography>
      </div>
      <Footer />
    </>
  );
}
