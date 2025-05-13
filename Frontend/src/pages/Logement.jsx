import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import logements from "../data/logements.json";
import "../style/Logement.css"; // Importation du CSS

function Accordion(props) {
  const [isOpen, setIsOpen] = React.useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="accordionItem">
      <button className="accordionHeader" onClick={toggle}>
        {props.title}
      </button>
      <div className={`accordionBody${isOpen ? " open" : ""}`}>
        {Array.isArray(props.content) ? (
          <ul>
            {props.content.map(function (item, index) {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        ) : (
          <p>{props.content}</p>
        )}
      </div>
    </div>
  );
}

function Rating(props) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= props.value) {
      stars.push(<span key={i} className="star filled">★</span>);
    } else {
      stars.push(<span key={i} className="star">★</span>);
    }
  }
  return <div className="rating">{stars}</div>;
}

function Logement() {
  const params = useParams();
  const [showError, setShowError] = useState(false);

  const logement = logements.find(function (item) {
    return item.id === params.id;
  });

  useEffect(function () {
    if (!logement) {
      setShowError(true); // Si pas de logement, montre un message d'erreur
    }
  }, [logement]);

  if (showError) {
    return (
      <div className="errorContainer">
        <h2>Le logement n'a pas été trouvé.</h2>
        <p>
          <Link to="/" className="errorLink">Retour à l'accueil</Link>
        </p>
      </div>
    );
  }

  return (
    <div className="logementPage">
      <img src={logement.pictures[0]} alt={logement.title} className="logementImage" />

      <div className="logementHeader">
        <div className="housingInfo">
          <h1 className="housingTitle">{logement.title}</h1>
          <h2 className="housingLocation">{logement.location}</h2>
          <div className="housingTags">
            {logement.tags.map(function (tag, index) {
              return <span key={index} className="housingTag">{tag}</span>;
            })}
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

      <div className="accordionSection">
        <Accordion title="Description" content={logement.description} />
        <Accordion title="Équipements" content={logement.equipments} />
      </div>
    </div>
  );
}

export default Logement;
