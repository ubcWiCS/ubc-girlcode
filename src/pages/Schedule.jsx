import * as React from "react";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SocialSideBar from "../components/SocialSideBar";
import Typography from "../components/Typography";
import Accordion from "../components/Accordion";

import "./schedule.css";

export default function Schedule() {
  return (
    <>
      <NavBar />
      <div className="page-starter-container">
        <div>
          <gradient-medium>Schedule</gradient-medium>
        </div>
        <SocialSideBar className="icons" />
      </div>
      <div className="schedule-container">
        <div className="schedule-title-left">
          <Typography color="black" inline="inline" weight="bold" variant="h2">
            Friday
          </Typography>
        </div>
        <div className="schedule-grid-left">
          <div className="schedule-bar-left"></div>
          <div className="schedule-contents">
            <Typography
              color="purple"
              inline="inline"
              weight="bold"
              variant="h6">
              2pm &nbsp;
            </Typography>
            <Typography
              color="white"
              inline="inline"
              weight="bold"
              variant="h6">
              Doors open
            </Typography>
            <br />
            <Typography
              color="purple"
              inline="inline"
              weight="bold"
              variant="h6">
              3pm &nbsp;
            </Typography>
            <Typography
              color="white"
              inline="inline"
              weight="bold"
              variant="h6">
              Hacking begins
            </Typography>
            <br />
            <div className="new-acc">
            <Typography
              color="purple"
              inline="inline"
              weight="bold"
              variant="h6">
              4pm &nbsp;
            </Typography>
            <Accordion title="test" content="testing content is awesome" />
            </div>
          </div>
        </div>
        </div>
        <div className="schedule-container-right">
        <div className="schedule-title-right">
          <Typography color="black" inline="inline" weight="bold" variant="h2">
            Saturday
          </Typography>
        </div>
        <div className="schedule-grid-right">
          <div className="schedule-contents">
            <Typography
              color="white"
              inline="inline"
              weight="bold"
              variant="h6">
              Doors open &nbsp;
            </Typography>
            <Typography
              color="blue"
              inline="inline"
              weight="bold"
              variant="h6">
              2pm 
            </Typography>
            <br />
            <Typography
              color="white"
              inline="inline"
              weight="bold"
              variant="h6">
              Hacking begins &nbsp;
            </Typography>
            <Typography
              color="blue"
              inline="inline"
              weight="bold"
              variant="h6">
              3pm 
            </Typography>
            <br />
            <div className="new-acc">
            <Accordion title="test" content="testing content is awesome" />
            <Typography
              color="blue"
              inline="inline"
              weight="bold"
              variant="h6">
              4pm &nbsp;
            </Typography>
            </div>
          </div>
          <div className="schedule-bar-right"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}
