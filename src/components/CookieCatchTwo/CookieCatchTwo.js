import "./CookieCatchTwo.scss";
import apple from "../../assets/icons/red-apple.png";
import cookie from "../../assets/icons/cookie.png";
import croissant from "../../assets/icons/croissant.png";
import doughnut from "../../assets/icons/doughnut.png";
import kiwi from "../../assets/icons/kiwi.png";

function CookieCatchTwo({ score, setScore }) {
  const images = () => {
    const imgUrls = [apple, cookie, croissant, doughnut, kiwi];
    const imgArray = [];

    const clickHandler = (e) => {
      if (e.target.currentSrc.search("cookie") > 0) {
        console.log("cookie found");
      }
    };

    for (let i = 0; i < 100; i++) {
      const rndInt = Math.floor(Math.random() * 5) + 1;

      imgArray.push(
        <img
          key={i}
          onClick={clickHandler}
          className="CookieMarquee__image"
          src={imgUrls[rndInt - 1]}
          alt="red-apple"
        />
      );
    }

    return imgArray;
  };

  return (
    <section className="CookieMarquee">
      <div className="CookieMarquee__stats">
        <p className="CookieMarquee__stats-score">Score: {score}</p>
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
