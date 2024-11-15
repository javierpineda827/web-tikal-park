import PropTypes from "prop-types";

export default function IconChevronDown({ width, height }) {
  return (
    <svg
      width={width || 12}
      height={height || 7}
      viewBox="0 0 12 7"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L6 6L11 1"
        stroke=""
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

IconChevronDown.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  strokeColor: PropTypes.string,
};
