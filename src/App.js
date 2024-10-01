import "./App.css";
import Accordian from "./components/accordian/Accordian";
import ImageSlider from "./components/imageSlider/ImageSlider";
import LoadMore from "./components/loadmore/LoadMore";
import RandomColor from "./components/randomColor/RandomColor";
import StarRating from "./components/starRating/StarRating";
import TreeView from "./components/treeView/TreeView";

function App() {
  return (
    <>
      <TreeView />
      <LoadMore />
      <ImageSlider />
      <StarRating stars={5} />
      <RandomColor />
      <Accordian />
    </>
  );
}

export default App;
