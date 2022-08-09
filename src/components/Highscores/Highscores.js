import "./Highscores.scss";
import axios from "axios";
import { useEffect, useState } from "react";

const BASE_URL = "http://localhost:5500/";

const Highscores = ({ activeGame, setActiveGame }) => {
  const [highscoreData, setHighscoreData] = useState([]);

  const clickHandler = () => {
    if (activeGame !== "start") {
      setActiveGame("start");
    }
  };

  const getHighscores = async () => {
    await axios
      .get(`${BASE_URL}highscores?limit=5`)
      // .then((response) => {
      //   setHighscoreData({ response });
      //   console.log(response.data[0].name);
      .then((response) => {
        setHighscoreData(response.data);
      })
      .catch((err) => {
        setHighscoreData({
          error: err.message,
        });
      });
  };

  const highscoreIsEmpty = Object.keys(highscoreData).length === 0;

  useEffect(() => {
    if (highscoreIsEmpty) {
      getHighscores();
    }
  }, [highscoreData, highscoreIsEmpty]);

  // const data = highscoreData;

  const scoreList = highscoreData.map((highscore, index) => {
    return (
      <div key={index} className="score">
        <p className="score__text">#{index + 1}</p>
        <p className="score__text">{highscore.name}</p>
        <p className="score__text">{highscore.score}</p>
      </div>
    );
  });
  // console.log(highscoreData[0]);

  // When the data is loading...
  if (highscoreIsEmpty) {
    return (
      <section className="startContainer">
        <h1 className="startContainer__title">Highscores!</h1>
        <p className="startContainer__button">Loading</p>
      </section>
    );
  }

  // When we have the data
  return (
    <>
      {activeGame === "highscores" && (
        <section className="startContainer">
          <h1 className="startContainer__title">Highscores!</h1>
          <div className="score">
            <p className="score__text-title">Rank</p>
            <p className="score__text-title">Name</p>
            <p className="score__text-title">Score</p>
          </div>
          {scoreList}
          {/* <p className="startContainer__text">{highscoreData[0].name}</p> */}

          {/* <div>{scoreList}</div> */}
          <p className="startContainer__button" onClick={clickHandler}>
            Go back
          </p>
        </section>
      )}
    </>
  );
};

export default Highscores;
