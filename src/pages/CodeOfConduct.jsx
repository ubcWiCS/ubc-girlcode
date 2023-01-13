import * as React from "react";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SocialSideBar from "../components/SocialSideBar";
import Typography from "../components/Typography";

export default function CodeOfConduct() {
  return (
    <>
      <NavBar />
      <div className="page-starter-container">
        <gradient-large>Code of Conduct</gradient-large>
        <SocialSideBar className="icons" />
      </div>
      <div className="content">
        <div className="section">
          <Typography variant="h6">
            girlCode Hackathon Team is committed to providing an inclusive,
            welcoming, safe and professional environment for all hackers,
            sponsors and mentors attending our hackathon, regardless of the age,
            disability, background, ethnicity, race, gender, national origin,
            sexual orientation or other protected characteristics.
          </Typography>
          <Typography variant="h6">
            The following code of conduct applies before, during and after all
            of our hackathon events, including all physical and virtual spaces.
          </Typography>
        </div>
        <div className="section">
          <Typography inline="inline" variant="h3" weight="bold">
            Our expectations
          </Typography>
          <br />
          <Typography variant="h6">
            <ul>
              <li>
                By participating in our meetings and events, we expect
                participants of our hackathon to abide by this Code of Conduct
                and accept the procedure by which any Code of Conduct incidents
                are resolved.{" "}
              </li>
              <li>
                Please treat everyone with respect. We want to ensure our
                hackathon is a safe and positive experience for every
                participant and speaker.{" "}
              </li>
              <li>
                Provide your true professional identity, affiliation, and where
                appropriate, contact information, at registration and during
                attendance and participatory sessions, as required.
              </li>
            </ul>
          </Typography>
        </div>
        <div className="section">
          <Typography inline="inline" variant="h3" weight="bold">
            Encouraged behaviour
          </Typography>
          <br />
          <Typography variant="h6">
            <ul>
              <li>Use of welcoming, inclusive and non-offensive language.</li>
              <li>
                Showing respect for different viewpoints, experience and
                knowledge.
              </li>
              <li>
                Graceful acceptance of constructive criticism and feedback.
              </li>
              <li>
                Create a safe space for everyone to speak their mind and ask
                questions.
              </li>
            </ul>
          </Typography>
        </div>
        <div className="section">
          <Typography inline="inline" variant="h3" weight="bold">
            Behaviour violating the code of conduct
          </Typography>
          <br />
          <Typography variant="h6">
            <ul>
              <li>
                Intimidating, harassing, abusive, discriminatory, derogatory or
                demeaning speech/actions.
              </li>
              <li>
                Harmful or prejudicial verbal or written comments or visual
                images related to age, background, belief, disability,
                ethnicity, race, religion, gender, identity, national origin,
                sexual orientation or other personal characteristic, including
                those protected by the law.
              </li>
              <li>Inappropriate use of sexual language or imagery.</li>
              <li>
                Real or implied threat of professional or financial damage or
                harm.
              </li>
              <li>Inappropriate disruption of meetings or events.</li>
              <li>
                Photographing, video or audio recording of slides, oral or
                poster presentations without presenter/author's permission.
              </li>
              <li>
                Violating the rules and regulations of the online platform
                (Discord, Instagram, Tiktok…)
              </li>
            </ul>
          </Typography>
        </div>
        <div className="section">
          <Typography inline="inline" variant="h3" weight="bold">
            Reporting incidents procedure
          </Typography>
          <br />
          <Typography variant="h6">
            If you believe someone is violating the code of conduct, please
            report this to the event organiser straight away, if you can. The
            report will be reviewed by the hackathon Leaders and Administration
            team of the hackathon and any action to address and/or resolve the
            issue will be communicated within a shortly time manner.
          </Typography>
          <Typography variant="h6">
            Hackathon's participants and mentors violating these rules will
            firstly be warned, then appropriate actions will be followed, such
            as sanctioned, expelled from the hackathon, or reported to the law
            enforcement at the discretion of the organisers.
          </Typography>
        </div>
        <div className="section">
          <Typography inline="inline" variant="h3" weight="bold">
            Resolution of incidents
          </Typography>
          <br />
          <Typography variant="h6">
            Incidents will be reviewed and if the code of conduct has been
            violated, the actions we take could include:
          </Typography>
          <Typography variant="h6">
            <ol type="1">
              <li>
                Educating the person as to the consequences of their actions.
              </li>
              <li>Removal from the meeting or event.</li>
              <li>Restrictions from future meetings and events. </li>
              <li>
                Removal from mailing list or positions on committees or working
                groups.{" "}
              </li>
            </ol>
          </Typography>
        </div>
      </div>
      <Footer />
    </>
  );
}
