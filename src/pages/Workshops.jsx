import React, { useState } from "react";
import Table from "react-bootstrap/Table";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SocialSideBar from "../components/SocialSideBar";
import WorkshopModal from "../components/WorkshopModal";

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
      "Have an idea for a cool mobile app? This workshop will introduce you to creating an iOS app.",
    url: "https://forms.gle/qHckdGwYcqs3PEuL7",
  },
  {
    name: "Intro to Web Development",
    description:
      "Fresh out of 110 and have no idea how you will make a project with Dr. Racket? Have no fear, JavaScript is here to save you! This is a workshop designed for beginners. We will teach to the fundamentals of HTML, CSS, and JavaScript so you understand how basic web components are constructed.",
    url: "https://forms.gle/5iJABZZRMuXjXW5g8",
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
        <img
            src={bubblesLeft}
            alt="Aritzia"
            className="bubbles-left"
          ></img>
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
              <td>1 pm</td>
              <td>
                <button
                  className="workshop-btn"
                  onClick={handleOpenModal}
                  value={1}
                >
                  Intro to iOS
                </button>
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>2 pm</td>
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
              <td>Succeeding in your first hackathon</td>
              <td>Intro to React</td>
              <td>Figma</td>
            </tr>
            <tr>
              <td>6 pm</td>
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
              <td>Intro to Python</td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </div>
      <Footer />
    </>
  );
}
