import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Accordian from "./components/accordian/Accordian";
import ImageSlider from "./components/imageSlider/ImageSlider";
import LightDarkMode from "./components/lightDarkMode/LightDarkMode";
import LoadMore from "./components/loadmore/LoadMore";
import QRCodeGenerator from "./components/qrCodeGenerator/QRCodeGenerator";
import RandomColor from "./components/randomColor/RandomColor";
import ScrollIndicator from "./components/scrollIndicator/ScrollIndicator";
import StarRating from "./components/starRating/StarRating";
import TreeView from "./components/treeView/TreeView";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import TabsTest from "./components/tabs/TabsTest";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/accordian" element={<Accordian />} />
      <Route path="/random-color" element={<RandomColor />} />
      <Route path="/star-rating" element={<StarRating stars={5} />} />
      <Route path="/image-slider" element={<ImageSlider />} />
      <Route path="/load-more" element={<LoadMore />} />
      <Route path="/tree-view" element={<TreeView />} />
      <Route path="/qr-code-generator" element={<QRCodeGenerator />} />
      <Route path="/light-dark-mode" element={<LightDarkMode />} />
      <Route path="/scroll-indicator" element={<ScrollIndicator />} />
      <Route path="/tabs" element={<TabsTest />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
