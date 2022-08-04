import "./CookieCatchTwo.scss";
import apple from "../../assets/icons/red-apple.png";
import cookie from "../../assets/icons/cookie.png";
import croissant from "../../assets/icons/croissant.png";
import doughnut from "../../assets/icons/doughnut.png";
import kiwi from "../../assets/icons/kiwi.png";
import { useEffect, useState } from "react";

function CookieCatchTwo({ score, setScore, setActiveGame }) {
  const [counter, setCounter] = useState(15);
  // const [icons, setIcons] = useState([]);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  useEffect(() => {
    function endGame() {
      if (counter === 0) {
        // setActiveGame("CookieCatchTwo");
        return;
      }
    }

    endGame();
  }, [counter, setActiveGame]);

  const images = () => {
    const imgUrls = [apple, cookie, croissant, doughnut, kiwi];
    const imgArray = [];

    const clickHandler = (e) => {
      if (e.target.currentSrc.search("cookie") > 0) {
        setScore(score + 1);
      }
    };

    for (let i = 0; i < 100; i++) {
      const rndInt = Math.floor(Math.random() * 5) + 1;

      // setIcons((oldArray) => [
      //   ...oldArray,
      //   <img
      //     key={i}
      //     onClick={clickHandler}
      //     className="CookieMarquee__image"
      //     src={imgUrls[rndInt - 1]}
      //     alt="food icon"
      //   />,
      // ]);

      imgArray.push(
        <img
          key={i}
          onClick={clickHandler}
          className="CookieMarquee__image"
          src={imgUrls[rndInt - 1]}
          alt="food icon"
        />
      );
    }

    return imgArray;
  };

  return (
    <section className="CookieMarquee">
      <div className="CookieMarquee__stats">
        <p className="CookieMarquee__stats-score">Score: {score}</p>
        <p className="CookieMarquee__stats-time">Time left: {counter}</p>
      </div>
      <div className="CookieMarquee__scrollContainer">
        <div className="CookieMarquee__scrollText-ltr">{images()}</div>
        <div className="CookieMarquee__scrollText-rtl">{images()}</div>
        <div className="CookieMarquee__scrollText-ltr">{images()}</div>
        <div className="CookieMarquee__scrollText-rtl">{images()}</div>
        <div className="CookieMarquee__scrollText-ltr">{images()}</div>
        <div className="CookieMarquee__scrollText-rtl">{images()}</div>
        <div className="CookieMarquee__scrollText-ltr">{images()}</div>
        {/* <div className="CookieMarquee__scrollText-rtl">{images()}</div> */}
      </div>
    </section>
  );
}

export default CookieCatchTwo;
