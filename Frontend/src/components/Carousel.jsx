import React, { useState } from "react";
import leftArrow from "../assets/arrow_left.png";
import rightArrow from "../assets/arrow_right.png";
import "../style/Carousel.css";

function Carousel({ pictures, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirst = currentIndex === 0;
    setCurrentIndex(isFirst ? pictures.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    const isLast = currentIndex === pictures.length - 1;
    setCurrentIndex(isLast ? 0 : currentIndex + 1);
  };

  return (
    <div className="carousel">
      {pictures.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`${title} - ${index + 1}`}
          className={`carouselImage ${index === currentIndex ? "active" : ""}`}
        />
      ))}

      {pictures.length > 1 && (
        <>
          <img
            src={leftArrow}
            alt="Précédent"
            className="carouselArrow left"
            onClick={goToPrevious}
          />
          <img
            src={rightArrow}
            alt="Suivant"
            className="carouselArrow right"
            onClick={goToNext}
          />
          <div className="carouselCounter">
            {currentIndex + 1}/{pictures.length}
          </div>
        </>
      )}
    </div>
  );
}

export default Carousel;