import React from 'react';
import infoBackground from '../assets/info_background.png';
import Accordion from '../components/Accordion';  // Importation du composant Accordion
import '../style/info.css';

function Info() {
  const menus = [
    { title: "Menu 1", content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." },
    { title: "Menu 2", content: "La bienveillance fait partie des valeurs fondatrice de Kasa. Toute comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." },
    { title: "Menu 3", content: "La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque intéraction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance." },
    { title: "Menu 4", content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vrérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." }
  ];

  return (
    <>
      <div className="banner">
        <img
          src={infoBackground}
          className="infoBackground"
          alt="Image d'une montagne"
        />
      </div>
        <div className="accordionInfo">
      <Accordion menus={menus} />
      </div>
    </>
  );
}

export default Info;