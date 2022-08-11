import "./Final.scss";
import axios from "axios";
// import { useState } from "react";

const BASE_URL = "http://localhost:5500/";

const Final = ({ activeGame, setActiveGame, score, setScore }) => {
  const clickHandler = () => {
    if (activeGame !== "start") {
      setActiveGame("start");
      setScore(0);
    }
  };

  const clickHandlerHighscores = () => {
    if (activeGame !== "highscores") {
      setActiveGame("highscores");
      setScore(0);
    }
  };

  const submitHandler = () => {
    axios
      .post(`${BASE_URL}highscores`, {
        name: document.getElementById("name").value,
        score: score,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
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
              id="name"
              required="true"
              maxLength={3}
            />
            <button
              className="startContainer__submit"
              onClick={submitHandler}
              type="submit"
            >
              Submit
            </button>
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
