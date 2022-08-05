import "./CookieCatchTwo.scss";
import { useEffect, useState } from "react";
import Counter from "../Counter/Counter";
import apple from "../../assets/icons/red-apple.png";
import cookie from "../../assets/icons/cookie.png";
import croissant from "../../assets/icons/croissant.png";
import doughnut from "../../assets/icons/doughnut.png";
import kiwi from "../../assets/icons/kiwi.png";

function CookieCatchTwo({ score, setScore, setActiveGame }) {
  const [icons, setIcons] = useState([]);
  const [roundOver, setRounderOver] = useState(false);

  const clickHandler = (e) => {
    if (e.target.currentSrc.search("cookie") > 0) {
      setScore((prevState) => prevState + 1);
      e.target.style.display = "none";
    }
  };

  useEffect(() => {
    if (roundOver) {
      setActiveGame("start");
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
        <p className="CookieMarquee__stats-score">Score: {score}</p>

        <div className="CookieMarquee__stats-time">
          <Counter time={15} roundOver={setRounderOver} />
        </div>
      </div>
      <div className="CookieMarquee__scrollContainer">
        <div className="CookieMarquee__scrollText-ltr">{icons}</div>
        <div className="CookieMarquee__scrollText-rtl">{icons}</div>
        <div className="CookieMarquee__scrollText-ltr">{icons}</div>
        <div className="CookieMarquee__scrollText-rtl">{icons}</div>
        <div className="CookieMarquee__scrollText-ltr">{icons}</div>
        <div className="CookieMarquee__scrollText-rtl">{icons}</div>
        <div className="CookieMarquee__scrollText-ltr">{icons}</div>
      </div>
    </section>
  );
}

export default CookieCatchTwo;
