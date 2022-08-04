import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import "./CookieCatch.scss";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

function CookieCatch({ score, setScore, setActiveGame }) {
  const { height, width } = useWindowDimensions();
  const [difficulty, setDifficulty] = useState(2);
  const [counter, setCounter] = useState(10);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  useEffect(() => {
    function endGame() {
      if (counter === 0) {
        setActiveGame("CookieCatchTwo");
        return;
      }
    }

    endGame();
  }, [counter, setActiveGame]);

  const canvasRef = useRef();
  console.log("score->", score);

  const increaseDifficulty = () => {
    setScore(score + 1);
    setDifficulty(difficulty - 0.1);
  };

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });
    tl.to(canvasRef.current, difficulty, {
      ease: "none",
      x: Math.floor(Math.random() * width),
      y: Math.floor(Math.random() * height),
      onComplete: function () {
        this.vars.x = Math.floor(Math.random() * width);
        this.vars.y = Math.floor(Math.random() * height);
        this.invalidate();
      },
    });
  });

  return (
    <div className="CookieCatchContainer">
      <p className="CookieCatchContainerTwo__text">Difficulty: {difficulty}</p>
      <p className="CookieCatchContainerTwo__text">Score: {score}</p>
      <p className="CookieCatchContainerTwo__text">Time left: {counter}</p>
      <div id="CookieCatchContainer__canvas" ref={canvasRef}>
        <img
          className="CookieCatchContainer__e"
          src="https://images.emojiterra.com/google/noto-emoji/v2.034/128px/1f36a.png"
          alt="Game"
          onClick={increaseDifficulty}
        />
      </div>
    </div>
  );
}

export default CookieCatch;
