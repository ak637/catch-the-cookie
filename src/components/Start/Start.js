import "./Start.scss";
import { useState } from "react";
import startAudio from "../../assets/audio/start.mp3";

const Start = ({ activeGame, setActiveGame, score, setScore }) => {
  const [audio] = useState(new Audio(startAudio));

  const clickHandler = () => {
    if (activeGame !== "CookieCatch") {
      setActiveGame("CookieCatch");
      setScore(0);
      audio.pause();
    }
  };

  const HowClickHandler = () => {
    if (activeGame !== "HowToPlay") {
      setActiveGame("HowToPlay");
    }
  };

  const HighscoreClickHandler = () => {
    if (activeGame !== "highscores") {
      setActiveGame("highscores");
    }
  };

  return (
    <>
      {activeGame === "start" && (
        <section className="startContainer">
          <h1 className="startContainer__title">Catch the Cookie!</h1>
          <h3
            className="startContainer__play"
            onClick={clickHandler}
            onMouseEnter={() => {
              audio.play();
            }}
            onMouseLeave={() => {
              audio.pause();
              audio.currentTime = 0;
            }}
          >
            PLAY!
          </h3>
          <div className="startContainer__subtitles">
            <p
              className="startContainer__subtitles-text"
              onClick={HowClickHandler}
            >
              How to play?
            </p>
            <p
              className="startContainer__subtitles-text"
              onClick={HighscoreClickHandler}
            >
              High Scores
            </p>
          </div>
        </section>
      )}
    </>
  );
};

export default Start;
