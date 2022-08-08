import "./HowToPlay.scss";
// import { useState } from "react";

const HowToPlay = ({ activeGame, setActiveGame, score, setScore }) => {
  const clickHandler = () => {
    if (activeGame !== "start") {
      setActiveGame("start");
    }
  };

  return (
    <>
      {activeGame === "HowToPlay" && (
        <section className="startContainer">
          <h1 className="startContainer__title">How to play!</h1>
          <p className="startContainer__text">
            The aim of the game is to catch as many cookies as possible. Your
            score will go up each time you're successful, but, so will the
            difficulty! Progress through increasingly difficult and fun levels
            while trying to get the next High Score!
          </p>
          <p className="startContainer__button" onClick={clickHandler}>
            Go back
          </p>
        </section>
      )}
    </>
  );
};

export default HowToPlay;
