import { useState } from "react";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
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

function App() {
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [cards, setCards] = useState([
    { name: "Alekhine", img: alekhine },
    { name: "Anand", img: anand },
    { name: "Botvinnik", img: botvinnik },
    { name: "Capablanca", img: capablanca },
    { name: "Carlsen", img: carlsen },
    { name: "Fischer", img: fischer },
    { name: "Karpov", img: karpov },
    { name: "Kasparov", img: kasparov },
    { name: "Morphy", img: morphy },
    { name: "Polgar", img: polgar },
    { name: "Reshevsky", img: reshevsky },
    { name: "Steinitz", img: steinitz },
  ]);

  return (
    <div className="main">
      <Header score={score} best={best} />
      <Cards cards={cards} />
    </div>
  );
}

export default App;
