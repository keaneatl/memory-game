import React from "react";

const CardImage = ({ img, name }) => {
  return <img src={img} alt={name} className="card-img"></img>;
};

export default CardImage;
