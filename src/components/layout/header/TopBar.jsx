import PropTypes from "prop-types";

export default function TopBar({ t }) {
  return (
    <>
      <div className="top-bar">
        <div className="container-fluid">
          <div className="text-header" style={{ height: "2rem" }}>
            {typeof t === "object" && t}
          </div>
        </div>
      </div>
    </>
  );
}

TopBar.propTypes = {
  t: PropTypes.func.isRequired,
};
