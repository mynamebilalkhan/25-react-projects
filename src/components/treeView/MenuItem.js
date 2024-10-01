import "./TreeView.css";
import { useState } from "react";
import MenuList from "./MenuList";
import { FaMinus, FaPlus } from "react-icons/fa";

const MenuItem = ({ item }) => {
  const [displayCurrentChild, setDisplayCurrentChild] = useState({});

  const handleToggleChild = (currentLabel) => {
    setDisplayCurrentChild({
      ...displayCurrentChild,
      [currentLabel]: !displayCurrentChild[currentLabel],
    });
  };

  return (
    <li>
      <div className="menu-item">
        <p>
          {item.label}
          {item && item.children && item.children.length ? (
            <span onClick={() => handleToggleChild(item.label)}>
              {displayCurrentChild[item.label] ? <FaMinus /> : <FaPlus />}
            </span>
          ) : null}
        </p>
        {item &&
        item.children &&
        item.children.length > 0 &&
        displayCurrentChild[item.label] ? (
          <MenuList list={item.children} />
        ) : null}
      </div>
    </li>
  );
};

export default MenuItem;
