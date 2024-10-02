import Accordian from "../components/accordian/Accordian";
import ImageSlider from "../components/imageSlider/ImageSlider";
import LightDarkMode from "../components/lightDarkMode/LightDarkMode";
import LoadMore from "../components/loadmore/LoadMore";
import ModalWrap from "../components/modal/ModalWrap";
import QRCodeGenerator from "../components/qrCodeGenerator/QRCodeGenerator";
import RandomColor from "../components/randomColor/RandomColor";
import ScrollIndicator from "../components/scrollIndicator/ScrollIndicator";
import StarRating from "../components/starRating/StarRating";
import TabsTest from "../components/tabs/TabsTest";
import TreeView from "../components/treeView/TreeView";

const HomePage = () => {
  return (
    <>
      <ModalWrap />
      <TabsTest />
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
