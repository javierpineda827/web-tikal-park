import PropTypes from "prop-types";

export default function IconArrowLeft({
  width = 12,
  height = 16,
  strokeColor = "black",
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 16"
    >
      <path
        stroke={strokeColor}
        d="M7.99992 3.33325L3.33325 7.99992M3.33325 7.99992L7.99992 12.6666M3.33325 7.99992H12.6666"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

IconArrowLeft.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  strokeColor: PropTypes.string,
};
