import * as React from "react";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SocialSideBar from "../components/SocialSideBar";

import bubblesLeft3 from "../imgs/bubbles-left-2.svg";
import manyBubbles from "../imgs/many-bubbles-right.svg";
import bubblesLeft2 from "../imgs/bubbles-left-3.svg";
import bubblesRight from "../imgs/bubbles-right.svg";
import bigBubbles from "../imgs/big-bubbles-rb.svg";

export default function SignUp() {
  return (
    <>
      <NavBar />
      <div className="page-starter-container">
        <div>
          <gradient-large>Register</gradient-large>
        </div>
        <SocialSideBar className="icons" />
        
        <img src={bubblesRight} alt="Aritzia" className="bubbles-right"></img>
        <img src={bubblesLeft3} alt="Aritzia" className="bubbles-left lower500"></img>
        <img src={manyBubbles} alt="Aritzia" className="bubbles-right lower1000"></img>
        <img src={bubblesLeft2} alt="Aritzia" className="bubbles-left lower1500"></img>
        <img src={bubblesRight} alt="Aritzia" className="bubbles-right lower2500"></img>
      </div>
      <div className="registerPageBody">
        <iframe
          title="qualtrics"
          src="https://ubc.ca1.qualtrics.com/jfe/form/SV_bO6taMrJnPF81kG"
          width="800px"
          height= "3000"
          frameBorder="0"
        ></iframe>
      </div>
      <Footer />
    </>
  );
}
