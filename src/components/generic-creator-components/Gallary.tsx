import React from 'react';

type GallaryProps = {
  items: JSX.Element [],
  label: string
}
const Gallary = function Gallary({ items, label }: GallaryProps) {
  return (
    <div className="gallary">
      <div className="banner">
        <h3>{label}</h3>
      </div>
      <div className="gallary-box">{items}</div>
    </div>
  );
};
export default Gallary;
