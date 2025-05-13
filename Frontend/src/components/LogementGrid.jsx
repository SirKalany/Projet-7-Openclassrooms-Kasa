import React from "react";
import "../style/LogementGrid.css";
import { Link } from "react-router-dom";
import logements from "../data/logements.json";

function LogementGrid() {
  return (
    <div className="housingGridWrapper">
      <div className="housingGridContainer">
        {logements.map(function (logement) {
          return (
            <Link
              to={`/logement/${logement.id}`}
              key={logement.id}
              className="housingCardLink"
            >
              <div className="housingCard">
                <img
                  src={logement.cover}
                  alt={logement.title}
                  className="housingCardImage"
                />
                <h3 className="housingCardTitle">{logement.title}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default LogementGrid;
