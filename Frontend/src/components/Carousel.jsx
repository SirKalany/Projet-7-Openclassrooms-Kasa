import React, { useState } from "react";
import "../style/Carousel.css";
import leftArrow from "../assets/arrow_left.png";
import rightArrow from "../assets/arrow_right.png";

function Carousel({ pictures, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handlePrevious() {
    if (currentIndex === 0) {
      setCurrentIndex(pictures.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  }

  function handleNext() {
    if (currentIndex === pictures.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }

  return (
    <div className="carousel">
      {pictures.length > 1 && (
        <>
          <img
            src={leftArrow}
            alt="Précédent"
            className="carouselArrow left"
            onClick={handlePrevious}
          />
          <img
            src={rightArrow}
            alt="Suivant"
            className="carouselArrow right"
            onClick={handleNext}
          />
        </>
      )}
      <img
        src={pictures[currentIndex]}
        alt={`${title} ${currentIndex + 1}`}
        className="carouselImage"
      />
    </div>
  );
}

export default Carousel;
