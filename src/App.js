import "./App.scss";
import Start from "./components/Start/Start";
import { useState } from "react";
import CookieCatch from "./components/CookieCatch/CookieCatch";
import CookieCatch2 from "./components/CookieCatch2/CookieCatch2";
import CookieCatch3 from "./components/CookieCatch3/CookieCatch3";
import CookieCatch4 from "./components/CookieCatch4/CookieCatch4";
import BonusLevel from "./components/BonusLevel/BonusLevel";
import Final from "./components/Final/Final";
import HowToPlay from "./components/HowToPlay/HowToPlay";
import Highscores from "./components/Highscores/Highscores";

function App() {
  const [activeGame, setActiveGame] = useState("start");
  const [score, setScore] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

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
      {activeGame === "CookieCatch4" && (
        <CookieCatch4
          score={score}
          setScore={setScore}
          setActiveGame={setActiveGame}
        />
      )}
      {activeGame === "BonusLevel" && (
        <BonusLevel
          score={score}
          setScore={setScore}
          setActiveGame={setActiveGame}
          multiplier={multiplier}
          setMultiplier={setMultiplier}
        />
      )}
      {activeGame === "final" && (
        <div className="App">
          <div className="App__snow"></div>
          <Final
            score={score}
            setActiveGame={setActiveGame}
            activeGame={activeGame}
          />
        </div>
      )}
    </>
  );
}

export default App;
