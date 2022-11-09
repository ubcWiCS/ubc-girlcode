import * as React from "react";

import { FaInstagram, FaFacebook, FaTiktok, FaLinkedin } from "react-icons/fa";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SocialSideBar from "../components/SocialSideBar";
import Typography from "../components/Typography";

import aritzia from "../imgs/aritzia.svg";
import bubblesLeft from "../imgs/bubbles-left.svg";
import jwong from "../imgs/jwong.png";
import wics from "../imgs/wics.svg";
import wids from "../imgs/wids.svg";
import valuesText from "../imgs/values-text.svg";

import "./about.css";

export default function About() {
  return (
    <>
      <NavBar />
      <div className="centered-container">
        <gradient-large>About girlCode</gradient-large>
        <SocialSideBar className="icons" />
      </div>
      <div className="centered-container">
        <gradient-large>What &nbsp;</gradient-large>
        <Typography color="white" inline="inline" weight="bold" variant="h1">
          24-hour &nbsp;
        </Typography>
        <Typography color="tan" inline="inline" weight="bold" variant="h1">
          in-person &nbsp;
        </Typography>
        <Typography color="white" inline="inline" weight="bold" variant="h1">
          hackathon &nbsp;
        </Typography>
        <br />
        <gradient-large>Where &nbsp;</gradient-large>
        <Typography color="white" inline="inline" weight="bold" variant="h1">
          hosted at &nbsp;
        </Typography>
        <Typography color="tan" inline="inline" weight="bold" variant="h1">
          UBC &nbsp;
        </Typography>
        <br />
        <gradient-large>When &nbsp;</gradient-large>
        <Typography color="white" inline="inline" weight="bold" variant="h1">
          from &nbsp;
        </Typography>
        <Typography color="tan" inline="inline" weight="bold" variant="h1">
          January 13th-14th, &nbsp;
        </Typography>
        <Typography color="white" inline="inline" weight="bold" variant="h1">
          2023 &nbsp;
        </Typography>
      </div>

        <div className="centered-container">
          <gradient-large>Learn, Build, Connect</gradient-large>
          <div className="grid-container">
            <div className="glass-small grid-child">
              <Typography color="tan" weight="bold" variant="h1">
                Workshops
              </Typography>
              <Typography color="white">
                Join us for live pre-hackathon preparation sessions, as well as
                specific skill-building workshops throughout the hackathon.
              </Typography>
            </div>
            <div className="glass-small grid-child">
              <Typography color="tan" weight="bold" variant="h1">
                Networking
              </Typography>
              <Typography color="white">
                {" "}
                Network with Aritzia engineers, UBC alumni, and other gender
                minority leaders.
              </Typography>
            </div>
            <div className="glass-small grid-child">
              <Typography color="tan" weight="bold" variant="h1">
                Panels
              </Typography>
              <Typography color="white">
                Meet and learn from industry professionals about their
                experiences, and gain exclusive advice on how to navigate your
                own journey.
              </Typography>
            </div>
            <div className="glass-small grid-child">
              <Typography color="tan" weight="bold" variant="h1">
                Building
              </Typography>
              <Typography color="white">
                Foster old and build new relationships alongside your meaningul
                projects, and present to a panel of judges for prizes!
              </Typography>
            </div>
          </div>
        </div>
   
      <div className="page-container-bubbles-left text-right grid-container">
        <div className="bubbles-grid-child">
        <img src={bubblesLeft} alt="Aritzia" className="bubbles-left"></img>
        </div>
        <div className="partnership-text">
        <div>
          <Typography color="white" inline="inline" weight="bold" variant="h2">
            In &nbsp;
          </Typography>
          <Typography color="tan" inline="inline" weight="bold" variant="h2">
            full partnership &nbsp;
          </Typography>
          <Typography color="white" inline="inline" weight="bold" variant="h2">
            with &nbsp;
          </Typography>
<br />
          <img src={aritzia} alt="Aritzia" className="about-aritzia-logo"></img>
          <Typography color="white">
            Aritzia is a Canadian women's fashion brand founded in Vancouver,
            British Columbia in 1984. Aritzia sells a variety of lifestyle
            apparel through various upscale retail stores across North America
            and online.
          </Typography>
          </div>
        </div>
      </div>
      <div className="centered-container">
        <div className="title">
          <gradient-large>Why Aritzia?</gradient-large>
        </div>
        <br />
        <Typography color="white" inline="inline" variant="h4">
          Aritzia’s values &nbsp;
        </Typography>
        <Typography color="tan" inline="inline" variant="h4">
          values &nbsp;
        </Typography>
        <Typography color="white" inline="inline" variant="h4">
          align with ours.
        </Typography>
        <br />
        <img src={valuesText} alt="values" className="values-svg"></img>
        <br />
        <br />
        <Typography color="white" inline="inline" variant="h4">
          Aritzia supports our &nbsp;
        </Typography>
        <Typography color="tan" inline="inline" variant="h4">
          community.
        </Typography>
        <div className="inner-text">
          <Typography color="white" inline="inline" variant="h6">
            Aritzia Community is committed to supporting organizations that help
            women and girls succeed at work and in life and mental wellbeing. We
            do so through three pillars of impact: poverty alleviation,
            mentorship and job readiness. To date, we’ve contributed more than
            $40 million in product donations, financial support and volunteer
            hours to non-profits and Aritzia Community partners that share our
            values. This has positively impacted more than 445,000 women. &nbsp;
          </Typography>
        </div>
        <Typography color="white" inline="inline" variant="h4">
        Aritzia represents the &nbsp;
        </Typography>
        <Typography color="tan" inline="inline" variant="h4">
        diversity  &nbsp;
        </Typography>
        <Typography color="white" inline="inline" variant="h4">
         we stand for.
        </Typography>
        <div className="grid-container inner-text">
          <div className="clubs-grid">
            <img src={jwong} alt="ubc girlcode" className="ceo-img"></img>
          </div>
          <div className="clubs-grid">
            <Typography color="white" weight="bold" variant="h6">
              Aritzia aspires to cultivate spaces and experiences that celebrate
              diversity, promote equity and champion inclusion. They evaluated
              every aspect of their business to ensure diversity, equity and
              inclusion are representative of the communities where they work.
              From entry-level positions to executive-level positions, Aritzia
              will always be a place where all people, no matter their colour,
              creed, race, age or sexual orientation, can enjoy successful
              careers. Showing female representation, Aritzia high-level
              executive team is made up of over 60% of women, with entire team
              led by Chief Executive Officer, Jennifer Wong, woman of colour.
            </Typography>
          </div>
        </div>
      </div>
      <div className="centre">
        <div className="glass">
          <gradient-large>Mission Statement</gradient-large>
          <br />
          <Typography color="white" inline="inline" variant="h3">
            girlCode's partnership with Aritzia allows us to nurture diversity
            through supporting women* in computer science and data science
            fields. By providing resources and empowering our community,
            girlCode hopes to spearhead positive changes and redefine the
            traditional image associated with careers in technology. Aritzia is
            a leading example in female leadership, and pivotal in our journey
            of increasing diversity, equity and inclusion in the tech industry.
          </Typography>
        </div>
      </div>
      <div className="centered-container">
        <gradient-large>Prizes</gradient-large>
        <Typography color="white" variant="h3">
        More details coming soon!
        </Typography>
        <gradient-small>1st Place</gradient-small>
        <br />
        <gradient-small>2nd Place</gradient-small>
        <br />
        <gradient-small>3rd Place</gradient-small>
        <br />
        <Typography color="white" inline="inline" weight="bold" variant="h1">
         And a prize for &nbsp;
        </Typography>
        <Typography color="tan" inline="inline" weight="bold" variant="h1">
          best beginner hack &nbsp;
        </Typography>
      </div>
      <div className="page-container">
        <div className="clubs-grid-container clubs-inner-text">
          <div className="text-left clubs-grid">
            <Typography color="blue" weight="bold" variant="h2">
              Women in Data Science at UBC
            </Typography>
            <Typography color="white" variant="h6">
              Women in Data Science at UBC is a student-led initiative committed
              to fostering inclusive and diverse environment at UBC. They aim to
              empower, inspire, and connect women in data science, and create
              and curate a community for women in technology here, at UBC. WiDS
              at UBC is open to everyone, regardless of major, career goals and
              identity.
            </Typography>
            <div className="clubs-socials">
              <a href="https://www.instagram.com/girlcode.ubc/">
                <FaInstagram size={25} className="social-link" />
              </a>
              <a href="https://www.facebook.com/events/1625780564822041">
                <FaFacebook size={25} className="social-link" />
              </a>
              <FaLinkedin size={25} className="social-link" />
            </div>
          </div>
          <div className="clubs-grid clubs-grid-responsive">
            <img
              src={wids}
              alt="wids"
              className="club-logo"
            ></img>
          </div>
        </div>
        <div className="clubs-grid-container inner-text">
          <div className="clubs-grid text-right clubs-grid-responsive">
            <img
              src={wics}
              alt="wics"
              className="club-logo"
            ></img>
          </div>
          <div className="text-right clubs-grid">
            <Typography color="purple" weight="bold" variant="h2">
              Women in Computer Science at UBC
            </Typography>
            <Typography color="white" variant="h6">
              Women in Computer Science at UBC is a student club that aims to
              build a strong community of women* in Computer Science at UBC.
              They seek to empower women* by providing opportunities to build
              lasting connections with other women* in tech, and supporting each
              other as we progress through our time at UBC.
            </Typography>
            <div className="clubs-socials">
              <a href="https://www.instagram.com/girlcode.ubc/">
                <FaInstagram size={25} className="social-link" />
              </a>
              <a href="https://www.tiktok.com/@girlcode.ubc?_t=8XCbykWu7OM&_r=1">
                <FaTiktok size={25} className="social-link" />
              </a>
              <a href="https://www.facebook.com/events/1625780564822041">
                <FaFacebook size={25} className="social-link" />
              </a>
              <a href="https://www.facebook.com/events/1625780564822041">
              <FaLinkedin size={25} className="social-link" />
              </a> 
            </div>
          </div>
        </div>
        <div className="title">
          <Typography color="white" weight="italic" variant="h6">
            *We understand that women may not reflect the identity of all
            people, and we welcome anyone to our club who is comfortable
            participating in an environment that celebrates the experiences of
            women.
          </Typography>
        </div>
        <div className="title">
          <Typography color="white" weight="bold" variant="h6">
          Questions? Contact us.
          </Typography>
        </div>
      </div>
      <Footer />
    </>
  );
}
