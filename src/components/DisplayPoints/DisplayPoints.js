// import { useEffect } from "react";
import "./DisplayPoints.scss";

export default function Counter(props) {
  // console.log(props);
  // function useMouse() {
  //   useEffect(() => {
  //     function handle(e) {
  //       props.setMousePosition({
  //         x: e.pageX,
  //         y: e.pageY,
  //       });
  //     }
  //     document.addEventListener("mousemove", handle);
  //     return () => document.removeEventListener("mousemove", handle);
  //   });
  //   return props.mousePosition;
  // }
  // const { x, y } = useMouse();

  // const mystyle = {
  //   position: "absolute",
  //   left: props.staticPosition.x,
  //   top: props.staticPosition.y,
  // };

  return <p className="displayPoints">+1 point!</p>;
}
