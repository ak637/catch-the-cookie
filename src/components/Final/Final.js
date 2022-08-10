import "./Final.scss";
// import { useState } from "react";

const Final = ({ activeGame, setActiveGame, score, setScore }) => {
  const clickHandler = () => {
    if (activeGame !== "start") {
      setActiveGame("start");
    }
  };

  const clickHandlerHighscores = () => {
    if (activeGame !== "highscores") {
      setActiveGame("highscores");
    }
  };

  return (
    <>
      {activeGame === "final" && (
        <section className="startContainer">
          <h1 className="startContainer__title">GOOD GAME!</h1>
          <h2 className="startContainer__subtitle">
            Your Score: <p>{score}</p>
          </h2>
          <form className="startContainer__form">
            <input
              type="text"
              className="startContainer__input"
              placeholder="Display Name..."
            />
            <p className="startContainer__button">Submit</p>
          </form>
          <div className="startContainer__buttons">
            <p className="startContainer__button" onClick={clickHandler}>
              Main Menu
            </p>
            <p
              className="startContainer__button"
              onClick={clickHandlerHighscores}
            >
              View Highscores
            </p>
          </div>
        </section>
      )}
    </>
  );
};

export default Final;
