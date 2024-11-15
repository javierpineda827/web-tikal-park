import PropTypes from "prop-types";

export default function IconArrowRightSingle({
  width = 16,
  height = 16,
  strokeColor = "currentColor",
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 15L15 8L8 1M15 8L1 8"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

IconArrowRightSingle.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  strokeColor: PropTypes.string,
};
