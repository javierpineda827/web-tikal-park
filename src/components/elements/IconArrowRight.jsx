import PropTypes from "prop-types";

export default function IconArrowRight({
  width = 16,
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
        d="M7.99992 12.6666L12.6666 7.99992L7.99992 3.33325M12.6666 7.99992L3.33325 7.99992"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

IconArrowRight.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  strokeColor: PropTypes.string,
};
