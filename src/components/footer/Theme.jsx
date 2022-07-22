import arrowRight from "../../assets/rightArrow.svg";
function Theme({ theme, setTheme }) {
  return (
    <div className="theme-btn-wrapper">
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="color-theme"
      >
        Toggle Color Theme
      </button>
      <img className="arrow-icon" src={arrowRight} alt={arrowRight} />
    </div>
  );
}

export default Theme;
