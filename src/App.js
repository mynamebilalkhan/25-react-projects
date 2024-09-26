import "./App.css";
import Accordian from "./components/accordian/Accordian";
import RandomColor from "./components/randomColor/RandomColor";
import StarRating from "./components/starRating/StarRating";

function App() {
  return (
    <>
      <StarRating stars={5} />
      <RandomColor />
      <Accordian />
    </>
  );
}

export default App;
