import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import logements from "../data/logements.json";
import Accordion from "../components/Accordion";
import Carousel from "../components/Carousel";
import Rating from "../components/Rating"; // ✅ Import externe
import "../style/Logement.css";

function Logement() {
  const params = useParams();
  const navigate = useNavigate();

  const logement = logements.find((item) => item.id === params.id);

  useEffect(() => {
    if (!logement) {
      navigate("/error", { replace: true });
    }
  }, [logement, navigate]);

  if (!logement) return null;

  return (
    <div className="logementPage">
      <Carousel pictures={logement.pictures} title={logement.title} />

      <div className="logementHeader">
        <div className="housingInfo">
          <h1 className="housingTitle">{logement.title}</h1>
          <h2 className="housingLocation">{logement.location}</h2>
          <div className="housingTags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="housingTag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="hostSection">
          <Rating value={parseInt(logement.rating)} />
          <div className="hostInfo">
            <p className="hostName">{logement.host.name}</p>
            <img
              src={logement.host.picture}
              alt={logement.host.name}
              className="hostPicture"
            />
          </div>
        </div>
      </div>

      <div className="accordionSection">
        <Accordion
          className="horizontal"
          menus={[
            { title: "Description", content: logement.description },
            {
              title: "Équipements",
              content: logement.equipments,
            },
          ]}
        />
      </div>
    </div>
  );
}

export default Logement;
