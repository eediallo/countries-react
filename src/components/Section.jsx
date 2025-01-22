import PropTypes from "prop-types";

export default function Section({ children, sectionContainer, ...props }) {
  const SectionContainer = sectionContainer;
  return <SectionContainer {...props}>{children}</SectionContainer>;
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  sectionContainer: PropTypes.elementType.isRequired,
};
