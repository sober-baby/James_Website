// ListGroup.js
import React, { useState } from "react";

function ListGroup({ items, heading, onSelectItem }) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleItemClick = (index, item) => {
    if (selectedIndex === index) {
      setSelectedIndex(-1);
    } else {
      setSelectedIndex(index);
    }
    onSelectItem(item);
  };

  return (
    <div className="list-group-container">
      {heading && (
        <h4 className="list-group-heading text-white text-center mb-3">
          {heading}
        </h4>
      )}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => handleItemClick(index, item)}
            style={{ color: selectedIndex === index ? "blue" : "inherit" }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;
