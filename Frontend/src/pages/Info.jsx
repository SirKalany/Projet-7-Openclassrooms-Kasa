import React from "react";
import infoBackground from "../assets/info_background.png";
import Accordion from "../components/Accordion";
import infoData from "../data/info.json";
import "../style/info.css";

function Info() {
  return (
    <div className="infoPage">
      <div className="infoBanner">
        <img
          src={infoBackground}
          className="infoBackground"
          alt="Image d'une montagne"
        />
      </div>
      <div className="accordionInfo">
        <Accordion menus={infoData} />
      </div>
    </div>
  );
}

export default Info;