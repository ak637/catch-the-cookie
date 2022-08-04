import "./App.scss";
import Start from "./components/Start/Start";
import { useState } from "react";
import CookieCatch from "./components/CookieCatch/CookieCatch";
import CookieCatchTwo from "./components/CookieCatchTwo/CookieCatchTwo";

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
      {activeGame === "CookieCatch" && (
        <CookieCatch
          score={score}
          setScore={setScore}
          setActiveGame={setActiveGame}
        />
      )}
      {activeGame === "CookieCatchTwo" && (
        <CookieCatchTwo score={score} setScore={setScore} />
      )}
    </>
  );
}

export default App;
