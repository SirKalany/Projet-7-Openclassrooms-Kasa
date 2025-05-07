import indexBackground from "../assets/index_background.png";
import "../style/App.css";

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
      <div>
        <h1 className="content">Main Content</h1>
      </div>
    </>
  );
}

export default App;
