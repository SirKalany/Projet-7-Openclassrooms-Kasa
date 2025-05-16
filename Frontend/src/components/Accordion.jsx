import React, { useState } from "react";
import "../style/Accordion.css";

function Accordion({ menus, className = "" }) {
  const [activeIndexes, setActiveIndexes] = useState([]);

  const toggleAccordion = (index) => {
    setActiveIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className={`accordionSection ${className}`}>
      {menus.map((menu, index) => {
        const isActive = activeIndexes.includes(index);

        return (
          <div className="accordionItem" key={index}>
            <button
              className="accordionHeader"
              onClick={() => toggleAccordion(index)}
            >
              {menu.title}
              <span className="accordionToggle">
                <i
                  className={`fa-solid fa-angle-up accordionIcon ${
                    isActive ? "rotated" : ""
                  }`}
                ></i>
              </span>
            </button>
            <div className={`accordionBody ${isActive ? "active" : ""}`}>
              {Array.isArray(menu.content) ? (
                <ul className="accordionList">
                  {menu.content.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{menu.content}</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
