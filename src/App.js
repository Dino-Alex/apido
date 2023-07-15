import "./App.css";
import { useWindowSize } from "./useWindowSize";
import backgroundImage from "./image/background.png";

function App() {
  const { size } = useWindowSize({ gameWidth: 1920, gameHeight: 3405 });
  const { rotate, width, height, marginLeft } = size;

  return (
    <div
      id="root"
      className="container-screen mobile-rotater"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height,
        width,
        transform: `rotate(${rotate})`,
        marginLeft: marginLeft,
      }}
    ></div>
  );
}

export default App;
