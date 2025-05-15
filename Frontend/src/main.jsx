import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./pages/App.jsx";
import Logement from "./pages/Logement.jsx";
import Info from "./pages/Info.jsx";
import Error from "./pages/Error.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="/info" element={<Info />} />
          <Route path="/error" element={<Error />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
  </StrictMode>
);