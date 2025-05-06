import { Link } from "react-router-dom";
import kasaLogo from "../assets/logo_desktop.png";
import "../style/Header.css";

function Header() {
  return (
    <>
      <div className="header">
        <img src={kasaLogo} className="logo" alt="Kasa logo" />
        <div className="linksHeader">
          <Link to="/">ACCUEIL</Link>
          <Link to="/Info">A PROPOS</Link>
        </div>
      </div>
    </>
  );
}

export default Header;
