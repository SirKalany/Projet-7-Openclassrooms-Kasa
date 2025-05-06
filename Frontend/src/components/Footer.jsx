import kasaLogoFooter from "../assets/logo_footer.png";
import "../style/Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <img src={kasaLogoFooter} className="logoFooter" alt="Kasa logo" />
        <h3>© 2020 Kasa. All right reserved</h3>
      </div>
    </>
  );
}

export default Footer;
