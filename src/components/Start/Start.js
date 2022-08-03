import "./Start.scss";
import { useState } from "react";
import startAudio from "../../assets/audio/start.mp3";

const Start = () => {
  const [audio] = useState(new Audio(startAudio));
  return (
    <section className="startContainer">
      <h1 className="startContainer__title">Catch the Cookie!</h1>
      <h3
        className="startContainer__play"
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
