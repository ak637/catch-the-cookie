import "./Start.scss";
import { useState } from "react";
import startAudio from "../../assets/audio/start.mp3";
import CookieCatch from "../CookieCatch/CookieCatch";
import { render } from "@testing-library/react";

const Start = () => {
  const [audio] = useState(new Audio(startAudio));

  const [activeGame, setActiveGame] = useState("start");
  const clickHandler = () => {
    if (activeGame !== "CookieCatch") {
      render(<CookieCatch />);
      setActiveGame("CookieCatch");
    }
  };

  return (
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
        <p className="startContainer__subtitles-text">How to play?</p>
        <p className="startContainer__subtitles-text">High Scores</p>
      </div>
    </section>
  );
};

export default Start;
