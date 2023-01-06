import React, { useState } from "react";
import Table from "react-bootstrap/Table";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SocialSideBar from "../components/SocialSideBar";
import WorkshopModal from "../components/WorkshopModal";
import Typography from "../components/Typography";

import bubblesLeft from "../imgs/bubbles-left-3.svg";
import bubblesThree from "../imgs/ThreeRightBubbles.svg";

const workshops = [
  {
    name: "Intro to Git and GitHub",
    description:
      "Get ready to collaborate on your coding projects! This is a workshop designed for beginners who have limited to no experience with Git and GitHub. We will teach to the key skills needed to work on shared projects with your hackathon teammates.",
    url: "https://forms.gle/WiuXpGrBvxiXrs3m9",
  },
  {
    name: "Intro to iOS",
    description:
      "Have an idea for a cool mobile app? This workshop will introduce you to creating an iOS app. This is an intermediate workshop where participants would ideally have completed CPSC 210. Pre-workshop materials will be sent out with helpful resources for students who have not yet completed 210. Note- this workshop will be hosted in ICCS 246 and is only available to hackathon participants.",
    url: "https://forms.gle/qHckdGwYcqs3PEuL7",
  },
  {
    name: "Intro to Web Development",
    description:
      "Fresh out of 110 and have no idea how you will make a project with Dr. Racket? Have no fear, JavaScript is here to save you! This is a workshop designed for beginners. We will teach to the fundamentals of HTML, CSS, and JavaScript so you understand how basic web components are constructed.",
    url: "https://forms.gle/5iJABZZRMuXjXW5g8",
  },
  {
    name: "Succeeding in Your First Hackathon",
    description:
      "Is this your first Hackathon? No worries - we have tips and tricks from seasoned Hackathon participants to help guide you during the weekend.",
    url: "https://forms.gle/v1ZcAu3rQ8nUyaSQ9",
  },
  {
    name: "Intro to Machine Learning in Python",
    description:
      "Python is a language commonly used language for quickly building apps, including those using machine learning tools. We will share some useful aspects of Python in this workshop.",
    url: "https://forms.gle/66KxxkYASprnaf7F6",
  },
  {
    name: "Intro to React",
    description:
      "It's time to test your new web development skills! This is a workshop designed for beginners, and a follow up to the Intro to Web Dev workshop. We will introduce you to the React framework and work through a coding exercise.",
    url: "https://forms.gle/ac3qEUeXkeeYC6X58",
  },
  {
    name: "Intro to Figma",
    description:
      "Don't know how to begin designing your project? Figma is a useful tool for creating wireframes and mockups and is a great place to start! We will cover basic Figma concepts and some prototying techniques through a live demo",
    url: "https://forms.gle/LCNu9yUkTsiz34MC9",
  },
];

export default function Workshops() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setURL] = useState("");

  const handleOpenModal = (e) => {
    if (show === true) {
      return;
    }

    setName(workshops[e.target.value].name);
    setDescription(workshops[e.target.value].description);
    setURL(workshops[e.target.value].url);
    setShow(true);
  };

  const handleCloseModal = () => {
    setShow(false);
  };

  return (
    <>
      <NavBar />
      {show ? (
        <WorkshopModal
          show={show}
          setShow={handleCloseModal}
          name={name}
          description={description}
          url={url}
        />
      ) : null}
      <div className="page-starter-container">
        <div>
          <img src={bubblesLeft} alt="Aritzia" className="bubbles-left"></img>
          <img
            src={bubblesThree}
            alt="Aritzia"
            className="home-starter-bubbles-right"
          ></img>
          <gradient-medium>Workshops</gradient-medium>
        </div>
        <SocialSideBar className="icons" />
      </div>
      <div className="page-container">
        <Table striped bordered responsive variant="dark">
          <thead>
            <tr>
              <th>Time</th>
              <th>Sunday, Jan 8</th>
              <th>Monday, Jan 9</th>
              <th>Tuesday, Jan 10</th>
              <th>Wednesday, Jan 11</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>11 am</td>
              <td>
                <button
                  className="workshop-btn"
                  onClick={handleOpenModal}
                  value={3}
                >
                  Succeeding in Your First Hackathon
                </button>
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>12 pm</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>1 pm</td>
              <td>
                {" "}
                <button
                  className="workshop-btn"
                  onClick={handleOpenModal}
                  value={0}
                >
                  Intro to Git and GitHub
                </button>
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>2 pm</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>3 pm</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>4 pm</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>5 pm</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>6 pm</td>
              <td></td>
              <td>
                <button
                  className="workshop-btn"
                  onClick={handleOpenModal}
                  value={1}
                >
                  Intro to iOS (in person)
                </button>
              </td>
              <td>
                {" "}
                <button
                  className="workshop-btn"
                  onClick={handleOpenModal}
                  value={5}
                >
                  Intro to React
                </button>
              </td>
              <td>
                {" "}
                <button
                  className="workshop-btn"
                  onClick={handleOpenModal}
                  value={4}
                >
                  Intro to Machine Learning in Python
                </button>
              </td>
            </tr>
            <tr>
              <td>7 pm</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>8 pm</td>
              <td></td>
              <td>
                {" "}
                <button
                  className="workshop-btn"
                  onClick={handleOpenModal}
                  value={2}
                >
                  Intro to Web Development
                </button>
              </td>
              <td></td>
              <td>           {" "}
                <button
                  className="workshop-btn"
                  onClick={handleOpenModal}
                  value={6}
                >
                  Intro to Figma
                </button></td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="info-container">
        <Typography color="white" variant="h6">
          All workshops except the Intro to iOS are open to UBC students and
          will be hosted virtually. Meeting invites and pre-workshop materials
          will be sent out 1-2 days before the workshop.
        </Typography>
      </div>
      <Footer />
    </>
  );
}
