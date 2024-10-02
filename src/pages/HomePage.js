import Accordian from "../components/accordian/Accordian";
import ImageSlider from "../components/imageSlider/ImageSlider";
import LightDarkMode from "../components/lightDarkMode/LightDarkMode";
import LoadMore from "../components/loadmore/LoadMore";
import QRCodeGenerator from "../components/qrCodeGenerator/QRCodeGenerator";
import RandomColor from "../components/randomColor/RandomColor";
import ScrollIndicator from "../components/scrollIndicator/ScrollIndicator";
import StarRating from "../components/starRating/StarRating";
import TreeView from "../components/treeView/TreeView";

const HomePage = () => {
  return (
    <>
      <ScrollIndicator />
      <TreeView />
      <LightDarkMode />
      <QRCodeGenerator />
      <StarRating />
      <RandomColor />
      <LoadMore />
      <ImageSlider />
      <Accordian />
    </>
  );
};

export default HomePage;
