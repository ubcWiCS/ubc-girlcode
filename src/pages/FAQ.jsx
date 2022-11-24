import * as React from "react";
import { Link } from "react-router-dom";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SocialSideBar from "../components/SocialSideBar";
import Typography from "../components/Typography";

export default function FAQ() {
  return (
    <>
      <NavBar />
      <div className="page-starter-container">
        <div>
          <gradient-small>Frequently Asked Questions</gradient-small>
        </div>
        <SocialSideBar className="icons" />
      </div>
      <div className="about-responsive page-container title">
        <Link as={Link} to="/contact">
          {" "}
          <Typography color="white" inline="inline" weight="bold" variant="h6">
            Don't see your question below? &nbsp;
          </Typography>
          <Typography color="blue" inline="inline" weight="bold" variant="h6">
            Contact us.
          </Typography>
        </Link>

        <br />
        <br />
        <Typography color="purple" weight="bold">
          When does registration close?
        </Typography>
        <Typography color="white">November 25th at 11:59pm</Typography>
        <br />
        <Typography color="purple" weight="bold">
          When will we find out if we are accepted?
        </Typography>
        <Typography color="white">
          We hope to let participants know by mid December.
        </Typography>
        <br />
        <Typography color="purple" weight="bold">
          How does team formation work?
        </Typography>
        <Typography color="white">
          Accepted participants will be invited to the discord where they can
          meet other students and will fill out a teammate selection form
        </Typography>
        <br />
        <Typography color="purple" weight="bold">
          Will food be provided?
        </Typography>
        <Typography color="white">Yes! girlCode is fully catered</Typography>
        <br />
        <Typography color="purple" weight="bold">
          Can I apply if I am not a UBC student?
        </Typography>
        <Typography color="white">
          At this time registration is only open to UBC students due to high
          demand.
        </Typography>
        <br />
        <Typography color="purple" weight="bold">
          Will there be mentors provided to help beginners?
        </Typography>
        <Typography color="white">
          Yes! Experienced student volunteers and industry professionals will be
          onsite to help beginners from start to finish.
        </Typography>
        <br />
        <Typography color="purple" weight="bold">
          Can I apply if I am not a female?
        </Typography>
        <Typography color="white">
          We encourage all gender minorities and allies to apply.
        </Typography>
      </div>
      <Footer />
    </>
  );
}
