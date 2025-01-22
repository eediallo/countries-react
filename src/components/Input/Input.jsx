import PropTypes from "prop-types";
import "./Input.css";

export default function Input({ searchTerm, onSelect }) {
  return (
    <div className="input-search-container input-wrapper">
      <span className="material-symbols-outlined search-icon">search</span>
      <input
        value={searchTerm}
        type="text"
        placeholder="Search for a country"
        name="search-for-country"
        id="search-for-country"
        onInput={onSelect}
      />
    </div>
  );
}

Input.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};
