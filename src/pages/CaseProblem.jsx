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
      <div className="contact-container">
        <Typography color="purple" weight="bold" variant="h3">
          How can we use technology to personalize fashion-retail while
          enhancing the e-commerce experience?
        </Typography>
        <Typography color="white" variant="h6">
          Your job is to integrate your team's skills in data science, computer
          science, design and product management to come up with a product that
          can be used to forward the fashion-tech industry through the lens of
          Aritzia. We encourage you to spend some time researching other brands,
          latest e- commerce news and apps for inspiration, as well as Aritzia’s
          current strategies, mission, and both their online and in-store
          experiences. Think about current events in the tech world and how they
          can be integrated to define what it means to have and maintain a
          leading role in the fashion x tech world.
        </Typography>
      </div>
      <Footer />
    </>
  );
}
