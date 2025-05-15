import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import logements from "../data/logements.json";
import Accordion from "../components/Accordion";
import "../style/Logement.css";

function Rating(props) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} className={`star ${i <= props.value ? "filled" : ""}`}>
        ★
      </span>
    );
  }
  return <div className="rating">{stars}</div>;
}

function Logement() {
  const params = useParams();
  const navigate = useNavigate();

  const logement = logements.find((item) => item.id === params.id);

  useEffect(() => {
    if (!logement) {
      navigate("/error", { replace: true }); // redirection vers /error
    }
  }, [logement, navigate]);

  if (!logement) return null; // évite le rendu le temps que la redirection se fasse

  return (
    <div className="logementPage">
      <img src={logement.pictures[0]} alt={logement.title} className="logementImage" />

      <div className="logementHeader">
        <div className="housingInfo">
          <h1 className="housingTitle">{logement.title}</h1>
          <h2 className="housingLocation">{logement.location}</h2>
          <div className="housingTags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="housingTag">{tag}</span>
            ))}
          </div>
        </div>

        <div className="hostSection">
          <Rating value={parseInt(logement.rating)} />
          <div className="hostInfo">
            <p className="hostName">{logement.host.name}</p>
            <img src={logement.host.picture} alt={logement.host.name} className="hostPicture" />
          </div>
        </div>
      </div>

      <div className="Accordion">
        <Accordion
          menus={[
            {
              title: "Description",
              content: logement.description,
            },
            {
              title: "Équipements",
              content: Array.isArray(logement.equipments)
                ? logement.equipments.join(", ")
                : logement.equipments,
            },
          ]}
        />
      </div>
    </div>
  );
}

export default Logement;