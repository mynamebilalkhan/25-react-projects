import { useState } from "react";
import "./RandomColor.css";

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  const randomColorUtility = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleColorType = () => {
    typeOfColor === "hex"
      ? handleCreateRandomHEXColor()
      : handleCreateRandomRGBColor();
  };

  const handleCreateRandomHEXColor = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    console.log(hexColor);
    setColor(hexColor);
  };

  const handleCreateRandomRGBColor = () => {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r}, ${g}, ${b})`);
  };

  return (
    <div className="wrapper" style={{ backgroundColor: color }}>
      <div className="container">
        <div className="button-group">
          <button onClick={() => setTypeOfColor("hex")}>
            Generate HEX Color
          </button>
          <button onClick={() => setTypeOfColor("rgb")}>
            Generate RGB Color
          </button>
          <button onClick={() => handleColorType()}>
            Generate Random Color
          </button>
        </div>
        <div className="colorDisplay">{color}</div>
      </div>
    </div>
  );
};

export default RandomColor;
