import * as React from "react";
import { Link } from "react-router-dom";

import Typography from "../components/Typography";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SocialSideBar from "../components/SocialSideBar";
import girlCode from "../imgs/girlCodeText.svg";

import bubblesVary from "../imgs/big-bubbles-rb.svg";
import bubblesLeft2 from "../imgs/bubbles-left.svg";
import bubblesLeft3 from "../imgs/bubbles-left-equal.svg";
import bubblesRight2 from "../imgs/bubbles-right.svg";
import bubblesLeft4 from "../imgs/left-spaced.svg";
import glassBubble from "../imgs/glassBubble.svg";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="page-starter-container">
        <img
          src={bubblesVary}
          alt="Aritzia"
          className="home-starter-bubbles-right"
        ></img>
        <img
          src={bubblesLeft3}
          alt="Aritzia"
          className="home-starter-bubbles-left"
        ></img>
        <img src={girlCode} alt="girlcode"></img>
        <SocialSideBar className="icons" />
      </div>
      <div className="content">
        <div className="leftJustified">
          <paragraph>
            <purple>Women in Computer Science</purple> and{" "}
            <blue>Women in Data Science</blue> are proud to present UBC's first
            fashion-themed hackathon for underrepresented gender minorities.{" "}
            <br /> <br /> #GirlsGitIt
            <br />
            <br />
            <br />
            <button1>
              <a href="/about">Learn More</a>
            </button1>
          </paragraph>
        </div>
        <img src={bubblesLeft2} alt="Aritzia" className="bubbles-left"></img>
        <div className="rightJustified">
          <gradientFont>24</gradientFont>
          <br />
          <paragraph>
            hour <bold>in-person</bold> hackathon <br /> <br /> Hosted at{" "}
            <bold>UBC</bold>, from January 13th-14th 2023. <br /> Save the date
            and register today.
          </paragraph>
        </div>
        <div className="centre">
        <img src={glassBubble} alt="Aritzia" className="glassBubble"></img>
          <div className="glass">
            <paragraph>
            
              girlCode strives to <bold>ignite</bold> creativity,{" "}
              <bold>build</bold> friendships and <bold>empower</bold> the next
              generation of leaders in tech through building impactful
              solutions.{" "}
            </paragraph>
            <br />
            <br />
            <br />
            <br />
            <button1>
              <a href="/sign-up">Register Now</a>
            </button1>
          </div>
        </div>
        <img src={bubblesRight2} alt="Aritzia" className="bubbles-right"></img>
        <div className="leftJustified">
          <paragraph>
            <gradientFont>23%</gradientFont> <br />
            of Canadian workers in Science and Technology represent gender
            minorities. <br />
            <bold>YOU</bold> spark the change. Together, we can redefine the
            image of what it means to work in tech (hint: there are infinite
            possibilities).
          </paragraph>
        </div>
        <img src={bubblesLeft4} alt="Aritzia" className="bubbles-left"></img>
        <div className="centre">
        <Link as={Link} to="/contact" className="nav-link">
            {" "}
            <Typography
              color="white"
              inline="inline"
              weight="bold"
              variant="h6"
            >
              Questions? &nbsp;
            </Typography>
            <Typography
              color="blue"
              inline="inline"
              weight="bold"
              variant="h6"
            >
              Contact us.
            </Typography>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
