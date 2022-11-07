import * as React from "react";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SocialSideBar from "../components/SocialSideBar"


export default function Home() {
  return (
    <>
      <NavBar />
      <div className= "landingPage">
        <SocialSideBar />
        <div className = "gradientFont">
          <gradientFont>girlCode</gradientFont>
        </div>
      </div>
      <div className = "content">
        <div className = "leftJustified">
        <paragraph><purple>Women in Computer Science</purple> and <blue>Women in Data Science</blue> are proud to present UBC's 
          first retail sponsored hackathon for underrepresented gender minorities. <br/> <br/>  #GirlsGitIt 
          <br/><br/><br/>
          <button1><a href="About.html">Learn More</a></button1>
        </paragraph>
        </div>
          <div className = "rightJustified">
          <gradientFont>24</gradientFont>
          <br/> 
          <paragraph>hour <bold>in-person</bold> hackathon <br/> <br/> Hosted at <bold>UBC</bold>, from January 13th-14th 2023. <br/> Save the date and register today.</paragraph>
        </div>
        <div className = "centre">
          <div className = "glass">
            <paragraph>girlCode strives to <bold>ignite</bold> creativity, <bold>build</bold> friendships and <bold>empower</bold> the next generation of leaders in tech through building impactful solutions. </paragraph>
            <br/><br/><br/><br/>
            <button1><a href="SignUp.html">Register Now</a></button1>
          </div>
        </div>
        <div className = "leftJustified">
        <paragraph>
          <gradientFont>23%</gradientFont> <br/>
          of Canadian workers in Science and Technology represent gender minorities. <br/>
          <bold>YOU</bold> spark the change. Together, we can redefine the image of what it means to work in tech (hint: there are infinite possibilities).  
        </paragraph>
        </div>
        <div className = "centre">
          <paragraph> Any Questions? <bold>Contact Us</bold></paragraph>
        </div>
      </div>
    </>
  );
}
