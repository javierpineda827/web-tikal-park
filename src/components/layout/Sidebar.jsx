import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CurrencyDropdown from "@/components/elements/CurrencyDropdown";
import LanguageDropdown from "@/components/elements/LanguageDropdown";
import PerfectScrollbar from "react-perfect-scrollbar";

export default function Sidebar({ isSidebar, handleSidebar }) {
  return (
    <>
      <div
        className={`sidebar-canvas-wrapper perfect-scrollbar button-bg-2 ${
          isSidebar ? "sidebar-canvas-visible" : ""
        }`}
      >
        <PerfectScrollbar className="sidebar-canvas-container">
          <div className="sidebar-canvas-head">
            <div className="sidebar-canvas-logo">
              {" "}
              <Link className="d-flex" href="/">
                <img
                  className="light-mode"
                  alt="Travila"
                  src="/assets/imgs/template/logo.png"
                  width={80}
                  height={42}
                />
                <img
                  className="dark-mode"
                  alt="Travila"
                  src="/assets/imgs/template/logo-w.png"
                  width={80}
                  height={42}
                />
              </Link>
            </div>
            <div className="sidebar-canvas-lang">
              <LanguageDropdown />
              <CurrencyDropdown />
              <a className="close-canvas" onClick={handleSidebar}>
                {" "}
                <img
                  alt="Travila"
                  src="/assets/imgs/template/icons/close.png"
                />
              </a>
            </div>
          </div>
          <div className="sidebar-canvas-content">
            {/* Rest of your sidebar content */}
          </div>
        </PerfectScrollbar>
      </div>
    </>
  );
}

Sidebar.propTypes = {
  isSidebar: PropTypes.bool.isRequired,
  handleSidebar: PropTypes.func.isRequired,
};
