import React from "react";
import Card from "./Card";

const Cards = ({ cards, onClick }) => {
  return (
    <div>
      {cards.map((card) => {
        return <Card name={card.name} img={card.img} />;
      })}
    </div>
  );
};

export default Cards;
