import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function MobileMenu({ isMobileMenu, handleMobileMenu }) {
  const [isAccordion, setIsAccordion] = useState(0);

  const handleAccordion = (key) => {
    setIsAccordion((prevState) => (prevState === key ? null : key));
  };

  return (
    <>
      <div
        className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar button-bg-2 ${
          isMobileMenu ? "sidebar-visible" : ""
        }`}
      >
        <PerfectScrollbar className="mobile-header-wrapper-inner">
          <div className="mobile-header-logo">
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
                loading="lazy"
              />
            </Link>
            <div
              className="burger-icon burger-icon-white"
              onClick={handleMobileMenu}
            />
          </div>
          <div className="mobile-header-top">
            <div className="box-author-profile">
              <div className="card-author">
                <div className="card-image">
                  {" "}
                  <img
                    src="/assets/imgs/page/homepage1/author2.png"
                    alt="Travila"
                  />
                </div>
                <div className="card-info">
                  <p className="text-md-bold neutral-1000">Alice Roses</p>
                  <p className="text-xs neutral-1000">London, England</p>
                </div>
              </div>
              <Link className="btn btn-black" href="#">
                Logout
              </Link>
            </div>
          </div>
          <div className="mobile-header-content-area">
            <div className="perfect-scroll">
              <div className="mobile-menu-wrap mobile-header-border">
                <nav>
                  <ul className="mobile-menu font-heading">
                    <li
                      className={`has-children ${
                        isAccordion === 1 ? "active" : ""
                      }`}
                    >
                      <span
                        className="menu-expand"
                        onClick={() => handleAccordion(1)}
                      >
                        <i className="arrow-small-down"></i>
                      </span>
                      <Link className="active" href="/">
                        Home Pages
                      </Link>
                      <ul
                        className="sub-menu"
                        style={{
                          display: `${isAccordion == 1 ? "block" : "none"}`,
                        }}
                      >
                        <li>
                          <Link href="/">Home 1 - All services</Link>
                        </li>
                        <li>
                          <Link href="/index-2">Home 2 - All services</Link>
                        </li>
                        <li>
                          <Link href="/index-3">Home 3 - All services</Link>
                        </li>
                        <li>
                          <Link href="/index-4">Home 4 - All services</Link>
                        </li>
                        <li>
                          <Link href="/index-5">Home 5 - Tours</Link>
                        </li>
                        <li>
                          <Link href="/index-6">Home 6 - Activities</Link>
                        </li>
                        <li>
                          <Link href="/index-7">Home 7 - Destinations</Link>
                        </li>
                        <li>
                          <Link href="/index-8">Home 8 - Hotels</Link>
                        </li>
                        <li>
                          <Link href="/index-9">Home 9 - Rental Car</Link>
                        </li>
                        <li>
                          <Link href="/index-10">
                            Home 10 - Rental Property
                          </Link>
                        </li>
                        <li>
                          <Link href="/index-11">Home 11 - Tickets</Link>
                        </li>
                      </ul>
                    </li>
                    {/* Rest of the menu items */}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </PerfectScrollbar>
      </div>
    </>
  );
}

MobileMenu.propTypes = {
  isMobileMenu: PropTypes.bool.isRequired,
  handleMobileMenu: PropTypes.func.isRequired,
};
