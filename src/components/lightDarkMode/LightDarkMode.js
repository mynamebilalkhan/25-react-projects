import "./lightDarkMode.css";
import useLocalStorage from "./useLocalStorage";
const LightDarkMode = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="wrapper light-dark-mode" data-theme={theme}>
      <div className="container">
        <div className="mode-change-container">
          <h1>Change Color Mode</h1>
          <button onClick={handleToggleTheme}>Change Theme</button>
        </div>
      </div>
    </div>
  );
};

export default LightDarkMode;
