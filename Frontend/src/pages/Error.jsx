import { Link } from "react-router-dom";
import React from 'react';
import "../style/error.css";

function Error() {
  return (
    <div className="errorContent">
      <h1 className="error404">404</h1>
      <h2 className="errorDescription">Oups! La page que vous demandez n'existe pas.</h2>
      <h3 className="errorBackToIndex"><Link to="/">Retourner sur la page d’accueil</Link></h3>
    </div>
  );
}

export default Error;