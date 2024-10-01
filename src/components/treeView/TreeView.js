import MenuList from "./MenuList";
import "./TreeView.css";
import { treeViewData } from "./data";

const TreeView = () => {
  //   console.log("Tree View Data: ", treeViewData);
  return (
    <div className="tree-view-container">
      <MenuList list={treeViewData} />
    </div>
  );
};

export default TreeView;
