import React from "react";
import indexBackground from "../assets/index_background.png";
import "../style/App.css";
import LogementGrid from "../components/LogementGrid";

function App() {
  return (
    <>
      <div className="banner">
        <img
          src={indexBackground}
          className="indexBackground"
          alt="Image de banière"
        />
        <h1 className="bannerText">Chez vous, partout et ailleurs</h1>
      </div>
      <LogementGrid />
    </>
  );
}

export default App;
