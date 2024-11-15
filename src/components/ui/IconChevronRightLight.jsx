import PropTypes from "prop-types";

export default function IconChevronRightLight({ width, height }) {
  return (
    <svg
      width={width || 7}
      height={height || 12}
      viewBox="0 0 7 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 11L6 6L1 1"
        stroke=""
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
IconChevronRightLight.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  strokeColor: PropTypes.string,
};
