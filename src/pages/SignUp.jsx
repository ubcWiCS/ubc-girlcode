import * as React from "react";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SocialSideBar from "../components/SocialSideBar";
import register from "../imgs/registerText.svg";

export default function SignUp() {
  return (
    <>
      <NavBar />
      <div className="regPageTitle">
        <div>
          <img src={register} alt="register"></img>
        </div>
        <div className="regPageSocials">
        <SocialSideBar className="reg-icons" />
        </div>
      </div>
      <div className="registerPageBody">
        <iframe
          title="qualtrics"
          src="https://ubc.ca1.qualtrics.com/jfe/form/SV_bO6taMrJnPF81kG"
          width="800px"
          height="3000px"
          frameBorder="0"
        ></iframe>
      </div>
      <Footer />
    </>
  );
}
