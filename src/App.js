import "./App.scss";
import Start from "./components/Start/Start";
import { useState } from "react";
import CookieCatch from "./components/CookieCatch/CookieCatch";
import CookieCatch2 from "./components/CookieCatch2/CookieCatch2";
import CookieCatch3 from "./components/CookieCatch3/CookieCatch3";
import CookieCatchTwo from "./components/BonusLevel/BonusLevel";
import HowToPlay from "./components/HowToPlay/HowToPlay";
import Highscores from "./components/Highscores/Highscores";

function App() {
  const [activeGame, setActiveGame] = useState("start");
  const [score, setScore] = useState(0);

  return (
    <>
      {activeGame === "start" && (
        <div className="App">
          <div className="App__snow"></div>
          <Start
            activeGame={activeGame}
            setActiveGame={setActiveGame}
            score={score}
            setScore={setScore}
          />
        </div>
      )}
      {activeGame === "HowToPlay" && (
        <div className="App">
          <div className="App__snow"></div>
          <HowToPlay activeGame={activeGame} setActiveGame={setActiveGame} />
        </div>
      )}
      {activeGame === "highscores" && (
        <div className="App">
          <div className="App__snow"></div>
          <Highscores activeGame={activeGame} setActiveGame={setActiveGame} />
        </div>
      )}
      {activeGame === "CookieCatch" && (
        <CookieCatch
          score={score}
          setScore={setScore}
          setActiveGame={setActiveGame}
        />
      )}
      {activeGame === "CookieCatch2" && (
        <CookieCatch2
          score={score}
          setScore={setScore}
          setActiveGame={setActiveGame}
        />
      )}
      {activeGame === "CookieCatch3" && (
        <CookieCatch3
          score={score}
          setScore={setScore}
          setActiveGame={setActiveGame}
        />
      )}
      {activeGame === "CookieCatchTwo" && (
        <CookieCatchTwo
          score={score}
          setScore={setScore}
          setActiveGame={setActiveGame}
        />
      )}
    </>
  );
}

export default App;
