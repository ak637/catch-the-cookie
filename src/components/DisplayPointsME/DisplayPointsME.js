import { useEffect } from "react";
import "./DisplayPointsME.scss";

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
    <p className="displayPoints" style={mystyle}>
      +{props.points} points!
    </p>
  );
}
