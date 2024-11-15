import PropTypes from "prop-types";

export default function IconHeartOutline({
  width = 20,
  height = 18,
  strokeColor = "black",
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

IconHeartOutline.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  strokeColor: PropTypes.string,
};
