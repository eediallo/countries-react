import PropTypes from "prop-types";

export default function Option({ option }) {
  return <option value={option}>{option}</option>;
}

Option.propTypes = {
  option: PropTypes.string.isRequired,
};
