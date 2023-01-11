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
      <div className="info-container">
        <Typography color="white" variant="h6">
          Below is the weekend schedule. We encourage students to choose a few
          of their top activities and workshops to attend, so you have ample
          time to work on your projects.
        </Typography>
        <Typography color="white" variant="h6">
          Meals will be provided at the event. Meals will be served for 1 hour
          unless otherwise noted on the schedule.
        </Typography>
        <Typography color="white" inline="inline" variant="h6">
          The event will be hosted at the &nbsp;
        </Typography>
        <Typography color="blue" inline="inline" weight="bold" variant="h6">
          Abdul Ladha Science Student Centre
        </Typography>
      </div>
      <div className="schedule-container">
        <div className="schedule-title-left">
          <Typography color="black" inline="inline" weight="bold" variant="h2">
            Friday
          </Typography>
        </div>
        <div className="schedule-grid-left">
          <div className="schedule-bar-left"></div>
          <div className="schedule-contents-left">
            <Typography
              color="purple"
              inline="inline"
              weight="bold"
              variant="h6"
            >
              3:00 pm &nbsp;
            </Typography>
            <Typography
              color="white"
              inline="inline"
              weight="bold"
              variant="h6"
            >
              Registration
            </Typography>
            <br />
            <div className="accordion-left">
              <Typography
                color="purple"
                inline="inline"
                weight="bold"
                variant="h6"
              >
                3:30 pm &nbsp;
              </Typography>
              <Accordion
                title="Opening ceremony"
                content="Speeches will be given by our hackathon co-leaders Hannah and Sandra, as well as Professor Cinda Heeran."
              />
            </div>
            <div className="accordion-left">
              <Typography
                color="purple"
                inline="inline"
                weight="bold"
                variant="h6"
              >
                4:00 pm &nbsp;
              </Typography>
              <Accordion
                title="Aritzia keynote speech"
                content="A speaker from our sponsor will speak about recruitment for their Summer 2023 internship program."
              />
            </div>
            <div className="accordion-left">
              <Typography
                color="purple"
                inline="inline"
                weight="bold"
                variant="h6"
              >
                4:45 pm &nbsp;
              </Typography>
              <Accordion
                title="Hackathon introduction"
                content="We will be covering the rules, themes, and schedule before beginning."
              />
            </div>
            <Typography
              color="purple"
              inline="inline"
              weight="bold"
              variant="h6"
            >
              5:15 pm &nbsp;
            </Typography>
            <Typography
              color="white"
              inline="inline"
              weight="bold"
              variant="h6"
            >
              HACKING BEGINS
            </Typography>
            <br />
            <Typography
              color="purple"
              inline="inline"
              weight="bold"
              variant="h6"
            >
              5:30 pm &nbsp;
            </Typography>
            <Typography
              color="white"
              inline="inline"
              weight="bold"
              variant="h6"
            >
              Team bonding activity
            </Typography>
            <br />
            <div className="accordion-left">
              <Typography
                color="purple"
                inline="inline"
                weight="bold"
                variant="h6"
              >
                6:00 pm &nbsp;
              </Typography>
              <Accordion
                title="Dinner"
                content="Dinner is provided thanks to Aritzia's catering service"
              />
            </div>
            <Typography
              color="purple"
              inline="inline"
              weight="bold"
              variant="h6"
            >
              7:00 pm &nbsp;
            </Typography>
            <Typography
              color="white"
              inline="inline"
              weight="bold"
              variant="h6"
            >
             Career Advice workshop
            </Typography>
            <br/>
            <Typography
              color="purple"
              inline="inline"
              weight="bold"
              variant="h6"
            >
              7:45 pm &nbsp;
            </Typography>
            <Typography
              color="white"
              inline="inline"
              weight="bold"
              variant="h6"
            >
              Resume workshop
            </Typography>
            <div className="accordion-left">
              <Typography
                color="purple"
                inline="inline"
                weight="bold"
                variant="h6"
              >
                10:00 pm &nbsp;
              </Typography>
              <Accordion
                title="Abdul Ladha Centre closed"
                content="Hackers will not be able to stay overnight, but are welcome to work remotely overnight."
              />
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
          <div className="schedule-contents-right">
            <Typography
              color="white"
              inline="inline"
              weight="bold"
              variant="h6"
            >
              Doors open &nbsp;
            </Typography>
            <Typography color="blue" inline="inline" weight="bold" variant="h6">
              7:30 am
            </Typography>
            <br />
            <Typography
              color="white"
              inline="inline"
              weight="bold"
              variant="h6"
            >
              Breakfast bar opens &nbsp;
            </Typography>
            <Typography color="blue" inline="inline" weight="bold" variant="h6">
              8:00 am
            </Typography>
            <br />
            <Typography
              color="white"
              inline="inline"
              weight="bold"
              variant="h6"
            >
              Breakfast bar closes &nbsp;
            </Typography>
            <Typography color="blue" inline="inline" weight="bold" variant="h6">
              10:00 am
            </Typography>
            <br />
            <Typography
              color="white"
              inline="inline"
              weight="bold"
              variant="h6"
            >
              Workshop &nbsp;
            </Typography>
            <Typography color="blue" inline="inline" weight="bold" variant="h6">
              10:00 am
            </Typography>
            <br />
            <Typography
              color="white"
              inline="inline"
              weight="bold"
              variant="h6"
            >
              Lunch &nbsp;
            </Typography>
            <Typography color="blue" inline="inline" weight="bold" variant="h6">
              12:00 pm
            </Typography>
            <br />
            <Typography
              color="white"
              inline="inline"
              weight="bold"
              variant="h6"
            >
              Aritzia Networking Panel starts &nbsp;
            </Typography>
            <Typography color="blue" inline="inline" weight="bold" variant="h6">
              2:00 pm
            </Typography>
            <br />
            <Typography
              color="white"
              inline="inline"
              weight="bold"
              variant="h6"
            >
              Aritzia Networking Panel ends &nbsp;
            </Typography>
            <Typography color="blue" inline="inline" weight="bold" variant="h6">
              4:00 pm
            </Typography>
            <br />
            <Typography
              color="white"
              inline="inline"
              weight="bold"
              variant="h6"
            >
              HACKING ENDS &nbsp;
            </Typography>
            <Typography color="blue" inline="inline" weight="bold" variant="h6">
              4:00 pm
            </Typography>
            <br />
            <Typography
              color="white"
              inline="inline"
              weight="bold"
              variant="h6"
            >
              Project pitch judging begins &nbsp;
            </Typography>
            <Typography color="blue" inline="inline" weight="bold" variant="h6">
              4:00 pm
            </Typography>
            <br />
            <Typography
              color="white"
              inline="inline"
              weight="bold"
              variant="h6"
            >
              Closing ceremony begins &nbsp;
            </Typography>
            <Typography color="blue" inline="inline" weight="bold" variant="h6">
              6:00 pm
            </Typography>
            <br />
            <Typography
              color="white"
              inline="inline"
              weight="bold"
              variant="h6"
            >
              Closing ceremony ends &nbsp;
            </Typography>
            <Typography color="blue" inline="inline" weight="bold" variant="h6">
              7:00 pm
            </Typography>
          </div>
          <div className="schedule-bar-right"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}
