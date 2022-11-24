import * as React from "react";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SocialSideBar from "../components/SocialSideBar";
import Typography from "../components/Typography";

import bubblesVary from "../imgs/big-bubbles-rb.svg";
import bubblesLeft2 from "../imgs/bubbles-left-2.svg";
import bubblesLeft3 from "../imgs/bubbles-left-equal.svg";
import bubblesRight2 from "../imgs/big-bubbles-rb.svg";
import bubblesLeft4 from "../imgs/left-spaced.svg";
import glassBubble from "../imgs/glassBubble.svg";

export default function CodeOfConduct() {
  return (
    <>
      <NavBar />
      <div className="page-starter-container">
        <img
          src={bubblesRight2}
          alt="Aritzia"
          className="home-starter-bubbles-right"
        ></img>
        <img
          src={bubblesLeft2}
          alt="Aritzia"
          className="home-starter-bubbles-left"
        ></img>
        <gradient-large>Code of Conduct</gradient-large>
        <SocialSideBar className="icons" />
      </div>
      <div className = "content">
        <div className = "section">
          <Typography inline="inline" variant="h1" weight="bold" >
            Section A
          </Typography>
          <br />
          <Typography inline="inline" variant="h6" >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, 
          mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum 
          tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti 
          sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus 
          enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor 
          urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
          </Typography>
        </div>
        <div className = "section">
        <Typography inline="inline" variant="h1" weight="bold" >
            Section B
          </Typography>
          <br />
          <Typography inline="inline" variant="h6" >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, 
          mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum 
          tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti 
          sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus 
          enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor 
          urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
          </Typography>
        </div>
        <div className = "section">
        <Typography inline="inline" variant="h1" weight="bold" >
            Section C
          </Typography>
          <br />
          <Typography inline="inline" variant="h6" >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, 
          mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum 
          tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti 
          sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus 
          enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor 
          urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
          </Typography>
        </div>
      </div>
      <Footer />
    </>
  );
}