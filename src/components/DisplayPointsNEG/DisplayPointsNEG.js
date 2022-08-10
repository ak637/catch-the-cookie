import { useEffect } from "react";
import "./DisplayPointsNEG.scss";

export default function Counter(props) {
  function useMouse() {
    useEffect(() => {
      function handle(e) {
        props.setMousePosition({
          x: e.pageX,
          y: e.pageY,
        });
      }
      document.addEventListener("mousemove", handle);
      return () => document.removeEventListener("mousemove", handle);
    });
    return props.mousePosition;
  }
  const { x, y } = useMouse();

  const mystyle = {
    position: "absolute",
    left: props.staticPosition.x,
    top: props.staticPosition.y,
  };

  return (
    <p className="displayPointsNEG" style={mystyle}>
      -{props.points.toFixed(0)} points!
    </p>
  );
}
