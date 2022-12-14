import "./BonusLevel.scss";
import { useEffect, useState } from "react";
import Counter from "../Counter/Counter";
import apple from "../../assets/icons/red-apple.png";
import cookie from "../../assets/icons/cookie.png";
import croissant from "../../assets/icons/croissant.png";
import doughnut from "../../assets/icons/doughnut.png";
import kiwi from "../../assets/icons/kiwi.png";
import munch from "../../assets/audio/munch.mp3";
import exit from "../../assets/icons/exit-sign.png";

function CookieCatchTwo({
  score,
  setScore,
  setActiveGame,
  // multiplier,
  // setMultiplier,
}) {
  const [icons, setIcons] = useState([]);
  const [roundOver, setRounderOver] = useState(false);
  const [audio] = useState(new Audio(munch));

  function exitHandler() {
    setActiveGame("start");
    setScore(0);
  }

  const clickHandler = (e) => {
    if (e.target.currentSrc.search("cookie") > 0) {
      // setMultiplier((prevState) => prevState + 1);
      // console.log(multiplier);
      audio.currentTime = 0;
      audio.play();
      // let multipliedScore = 1 * multiplier;
      // console.log("MP:", multipliedScore);
      setScore((prevState) => prevState + 1);
      e.target.style.display = "none";
    }
  };

  useEffect(() => {
    if (roundOver) {
      setActiveGame("final");
    }
  }, [roundOver, setActiveGame]);

  const images = () => {
    const imgUrls = [apple, cookie, croissant, doughnut, kiwi];

    for (let i = 0; i < 100; i++) {
      const rndInt = Math.floor(Math.random() * 5) + 1;

      if (icons.length < 100) {
        setIcons((oldArray) => {
          return [
            ...oldArray,
            <img
              // key={i}
              onClick={clickHandler}
              className="CookieMarquee__image"
              src={imgUrls[rndInt - 1]}
              alt="food icon"
            />,
          ];
        });
      }
    }
  };

  useEffect(() => {
    images();
  }, []);

  return (
    <section className="CookieMarquee">
      <div className="CookieMarquee__stats">
        <Counter time={10} roundOver={setRounderOver} />
        <p className="CookieMarquee__stats-score">Score: {score.toFixed(0)}</p>
        {/* <p className="CookieMarquee__stats-score">Multiplier: {multiplier}x</p> */}
        <img
          className="CookieMarquee__exit"
          src={exit}
          alt="exit sign"
          onClick={exitHandler}
        />
      </div>
      <div className="CookieMarquee__scrollContainer">
        <div className="CookieMarquee__scrollText-ltr">{icons}</div>
        <div className="CookieMarquee__scrollText-rtl">{icons}</div>
        <div className="CookieMarquee__scrollText-ltr">{icons}</div>
        <div className="CookieMarquee__scrollText-rtl">{icons}</div>
        <div className="CookieMarquee__scrollText-ltr">{icons}</div>
        <div className="CookieMarquee__scrollText-rtl">{icons}</div>
        <div className="CookieMarquee__scrollText-ltr">{icons}</div>
        <div className="CookieMarquee__scrollText-rtl">{icons}</div>
        <div className="CookieMarquee__scrollText-ltr">{icons}</div>
        <div className="CookieMarquee__scrollText-rtl">{icons}</div>
      </div>
    </section>
  );
}

export default CookieCatchTwo;
