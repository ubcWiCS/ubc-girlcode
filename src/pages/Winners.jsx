import * as React from "react";

import Typography from "../components/Typography";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SocialSideBar from "../components/SocialSideBar";

import trophy1st from "../imgs/trophy-1stplace.svg";
import trophy2nd from "../imgs/trophy-2ndplace.svg";
import trophy3rd from "../imgs/trophy-3rdplace.svg";
import winners from "../imgs/2023winners.jpg";

export default function Winners() {
  return (
    <>
      <NavBar />
      <div className="page-starter-container">
        <gradient-large>2023 Winners</gradient-large>
        <SocialSideBar className="icons" />
      </div>
      <div className="centered-container">
        <div className="grid-container">
          <div className="grid-child">
            <img src={trophy1st} alt="1st place experienced"></img>
          </div>
          <div className="grid-child text-left">
            <Typography color="tan" inline="inline" weight="bold" variant="h4">
              1st place &nbsp;
            </Typography>
            <Typography color="white" inline="inline" variant="h4">
              experienced stream
            </Typography>
            <br />
            <Typography color="blue" inline="inline" weight="bold" variant="h4">
              Team: &nbsp;
            </Typography>
            <Typography color="white" inline="inline" variant="h4">
              Ascend
            </Typography>
            <Typography color="white">
              Anusha Ramachandran, Carolyn Huang, Jason Mazara, Jessica Wauran
            </Typography>
          </div>
          <div className="grid-child centered-no-padding">
            <img src={trophy2nd} alt="2nd place experienced"></img>
          </div>
          <div className="grid-child text-left">
            <Typography color="tan" inline="inline" weight="bold" variant="h4">
              2nd place &nbsp;
            </Typography>
            <Typography color="white" inline="inline" variant="h4">
              experienced stream
            </Typography>
            <br />
            <Typography color="blue" inline="inline" weight="bold" variant="h4">
              Team: &nbsp;
            </Typography>
            <Typography color="white" inline="inline" variant="h4">
              Ari
            </Typography>
            <Typography color="white">
              Aarushi Gupta, Annie Nilson, Gabriella Guerra, Shreya Natarajan
            </Typography>
          </div>
          <div className="grid-child centered-no-padding">
            <img src={trophy3rd} alt="3rd place experienced"></img>
          </div>
          <div className="grid-child text-left">
            <Typography color="tan" inline="inline" weight="bold" variant="h4">
              3rd place &nbsp;
            </Typography>
            <Typography color="white" inline="inline" variant="h4">
              experienced stream
            </Typography>
            <br />
            <Typography color="blue" inline="inline" weight="bold" variant="h4">
              Team: &nbsp;
            </Typography>
            <Typography color="white" inline="inline" variant="h4">
              ShopiVi
            </Typography>
            <Typography color="white">
              Hannah Meaney, Kelly Zhu, Nara Iamsakun, Noor Naila Imtinan Himam
            </Typography>
          </div>
          <div className="grid-child centered-no-padding">
          </div>
          <div className="grid-child text-left">
            <Typography color="tan" weight="bold" variant="h4">
              Best Beginner Hack
            </Typography>
            <Typography color="blue" inline="inline" weight="bold" variant="h4">
              Team: &nbsp;
            </Typography>
            <Typography color="white" inline="inline" variant="h4">
              Aritzia Accessibility
            </Typography>
            <Typography color="white">
              Fatma Nilgun Abali, Maskeen Kaur, Rachel Xia, Rui Xiang Yu
            </Typography>
          </div>
          <div className="grid-child centered-no-padding">
          </div>
          <div className="grid-child text-left">
            <Typography color="tan" weight="bold" variant="h4">
              Most Creative Hack
            </Typography>
            <Typography color="blue" inline="inline" weight="bold" variant="h4">
              Team: &nbsp;
            </Typography>
            <Typography color="white" inline="inline" variant="h4">
            Aritzia Accessibility
            </Typography>
            <Typography color="white">
            Fatma Nilgun Abali, Maskeen Kaur, Rachel Xia, Rui Xiang Yu
            </Typography>
          </div>
          <div className="grid-child centered-no-padding">
          </div>
          <div className="grid-child text-left">
            <Typography color="tan" weight="bold" variant="h4">
              Best Teammate
            </Typography>
            <Typography color="white">Zainab Osman</Typography>
          </div>
          <div className="grid-child centered-no-padding">
          </div>
          <div className="grid-child text-left">
            <Typography color="tan" weight="bold" variant="h4">
              Most Positive Energy
            </Typography>
            <Typography color="white">Giselle Whittaker</Typography>
          </div>
        </div>
        <div className="info-container">
          <Typography color="white" weight="bold" variant="h6">
            Want to see the final projects? &nbsp;
          </Typography>
          <a href="https://girlcode-x-aritzia.devpost.com/project-gallery">
            <Typography color="blue"  weight="bold" variant="h6">
              Check them out on DevPost.
            </Typography>
          </a>
        </div>
        <img src={winners} alt="team" className="centered-container"></img>  
      </div>
      <Footer />
    </>
  );
}
