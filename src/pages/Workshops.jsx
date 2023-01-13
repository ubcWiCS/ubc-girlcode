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
    name: "Career Advice 1",
    description:
      "Career advice will be provided by one of our industry mentors. This workshop is only open to hackathon participants.",
    url: "https://forms.gle/fR6soQa5wxP4cD8t6",
  },
  {
    name: "Career Advice 2",
    description:
      "Career advice will be provided by one of our industry mentors. This workshop is only open to hackathon participants.",
    url: "https://forms.gle/eYwJya4xr6DquVZo9",
  },
  {
    name: "Resume Advice 1",
    description:
      "Resume advice will be provided by one of our industry mentors. This workshop is only open to hackathon participants.",
    url: "https://forms.gle/7TkiSE7k5uaJYrD18",
  },
  {
    name: "Resume Advice 2",
    description:
      "Resume advice will be provided by one of our industry mentors. This workshop is only open to hackathon participants.",
    url: "https://forms.gle/kwxioTHFxaxYwK3a8",
  },
  {
    name: "Industry Q&A Session",
    description:
      "Mentors from Microsoft and Faire will be available for general questions about career, resumes, networking, or other industry related questions. This workshop is only open to hackathon participants.",
    url: "https://forms.gle/pq34VQ5sN8FJSN699",
  },
  {
    name: "Aritzia SWE Technical Workshop",
    description:
      "Aritzia will be hosting a workshop on technical Software Engineering topics. This workshop is only open to hackathon participants.",
    url: "https://forms.gle/MKjEZkn8suFNY61c6",
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
              <th>Friday, Jan 13</th>
              <th>Saturday, Jan 14</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>10:30 am</td>
              <td></td>
              <td>
                <button
                  className="workshop-btn"
                  onClick={handleOpenModal}
                  value={4}
                >
                  Industry Q&A Session
                </button>
              </td>
            </tr>
            <tr>
              <td>11 am</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>12 pm</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>1 pm</td>
              <td></td>
              <td>
                {" "}
                <button
                  className="workshop-btn"
                  onClick={handleOpenModal}
                  value={5}
                >
                  Aritzia SWE Technical Workshop
                </button>
              </td>
            </tr>
            <tr>
              <td>2 pm</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>3 pm</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>4 pm</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>5 pm</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>6 pm</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>7 pm</td>
              <td>
                {" "}
                <button
                  className="workshop-btn"
                  onClick={handleOpenModal}
                  value={0}
                >
                  Career Advice 1
                </button>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>7:30 pm</td>
              <td>
                <button
                  className="workshop-btn"
                  onClick={handleOpenModal}
                  value={1}
                >
                  Career Advice 2
                </button>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>8 pm</td>
              <td>
                {" "}
                <button
                  className="workshop-btn"
                  onClick={handleOpenModal}
                  value={2}
                >
                  Resume Advice 1
                </button>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>8:45 pm</td>
              <td>
                {" "}
                <button
                  className="workshop-btn"
                  onClick={handleOpenModal}
                  value={3}
                >
                  Resume Advice 2
                </button>
              </td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="info-container">
        <Typography color="white" variant="h6">
          More information will be sent out on the #workshops channel, so keep
          an eye out for annoucements there. Please sign up to give us an idea
          of attendance numbers!
        </Typography>
      </div>
      <Footer />
    </>
  );
}
