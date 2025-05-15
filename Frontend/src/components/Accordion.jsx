import React, { useState } from "react";

function Accordion({ menus }) {
  const [activeIndexes, setActiveIndexes] = useState([]);

  const toggleAccordion = (index) => {
    if (activeIndexes.includes(index)) {
      setActiveIndexes(activeIndexes.filter((i) => i !== index));
    } else {
      setActiveIndexes([...activeIndexes, index]);
    }
  };

  return (
    <div className="accordionSection">
      {menus.map((menu, index) => {
        const isActive = activeIndexes.includes(index);

        return (
          <div className="accordionItem" key={index}>
            <button
              className="accordionHeader"
              onClick={() => toggleAccordion(index)}
            >
              {menu.title}
            </button>
            <div className={`accordionBody ${isActive ? "active" : ""}`}>
              <p>{menu.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;