import { useState } from "react";
import "./Accordian.css";
import data from "./data";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [multiSelection, setMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (itemID) => {
    setSelected(itemID === selected ? null : itemID);
  };

  const handleMultiSelection = (itemID) => {
    let multipleArr = [...multiple];
    const findIndexOfCurrentID = multipleArr.indexOf(itemID);

    // console.log(findIndexOfCurrentID);
    if (findIndexOfCurrentID === -1) multipleArr.push(itemID);
    else multipleArr.splice(findIndexOfCurrentID, 1);

    setMultiple(multipleArr);
    // console.log(selected, multipleArr);
  };

  return (
    <div className="wrapper">
      <div className="accordian">
        <button onClick={() => setMultiSelection(!multiSelection)}>
          Enable Multi Selection
        </button>
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="item" key={item.id}>
              <div
                onClick={
                  multiSelection
                    ? () => handleMultiSelection(item.id)
                    : () => handleSingleSelection(item.id)
                }
                className="title"
              >
                <h3>{item.question}</h3>
                <span>+</span>
              </div>
              {selected === item.id || multiple.indexOf(item.id) !== -1 ? (
                <div className="content">{item.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No Data Found!</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
