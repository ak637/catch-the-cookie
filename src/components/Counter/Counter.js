import { useEffect, useState } from "react";
import "../Counter/Counter.scss";

export default function Counter(props) {
  const [counter, setCounter] = useState(props.time);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  useEffect(() => {
    if (counter === 0) {
      props.roundOver(true);
    }
  }, [counter, props]);

  return <p className="counter">Time left: {counter}</p>;
}
