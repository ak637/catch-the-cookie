import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import "./CookieCatch3.scss";
import DisplayPoints from "../DisplayPointsME/DisplayPointsME";
import exit from "../../assets/icons/exit-sign.png";
import correctAudio from "../../assets/audio/correct.wav";
import countdownAudio from "../../assets/audio/countdown.wav";
import goldCookie from "../../assets/icons/goldenCookie.png";

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
  const [difficulty, setDifficulty] = useState(1.5);
  const [counter, setCounter] = useState(1000);
  const [displayPoints, setDisplayPoints] = useState(false);
  const [audio] = useState(new Audio(correctAudio));
  const [audiocountdown] = useState(new Audio(countdownAudio));
  const [points, setPoints] = useState(0);

  // function useMouse() {
  const [staticPosition, setStaticPosition] = useState({
    x: null,
    y: null,
  });
  const [mousePosition, setMousePosition] = useState({
    x: null,
    y: null,
  });

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  if (counter === 3) {
    audiocountdown.play();
  }

  useEffect(() => {
    function endGame() {
      if (counter === 0) {
        setActiveGame("CookieCatchTwo");
        return;
      }
    }

    endGame();
  }, [counter, setActiveGame]);

  function exitHandler() {
    setActiveGame("start");
    setScore(0);
    audiocountdown.pause();
  }

  const canvasRef = useRef();
  const clickHandler = () => {
    setCounter(counter + 1);
    setScore(score + 1);
    setPoints(1);
    audio.play();
    audio.currentTime = 0;
    setDifficulty(difficulty - 0.1);
    setDisplayPoints(true);
    setStaticPosition({
      x: mousePosition.x,
      y: mousePosition.y,
    });
    setTimeout(() => {
      setDisplayPoints(false);
    }, 500);
  };
  const clickHandlerGolden = () => {
    document.getElementById("test").style.display = "none";
    setCounter(counter + 5);
    setScore(score * 1.5);
    setPoints(score / 2);
    audio.play();
    audio.currentTime = 0;
    setDifficulty(difficulty - 0.1);
    setDisplayPoints(true);
    setStaticPosition({
      x: mousePosition.x,
      y: mousePosition.y,
    });
    setTimeout(() => {
      setDisplayPoints(false);
    }, 500);
  };

  const canvasRef2 = useRef();
  const clickHandler2 = () => {
    setCounter(counter + 1);
    setScore(score + 1);
    setPoints(1);
    audio.play();
    audio.currentTime = 0;
    setDifficulty(difficulty - 0.1);
    setDisplayPoints(true);
    setStaticPosition({
      x: mousePosition.x,
      y: mousePosition.y,
    });
    setTimeout(() => {
      setDisplayPoints(false);
    }, 500);
  };
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });
    tl.to(canvasRef.current, difficulty, {
      ease: "rough",
      x: Math.floor(Math.random() * width),
      y: Math.floor(Math.random() * height),
      onComplete: function () {
        this.vars.x = Math.floor(Math.random() * width);
        this.vars.y = Math.floor(Math.random() * height);
        this.invalidate();
      },
    });
  }, [difficulty, height, width]);
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });
    tl.to(canvasRef2.current, difficulty, {
      ease: "rough",
      x: Math.floor(Math.random() * width),
      y: Math.floor(Math.random() * height),
      onComplete: function () {
        this.vars.x = Math.floor(Math.random() * width);
        this.vars.y = Math.floor(Math.random() * height);
        this.invalidate();
      },
    });
  }, [difficulty, height, width]);

  const canvasRef3 = useRef();
  const clickHandler3 = () => {
    setCounter(counter + 1);
    setScore(score + 1);
    setPoints(1);
    audio.play();
    audio.currentTime = 0;
    setDifficulty(difficulty - 0.1);
    setDisplayPoints(true);
    setStaticPosition({
      x: mousePosition.x,
      y: mousePosition.y,
    });
    setTimeout(() => {
      setDisplayPoints(false);
    }, 500);
  };
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });
    tl.to(canvasRef3.current, difficulty, {
      ease: "rough",
      x: Math.floor(Math.random() * width),
      y: Math.floor(Math.random() * height),
      onComplete: function () {
        this.vars.x = Math.floor(Math.random() * width);
        this.vars.y = Math.floor(Math.random() * height);
        this.invalidate();
      },
    });
  }, [difficulty, height, width]);
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });
    tl.to(canvasRef3.current, difficulty, {
      ease: "rough",
      x: Math.floor(Math.random() * width),
      y: Math.floor(Math.random() * height),
      onComplete: function () {
        this.vars.x = Math.floor(Math.random() * width);
        this.vars.y = Math.floor(Math.random() * height);
        this.invalidate();
      },
    });
  }, [difficulty, height, width]);

  const canvasRef4 = useRef();
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });
    tl.to(canvasRef4.current, 0.8, {
      ease: "rough",
      x: Math.floor(Math.random() * width),
      y: Math.floor(Math.random() * height),
      onComplete: function () {
        this.vars.x = Math.floor(Math.random() * width);
        this.vars.y = Math.floor(Math.random() * height);
        this.invalidate();
      },
    });
  }, [difficulty, height, width]);

  // const { x, y } = useMouse();
  return (
    <div className="CookieCatchContainer">
      <div className="CookieCatchContainer__header">
        <p className="CookieCatchContainer__text">
          Difficulty: {difficulty.toFixed(2)}
        </p>
        <p className="CookieCatchContainer__text">Time left: {counter}</p>{" "}
        {/* <p className="CookieCatchContainer__text">X: {x}</p>
        <p className="CookieCatchContainer__text">Y: {y}</p> */}
        <p className="CookieCatchContainer__text">Score: {score}</p>
        <img
          className="CookieCatchContainer__image"
          src={exit}
          alt="exit sign"
          onClick={exitHandler}
        />
      </div>
      {displayPoints === true && (
        <DisplayPoints
          points={points}
          mousePosition={mousePosition}
          setMousePosition={setMousePosition}
          staticPosition={staticPosition}
        />
      )}
      <div className="CookieCatchContainer__canvas" ref={canvasRef}>
        <img
          className="CookieCatchContainer__e"
          src="https://images.emojiterra.com/google/noto-emoji/v2.034/128px/1f36a.png"
          alt="Game"
          onClick={clickHandler}
          draggable="false"
        />
      </div>
      <div className="CookieCatchContainer__canvas" ref={canvasRef2}>
        <img
          className="CookieCatchContainer__e"
          src="https://images.emojiterra.com/google/noto-emoji/v2.034/128px/1f36a.png"
          alt="Game"
          onClick={clickHandler2}
          draggable="false"
        />
      </div>
      <div className="CookieCatchContainer__canvas" ref={canvasRef3}>
        <img
          className="CookieCatchContainer__e"
          src="https://images.emojiterra.com/google/noto-emoji/v2.034/128px/1f36a.png"
          alt="Game"
          onClick={clickHandler3}
          draggable="false"
        />
      </div>
      <div className="CookieCatchContainer__canvas" ref={canvasRef4}>
        <img
          id="test"
          className="CookieCatchContainer__golden"
          src={goldCookie}
          alt="Game"
          onClick={clickHandlerGolden}
          draggable="false"
        />
      </div>
    </div>
  );
}

export default CookieCatch;
