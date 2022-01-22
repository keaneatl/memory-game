import { useState } from "react";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";

function App() {
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);

  return (
    <div className="main">
      <Header score={score} best={best} />
    </div>
  );
}

export default App;
