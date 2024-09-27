import MenuItem from "./MenuItem";

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
