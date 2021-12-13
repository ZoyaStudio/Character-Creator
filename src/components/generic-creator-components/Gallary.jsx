import React from "react";

const Gallery = function gallary({ items, label }) {
  return (
    <div className="gallary">
      <div className="banner">
        <h3>{label}</h3>
      </div>
      <div className="gallary-box">{items}</div>
    </div>
  );
};
export default Gallery;
