import React from "react";
import CardImage from "./CardImage";

const Card = ({ name, img, onClick, id }) => {
  //   const rndGenerator = (min, max) => {
  //     return Math.floor(Math.random() * max - min + 1) + min;
  //   };
  return (
    <div className="card" onClick={onClick}>
      <CardImage img={img} name={name} />
      <h3>{name}</h3>
    </div>
  );
};

export default Card;
