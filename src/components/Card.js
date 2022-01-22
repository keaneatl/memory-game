import React from "react";
import CardImage from "./CardImage";

const Card = ({ name, img }) => {
  //   const rndGenerator = (min, max) => {
  //     return Math.floor(Math.random() * max - min + 1) + min;
  //   };
  return (
    <div>
      <CardImage img={img} name={name} />
      <h2>{name}</h2>
    </div>
  );
};

export default Card;
