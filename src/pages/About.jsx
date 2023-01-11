import * as React from "react";
import { Link } from "react-router-dom";

import {
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaLinkedin,
  FaDiscord,
} from "react-icons/fa";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SocialSideBar from "../components/SocialSideBar";
import Typography from "../components/Typography";
import TeamCard from "../components/TeamCard";

import aritzia from "../imgs/aritzia.svg";
import bubblesLeft from "../imgs/bubbles-left.svg";
import jwong from "../imgs/jwong.png";
import wics from "../imgs/wics.svg";
import wids from "../imgs/wids.svg";
import valuesText from "../imgs/values-text.svg";

import manyBubbles from "../imgs/many-bubbles-right.svg";
import bubblesLeft2 from "../imgs/bubbles-left-3.svg";
import bubblesRight from "../imgs/bubbles-right.svg";

import angie from "../imgs/team/angie.jpg";
import carina from "../imgs/team/carina.JPG";
import chloe from "../imgs/team/chloe.png";
import clara from "../imgs/team/clara.jpg";
import crystal from "../imgs/team/crystal.jpg";
import emiko from "../imgs/team/emiko@4x.png";
import hannah from "../imgs/team/hannah.png";
import imogene from "../imgs/team/imogene.jpg";
import ireena from "../imgs/team/ireena.jpeg";
import irisC from "../imgs/team/irisC.png";
import irisX from "../imgs/team/irisX.png";
import jasvir from "../imgs/team/jasvir.jpeg";
import karan from "../imgs/team/karan.jpg";
import lena from "../imgs/team/lena.jpeg";
import linh from "../imgs/team/linh.png";
import moira from "../imgs/team/moira@4x.png";
import natacha from "../imgs/team/natacha.jpeg";
import sandra from "../imgs/team/sandra.jpg";
import sarah from "../imgs/team/sarah.png";
import steph from "../imgs/team/steph.jpg";
import tara from "../imgs/team/tara@4x.png";
import yeojun from "../imgs/team/yeojun.jpeg";



import "./about.css";

