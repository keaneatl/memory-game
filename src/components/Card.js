import React from "react";

const Card = ({ name, src, alt }) => {
  return (
    <div>
      <img src={src} alt={alt}></img>
      <h2>{name}</h2>
    </div>
  );
};

export default Card;
