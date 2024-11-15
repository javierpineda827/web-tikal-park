import PropTypes from "prop-types";
import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import LogoButton from "./header/LogoButton";
import MenuItem from "./header/MenuItem";
import { useTranslation } from "react-i18next";

export default function MobileMenu({ isMobileMenu, handleMobileMenu }) {
  const { t } = useTranslation("header");
  const mobile_menu = t("header.mobile_menu", {
    returnObjects: true,
  });

  const [isAccordion, setIsAccordion] = useState(0);

  const handleAccordion = (key) => {
    setIsAccordion((prevState) => (prevState === key ? 0 : key));
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
            <LogoButton href="/" />
            <div
              className="burger-icon burger-icon-white"
              onClick={handleMobileMenu}
            />
          </div>

          <div className="mobile-header-content-area">
            <div className="perfect-scroll">
              <div className="mobile-menu-wrap mobile-header-border">
                <nav>
                  <ul className="mobile-menu font-heading">
                    {mobile_menu.menu_items &&
                      mobile_menu.menu_items.map((item, idx) => (
                        <MenuItem
                          key={idx}
                          title={item.title}
                          links={item.links}
                          currentAccordion={idx}
                          isAccordion={isAccordion}
                          handleAccordion={handleAccordion}
                          index={idx + 1}
                          href={item.href}
                        />
                      ))}
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
