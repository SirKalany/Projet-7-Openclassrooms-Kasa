import React from "react";
import "../style/LogementGrid.css";
import { Link } from "react-router-dom";

function LogementGrid() {
  return (
    <div className="logementGrid">
      <div className="gridContainer">
        <div className="gridItem">Logement 1</div>
        <div className="gridItem">Logement 2</div>
        <div className="gridItem">Logement 3</div>
        <div className="gridItem">Logement 4</div>
        <div className="gridItem">Logement 5</div>
        <Link to="/logement"><div className="gridItem">Logement 6</div></Link>
      </div>
    </div>
  );
}

export default LogementGrid;
