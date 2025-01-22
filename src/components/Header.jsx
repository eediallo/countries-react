import lightMode from "../../src/assets/light_mode.svg";
import darkMode from "../../src/assets/dark_mode.svg";
import PropTypes from "prop-types";

export default function Header({ onSelect, isDarkMode }) {
  return (
    <header>
      <h1>Where in the world?</h1>
      <div onClick={onSelect} className="theme-container">
        {!isDarkMode ? (
          <img src={darkMode} alt="dark mode" />
        ) : (
          <img src={lightMode} alt="light mode" />
        )}
      </div>
    </header>
  );
}

Header.propTypes = {
  onSelect: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};
