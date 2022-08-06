import { useEffect, useState } from "react";
import "../Counter/Counter.scss";
import countdownAudio from "../../assets/audio/countdown.wav";

export default function Counter(props) {
  const [counter, setCounter] = useState(props.time);
  const [audiocountdown] = useState(new Audio(countdownAudio));

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  if (counter === 3) {
    audiocountdown.play();
  }

  useEffect(() => {
    if (counter === 0) {
      props.roundOver(true);
    }
  }, [counter, props]);

  return <p className="counter">Time left: {counter}</p>;
}
