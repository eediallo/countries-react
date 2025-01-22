import PropTypes from "prop-types";
import "./Input.css";
import Section from "../Section";

export default function Input({ searchTerm, onSelect }) {
  return (
    <Section
      className="input-search-container input-wrapper"
      sectionContainer="section"
    >
      <span className="material-symbols-outlined search-icon">search</span>
      <input
        value={searchTerm}
        type="text"
        placeholder="Search for a country"
        name="search-for-country"
        id="search-for-country"
        onInput={onSelect}
      />
    </Section>
  );
}

Input.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};
