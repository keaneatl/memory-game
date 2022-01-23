import React from "react";
import Card from "./Card";

const Cards = ({ cards, onClick }) => {
  return (
    <div className="cards-container">
      {cards.map((card) => {
        return (
          <Card
            name={card.name}
            img={card.img}
            key={card.id}
            onClick={onClick}
          />
        );
      })}
    </div>
  );
};

export default Cards;
