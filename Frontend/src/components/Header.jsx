import { Link } from "react-router-dom";
import kasaLogo from "../assets/logo_desktop.png";
import "../style/header.css";

function Header() {
  return (
    <>
      <div className="header">
        <img src={kasaLogo} className="logo" alt="Kasa logo" />
        <div className="linksHeader">
          <Link to="/">Accueil</Link>
          <Link to="/Info">A Propos</Link>
        </div>
      </div>
    </>
  );
}

export default Header;