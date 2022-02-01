import { useState } from "react";
import Header from "./components/Header";
import alekhine from "../src/assets/alekhine.jpeg";
import anand from "../src/assets/anand.jpeg";
import botvinnik from "../src/assets/botvinnik.jpeg";
import capablanca from "../src/assets/capablanca.jpeg";
import carlsen from "../src/assets/carlsen.jpeg";
import fischer from "../src/assets/fischer.jpeg";
import karpov from "../src/assets/karpov.jpeg";
import kasparov from "../src/assets/kasparov.jpeg";
import morphy from "../src/assets/morphy.jpeg";
import polgar from "../src/assets/polgar.jpeg";
import reshevsky from "../src/assets/reshevsky.jpeg";
import steinitz from "../src/assets/steinitz.jpeg";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  const deck = [
    { name: "Alekhine", img: alekhine, id: 0 },
    { name: "Anand", img: anand, id: 1 },
    { name: "Botvinnik", img: botvinnik, id: 2 },
    { name: "Capablanca", img: capablanca, id: 3 },
    { name: "Carlsen", img: carlsen, id: 4 },
    { name: "Fischer", img: fischer, id: 5 },
    { name: "Karpov", img: karpov, id: 6 },
    { name: "Kasparov", img: kasparov, id: 7 },
    { name: "Morphy", img: morphy, id: 8 },
    { name: "Polgar", img: polgar, id: 9 },
    { name: "Reshevsky", img: reshevsky, id: 10 },
    { name: "Steinitz", img: steinitz, id: 11 },
  ];
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [cards, setCards] = useState(deck);
  const [clicked, setClicked] = useState([]);

  const onClick = (e) => {
    if (clicked.some((card) => card === e.currentTarget.textContent)) {
      alert("You Lose!");
      setScore(0);
      setClicked([]);
      setCards(deck);
    } else if (score === 12) {
      alert("You hacked the vault! You win $1,000,000");
      setScore(0);
      setClicked([]);
      setCards(deck);
    } else {
      setClicked(clicked.concat(e.currentTarget.textContent));
      setScore((score) => score + 1);
      setCards(
        cards.map((card, i) => {
          // get random number with current index as min and next index as max
          // unless it's the last card
          let rnd = Math.floor(Math.random() * (i + 1 - i + 1) + i);
          if (i === cards.length - 1)
            rnd = Math.floor(Math.random() * (i - i + 1) + i);

          // swap cards
          let tmp = cards[rnd];
          cards[rnd] = card;
          card = tmp;
          return card;
        })
      );
      if (score >= best) setBest(score + 1);
    }
  };

  return (
    <div className="main">
      <Header title="HACK THE VAULT" score={score} best={best} />
      <Cards cards={cards} onClick={onClick} />
      <Footer />
    </div>
  );
}

export default App;
