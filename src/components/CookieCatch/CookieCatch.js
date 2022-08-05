import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import "./CookieCatch.scss";
import exit from "../../assets/icons/exit-sign.png";

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
  const [counter, setCounter] = useState(15);

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

  function displayPoints() {
    return <div>+10 points!</div>;
  }

  function exitHandler() {
    setActiveGame("start");
    setScore(0);
  }

  const canvasRef = useRef();
  const increaseDifficulty = () => {
    displayPoints();
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
      <div className="CookieCatchContainer__header">
        <p className="CookieCatchContainer__text">
          Difficulty: {difficulty.toFixed(2)}
        </p>
        <p className="CookieCatchContainer__text">Time left: {counter}</p>
        <p className="CookieCatchContainer__text">Score: {score}</p>
        <img
          className="CookieCatchContainer__image"
          src={exit}
          alt="exit sign"
          onClick={exitHandler}
        />
      </div>
      <div className="CookieCatchContainer__canvas" ref={canvasRef}>
        <img
          className="CookieCatchContainer__e"
          src="https://images.emojiterra.com/google/noto-emoji/v2.034/128px/1f36a.png"
          alt="Game"
          onClick={increaseDifficulty}
          draggable="false"
        />
      </div>
    </div>
  );
}

export default CookieCatch;
