import React from "react";
import { useState } from "react";

const CardImage = () => {
  const [src, setSrc] = useState();
  const [alt, setAlt] = useState();

  return <img src={src} alt={alt}></img>;
};

export default CardImage;
