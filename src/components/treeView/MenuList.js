import MenuItem from "./MenuItem";
import "./TreeView.css";

const MenuList = ({ list = [] }) => {
  return (
    <ul className="menuList-container">
      {list && list.length
        ? list.map((listitem, index) => (
            <MenuItem key={index} item={listitem} />
          ))
        : null}
    </ul>
  );
};

export default MenuList;
