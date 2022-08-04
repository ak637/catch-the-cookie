import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import "./CookieCatchTwo.scss";

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

function CookieCatchTwo({ score, setScore }) {
  const { height, width } = useWindowDimensions();
  const [difficulty, setDifficulty] = useState(2);
  //   const [score, setScore] = useState(0);
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
    <div className="CookieCatchContainerTwo">
      <p className="CookieCatchContainerTwo__text">Difficulty: {difficulty}</p>
      <p className="CookieCatchContainerTwo__text">Score: {score}</p>
      <div id="CookieCatchContainerTwo__canvas" ref={canvasRef}>
        <img
          className="CookieCatchContainerTwo__e"
          src="https://images.emojiterra.com/google/noto-emoji/v2.034/128px/1f36a.png"
          alt="Game"
          onClick={increaseDifficulty}
        />
      </div>
    </div>
  );
}

export default CookieCatchTwo;
