import PropTypes from "prop-types";

export default function IconChevronRight({
  width = 20,
  height = 21,
  strokeColor = "black",
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 7 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 11L6 6L1 1"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

IconChevronRight.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  strokeColor: PropTypes.string,
};
