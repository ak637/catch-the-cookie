import "./App.scss";
import Start from "./components/Start/Start";
import { useState } from "react";

function App() {
  const [activeGame, setActiveGame] = useState("start");

  return (
    <>
      {activeGame === "start" && (
        <div className="App">
          <div className="App__snow"></div>
          <Start activeGame={activeGame} setActiveGame={setActiveGame} />
        </div>
      )}
    </>
  );
}

export default App;
