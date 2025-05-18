import React from "react";
import "../style/Logement.css";

function Rating({ value }) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} className={`star ${i <= value ? "filled" : ""}`}>
        ★
      </span>
    );
  }

  return <div className="rating">{stars}</div>;
}

export default Rating;