import MenuList from "./MenuList";
import "./TreeView.css";
import { treeViewData } from "./data";

const TreeView = () => {
  //   console.log("Tree View Data: ", treeViewData);
  return <MenuList list={treeViewData} />;
};

export default TreeView;
