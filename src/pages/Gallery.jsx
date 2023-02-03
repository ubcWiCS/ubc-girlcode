import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SocialSideBar from "../components/SocialSideBar";

import manyBubbles from "../imgs/many-bubbles-right.svg";

import img1 from "../imgs/2023photos/1.jpeg";
import img2 from "../imgs/2023photos/2.jpeg";
import img3 from "../imgs/2023photos/3.jpeg";
import img4 from "../imgs/2023photos/4.JPG";
import img5 from "../imgs/2023photos/5.JPG";
import img6 from "../imgs/2023photos/6.JPG";
import img10 from "../imgs/2023photos/10.JPG";
import img11 from "../imgs/2023photos/11.JPG";
import img12 from "../imgs/2023photos/12.JPG";
import img13 from "../imgs/2023photos/13.JPG";
import img14 from "../imgs/2023photos/14.JPG";
import img15 from "../imgs/2023photos/15.JPG";
import img16 from "../imgs/2023photos/16.JPG";
import img17 from "../imgs/2023photos/17.jpeg";
import img18 from "../imgs/2023photos/18.jpeg";
import img19 from "../imgs/2023photos/19.jpeg";
import img20 from "../imgs/2023photos/20.jpeg";
import img21 from "../imgs/2023photos/21.jpeg";
import img22 from "../imgs/2023photos/22.jpeg";
import img23 from "../imgs/2023photos/23.jpeg";
import img24 from "../imgs/2023photos/24.jpeg";
import img25 from "../imgs/2023photos/25.jpeg";
import img26 from "../imgs/2023photos/26.jpeg";
import img27 from "../imgs/2023photos/27.jpeg";

import sponsor1 from "../imgs/2023photos/7.JPG";
import sponsor2 from "../imgs/2023photos/8.JPG";
import sponsor3 from "../imgs/2023photos/9.JPG";

import "./about.css";

const sponsorImages = [sponsor1, sponsor2, sponsor3];

const galleryImages = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
  img26,
  img27,
];

export default function Gallery() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <>
      <NavBar />
      <div className="page-starter-container">
        <img
          src={manyBubbles}
          alt="Aritzia"
          className="starter-bubbles-right"
        ></img>
        <gradient-large>2023 Photos</gradient-large>
        <SocialSideBar className="icons" />
      </div>
      <div className="page-container">
        <div className="centered-team">
          <div className="team-grid-container">
            {galleryImages.map((img, index) => {
              return (
                <img
                  alt={`2023 Event ${img}`}
                  className="gallery-img"
                  key={index}
                  onClick={() => openImageViewer(index)}
                  src={img}
                />
              );
            })}
            {isViewerOpen && (
              <ImageViewer
                src={galleryImages}
                currentIndex={currentImage}
                disableScroll={false}
                closeOnClickOutside={true}
                onClose={closeImageViewer}
              />
            )}
          </div>
        </div>
        <div className="centered-team">
          <gradient-small>Food Sponsors</gradient-small>
          <div className="grid-container">
            {sponsorImages.map((img, index) => {
              return (
                <img
                  alt={`2023 Sponsor ${img}`}
                  className="gallery-img"
                  src={img}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
