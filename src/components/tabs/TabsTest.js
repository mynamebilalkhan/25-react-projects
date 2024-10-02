import Tabs from "./Tabs";

const RandomComponent = () => {};

const TabsTest = () => {
  const tabs = [
    {
      label: "Tab 1",
      content: <div>Tab 1 Content</div>,
    },
    {
      label: "Tab 2",
      content: <div>Tab 2 Content</div>,
    },
    {
      label: "Tab 3",
      content: <RandomComponent />,
    },
  ];

  const handleChange = (currentTabIndex) => {
    console.log(currentTabIndex);
  };

  return <Tabs tabsContent={tabs} onChange={handleChange} />;
};

export default TabsTest;
