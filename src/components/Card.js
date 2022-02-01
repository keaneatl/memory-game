import React from "react";
import CardImage from "./CardImage";

const Card = ({ name, img, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <CardImage img={img} name={name} />
      <h3>{name}</h3>
    </div>
  );
};

export default Card;