export default function About() {
  return (
    <>
      <NavBar />
      <div className="page-starter-container">
        <img
          src={manyBubbles}
          alt="Aritzia"
          className="starter-bubbles-right"
        ></img>
        <gradient-large>About girlCode</gradient-large>
        <SocialSideBar className="icons" />
      </div>
      <div className="inner-text">
        <div className="about-responsive page-container ">
          <gradient-medium>What&nbsp; &nbsp; &nbsp;</gradient-medium>
          <Typography color="white" inline="inline" weight="bold" variant="h3">
            24-hour &nbsp;
          </Typography>
          <Typography color="tan" inline="inline" weight="bold" variant="h3">
            in-person &nbsp;
          </Typography>
          <Typography color="white" inline="inline" weight="bold" variant="h3">
            hackathon &nbsp;
          </Typography>
          <br />
          <gradient-medium>Where &nbsp;</gradient-medium>
          <Typography color="white" inline="inline" weight="bold" variant="h3">
            hosted at &nbsp;
          </Typography>
          <Typography color="tan" inline="inline" weight="bold" variant="h3">
            Abdul Ladha Science Student Centre&nbsp;
          </Typography>
          <Typography color="white" inline="inline" weight="bold" variant="h3">
            UBC &nbsp;
          </Typography>
          <br />
          <gradient-medium>When &nbsp; &nbsp;</gradient-medium>
          <Typography color="white" inline="inline" weight="bold" variant="h3">
            from &nbsp;
          </Typography>
          <Typography color="tan" inline="inline" weight="bold" variant="h3">
            January 13th-14th, &nbsp;
          </Typography>
          <Typography color="white" inline="inline" weight="bold" variant="h3">
            2023 &nbsp;
          </Typography>
        </div>
      </div>

      <div className="centered-container">
        <gradient-large>Learn, Build, Connect</gradient-large>
        <br />
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
              experiences, and gain exclusive advice on how to navigate your own
              journey.
            </Typography>
          </div>
          <div className="glass-small grid-child">
            <Typography color="tan" weight="bold" variant="h1">
              Building
            </Typography>
            <Typography color="white">
              Foster old and build new relationships alongside your meaningful
              projects, and present to a panel of judges for prizes!
            </Typography>
          </div>
        </div>
      </div>
      <div className="page-container-bubbles-left text-right grid-container">
        <div className="bubbles-grid-child">
          <img
            src={bubblesLeft}
            alt="Aritzia"
            className="bubbles-left-partnership"
          ></img>
        </div>
        <div className="partnership-text">
          <div>
            <Typography
              color="white"
              inline="inline"
              weight="bold"
              variant="h2"
            >
              In &nbsp;
            </Typography>
            <Typography color="tan" inline="inline" weight="bold" variant="h2">
              full partnership &nbsp;
            </Typography>
            <Typography
              color="white"
              inline="inline"
              weight="bold"
              variant="h2"
            >
              with
            </Typography>
            <br />
            <img
              src={aritzia}
              alt="Aritzia"
              className="about-aritzia-logo"
            ></img>
             <br />
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
          Aritzia's &nbsp;
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
        <br />
        <Typography color="white" inline="inline" variant="h4">
          Aritzia supports our &nbsp;
        </Typography>
        <Typography color="tan" inline="inline" variant="h4">
          community.
        </Typography>
        <div className="inner-text">
          <Typography color="white" variant="h6">
            Aritzia Community is committed to supporting organizations that help
            women and girls succeed at work and in life and mental wellbeing. We
            do so through three pillars of impact: poverty alleviation,
            mentorship and job readiness. To date, we’ve contributed more than
            $40 million in product donations, financial support and volunteer
            hours to non-profits and Aritzia Community partners that share our
            values. This has positively impacted more than 445,000 women. &nbsp;
          </Typography>
        </div>
        <br />
        <br />
        <br />
        <Typography color="white" inline="inline" variant="h4">
          Aritzia represents the &nbsp;
        </Typography>
        <Typography color="tan" inline="inline" variant="h4">
          diversity &nbsp;
        </Typography>
        <Typography color="white" inline="inline" variant="h4">
          we stand for.
        </Typography>
        <div className="grid-container inner-text">
          <div className="clubs-grid">
            <img src={jwong} alt="ubc girlcode" className="ceo-img"></img>
          </div>
          <div className="clubs-grid">
            <Typography color="white" variant="h6">
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
      <img src={bubblesRight} alt="Aritzia" className="bubbles-right"></img>
      <div className="centered-child">
        <div className="glass-med">
          <gradient-small>Mission Statement</gradient-small>
          <br />
          <br />
          <Typography color="white" inline="inline" variant="h6">
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
      <img src={bubblesLeft2} alt="Aritzia" className="bubbles-left"></img>
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
        <Typography color="white" inline="inline" weight="bold" variant="h4">
          And a prize for &nbsp;
        </Typography>
        <Typography color="tan" inline="inline" weight="bold" variant="h4">
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
              <a href="https://www.instagram.com/widsubc/">
                <FaInstagram size={25} className="social-link" />
              </a>
              <a href="https://www.facebook.com/widsubc/">
                <FaFacebook size={25} className="social-link" />
              </a>
              <a href="https://www.linkedin.com/company/widsubc/">
                <FaLinkedin size={25} className="social-link" />
              </a>
              <a href="https://discord.com/invite/4jY6tjySxn">
                <FaDiscord size={25} className="social-link" />
              </a>
            </div>
          </div>
          <div className="clubs-grid clubs-grid-responsive">
            <img src={wids} alt="wids" className="club-logo"></img>
          </div>
        </div>
        <div className="clubs-grid-container inner-text">
          <div className="clubs-grid text-right clubs-grid-responsive">
            <img src={wics} alt="wics" className="club-logo"></img>
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
            <div className="clubs-socials align-right">
              <a href="https://www.instagram.com/ubcwics/">
                <FaInstagram size={25} className="social-link" />
              </a>
              <a href="https://www.tiktok.com/@ubcwics">
                <FaTiktok size={25} className="social-link" />
              </a>
              <a href="https://www.facebook.com/ubcwics">
                <FaFacebook size={25} className="social-link" />
              </a>
              <a href="https://www.linkedin.com/company/ubcwics/">
                <FaLinkedin size={25} className="social-link" />
              </a>
              <a href="https://discord.com/invite/z3P5c5VPm4">
                <FaDiscord size={25} className="social-link" />
              </a>
            </div>
          </div>
        </div>
        <div className="title inner-text">
          <Typography color="white" weight="italic" variant="h6">
            *We understand that women may not reflect the identity of all
            people, and we welcome anyone to our club who is comfortable
            participating in an environment that celebrates the experiences of
            women.
          </Typography>
        </div>
        
        <div className="centered-team">
        <gradient-large>Our Team</gradient-large>
          <div className = "team-grid-container">
            <TeamCard name = "Hannah Martin" imageUrl = {hannah}
            position = "Co-Founder" linkedin = "https://www.linkedin.com/in/hannah-martin11"/>

            <TeamCard name = "Sandra Radic" imageUrl = {sandra}
            position = "Co-Founder" linkedin = "https://www.linkedin.com/in/sandraradic/"/>

            <TeamCard name = "Yeojun Han" imageUrl = {yeojun}
            position = "Finance" linkedin = ""/>

            <TeamCard name = "Moira Renata" imageUrl = {moira}
            position = "Finance" linkedin = ""/>

            <TeamCard name = "Sarah Wong" imageUrl = {sarah}
            position = "Merch" linkedin = "https://www.linkedin.com/in/sarah-ashley-wong/"/>

            <TeamCard name = "Carina Tze" imageUrl = {carina}
            position = "Swag" linkedin = ""/>

            <TeamCard name = "Chloe Curry" imageUrl = {chloe}
            position = "Swag" linkedin = ""/>

            <TeamCard name = "Imo McDonald" imageUrl = {imogene}
            position = "Webmaster" linkedin = "https://www.linkedin.com/in/imogene-mcdonald/"/>

            <TeamCard name = "Lena Wang" imageUrl = {lena} 
            position = "Webmaster" linkedin = "https://www.linkedin.com/in/lenawang/"/>

            <TeamCard name = "Jasvir Sandhu" imageUrl = {jasvir}
            position = "Selection Committee" linkedin = ""/>

            <TeamCard name = "Iris Xu" imageUrl = {irisX}
            position = "Selection Committee" linkedin = ""/>

            <TeamCard name = "Tara Ubovic" imageUrl = {tara}
            position = "Admin" linkedin = "www.linkedin.com/in/tara-ubovic"/>

            <TeamCard name = "Natacha Bailly" imageUrl = {natacha}
            position = "Events" linkedin = "https://www.linkedin.com/in/natacha-bailly-128202239/"/>

            <TeamCard name = "Karan Chick" imageUrl = {karan}
            position = "Events" linkedin = "www.linkedin.com/in/karan-chick"/>

            <TeamCard name = "Crystal Zhao" imageUrl = {crystal}
            position = "Events" linkedin = "https://www.linkedin.com/in/crystalzhao1125/"/>

            <TeamCard name = "Stephanie Liu" imageUrl = {steph}
            position = "Outreach" linkedin = ""/>

            <TeamCard name = "Angie Wu Guo" imageUrl = {angie}
            position = "Marketing Lead" linkedin = "https://www.linkedin.com/in/angiewg1011/"/>

            <TeamCard name = "Emiko Araki" imageUrl = {emiko}
            position = "Social Media" linkedin = ""/>

            <TeamCard name = "Ireena Baro" imageUrl = {ireena}
            position = "Designer" linkedin = ""/>

            <TeamCard name = "Iris Caglayan" imageUrl = {irisC}
            position = "TikTok" linkedin = ""/>

            <TeamCard name = "Linh Trinh" imageUrl = {linh} 
            position = "Marketing" linkedin = ""/>

            <TeamCard name = "Clara Park" imageUrl = {clara}
            position = "External Executive"/>
            
          </div>
        </div>
        <div className="centered-child">
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
