import { useState } from "react";
import "./Tabs.css";

const Tabs = ({ tabsContent, onChange }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleOnClick = (getCurrentIndex) => {
    setCurrentTabIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  };

  return (
    <div className="wrapper" style={{ flexDirection: "column" }}>
      <div className="heading">
        {tabsContent.map((tabitem, index) => (
          <div
            className="tab-buttons"
            onClick={() => handleOnClick(index)}
            key={tabitem.label}
          >
            <span className="label">{tabitem.label}</span>
          </div>
        ))}
      </div>
      <div className="content">
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
};

export default Tabs;
