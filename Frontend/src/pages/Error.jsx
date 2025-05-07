import { Link } from "react-router-dom";
import React from 'react';
import "../style/error.css";

function Error() {
  return (
    <div className="errorContent">
      <h1 className="error404">404</h1>
      <h2 className="errorDescription">Oups! La page que vous demandez n'existe pas.</h2>
      <Link to="/"><h3 className="errorBackToIndex">Retourner sur la page d’accueil</h3></Link>
    </div>
  );
}

export default Error;