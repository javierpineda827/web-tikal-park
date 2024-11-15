import LanguageDropdown from "@/components/elements/LanguageDropdown";
import PropTypes from "prop-types";

import { lazy } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import TopBar from "./TopBar";
import LogoButton from "./LogoButton";
import { NavLink } from "react-router-dom";

const CardHomeLink = lazy(() => import("@/components/elements/CardHomeLink"));
const FeaturedList = lazy(() => import("@/components/elements/FeaturedList"));
const ThemeSwitch = lazy(() => import("@/components/elements/ThemeSwitch"));
const Polaroid = lazy(() => import("@/components/elements/Polaroid"));

export default function Header1({
  scroll,
  handleLogin,
  handleMobileMenu,
  handleRegister,
  handleSidebar,
}) {
  const { t } = useTranslation("header");
  const cardData1 = t("header.nav_menu.home.card_1", { returnObjects: true });
  const cardData2 = t("header.nav_menu.home.card_2", { returnObjects: true });
  const cardData3 = t("header.nav_menu.home.card_3", { returnObjects: true });
  const featuredItems1 = t("header.nav_menu.art.featured_list_1", {
    returnObjects: true,
  });
  const featuredItems2 = t("header.nav_menu.art.featured_list_2", {
    returnObjects: true,
  });

  return (
    <>
      <header className={`header sticky-bar ${scroll ? "stick" : ""}`}>
        <TopBar t={t} />

        <div className="container-fluid background-body">
          <div className="main-header">
            {/* menu desktop */}
            <div className="header-left">
              <div className="header-logo">
                <LogoButton href="/" />
              </div>
              <div className="header-nav">
                <nav className="nav-main-menu">
                  <ul className="main-menu">
                    {/* menu parque tikal */}
                    <li className="mega-li has-children">
                      <NavLink
                        className="active"
                        to={t("header.nav_menu.home.href")}
                        style={({ isActive }) => ({
                          fontWeight: isActive ? "bold" : "normal",
                          color: isActive ? "orange" : "black",
                        })}
                      >
                        {t("header.nav_menu.home.title")}
                      </NavLink>
                      <div className="mega-menu">
                        <div className="mega-menu-inner">
                          <div className="row align-items-center">
                            <div className="col-lg-10">
                              <div className="row align-items-center">
                                <div className="col-lg-4">
                                  <p className="text-md-bold mb-10 neutral-1000">
                                    {t("header.nav_menu.home.section.title")}
                                  </p>
                                  <h5 className="mb-45 neutral-1000">
                                    {t("header.nav_menu.home.section.message")}
                                  </h5>
                                  <Link
                                    to={t("header.nav_menu.home.section.href")}
                                    className="btn btn-brand-secondary"
                                  >
                                    {t(
                                      "header.nav_menu.home.section.text_button"
                                    )}
                                    <svg
                                      width={16}
                                      height={16}
                                      viewBox="0 0 16 16"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M8 15L15 8L8 1M15 8L1 8"
                                        stroke=""
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      >
                                        {" "}
                                      </path>
                                    </svg>
                                  </Link>
                                </div>

                                <div className="col-lg-6">
                                  {typeof cardData1 === "object" && (
                                    <CardHomeLink cardData={cardData1} />
                                  )}
                                  {typeof cardData2 === "object" && (
                                    <CardHomeLink cardData={cardData2} />
                                  )}
                                  {typeof cardData3 === "object" && (
                                    <CardHomeLink cardData={cardData3} />
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2">
                              <img
                                src={t("header.nav_menu.home.picture.src")}
                                alt="Travila"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* menu arte */}
                    <li className="mega-li has-children">
                      <NavLink
                        className="active"
                        to="/arts"
                        style={({ isActive }) => ({
                          fontWeight: isActive ? "bold" : "normal",
                          color: isActive ? "orange" : "black",
                        })}
                      >
                        {t("header.nav_menu.art.title")}
                      </NavLink>
                      <div className="mega-menu">
                        <div className="mega-menu-inner">
                          <div className="row align-items-center">
                            <div className="col-lg-10">
                              <div className="row align-items-center">
                                <div className="col-lg-4">
                                  {typeof cardData1 === "object" && (
                                    <CardHomeLink cardData={cardData1} />
                                  )}
                                  {typeof cardData2 === "object" && (
                                    <CardHomeLink cardData={cardData2} />
                                  )}
                                </div>
                                <div className="col-lg-4">
                                  {typeof featuredItems1 === "object" && (
                                    <FeaturedList items={featuredItems1} />
                                  )}
                                </div>
                                <div className="col-lg-4">
                                  {typeof featuredItems2 === "object" && (
                                    <FeaturedList items={featuredItems2} />
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2">
                              <Polaroid
                                picture={t("header.nav_menu.art.picture.0", {
                                  returnObjects: true,
                                })}
                              />
                              <Polaroid
                                picture={t("header.nav_menu.art.picture.1", {
                                  returnObjects: true,
                                })}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* menu arte */}
                    <li className="mega-li-small has-children">
                      <NavLink
                        to="/science"
                        style={({ isActive }) => ({
                          fontWeight: isActive ? "bold" : "normal",
                          color: isActive ? "orange" : "black",
                        })}
                      >
                        {t("header.nav_menu.science.title")}
                      </NavLink>
                      <div className="mega-menu">
                        <div className="mega-menu-inner mega-menu-inner-small">
                          <div className="row">
                            <div className="col-lg-6">
                              <h6 className="text-lg-bold neutral-1000">
                                {t("header.nav_menu.science.title")}
                                Ciencia
                              </h6>
                              <ul className="sub-menu">
                                <li>
                                  <Link to="/meteorology">Meteorología</Link>
                                </li>
                                <li>
                                  <Link to="/hydrology">Hidrología</Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-6">
                              <h6 className="text-lg-bold neutral-1000">
                                Naturaleza
                              </h6>
                              <ul className="sub-menu">
                                <li>
                                  <Link to="/ecology">Ecología</Link>
                                </li>
                                <li>
                                  <Link to="/fauna">Fauna</Link>
                                </li>
                                <li>
                                  <Link to="/flora">Flora</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* Menu Transporte */}
                    <li className="mega-li-small has-children">
                      <NavLink
                        to="/transport"
                        style={({ isActive }) => ({
                          fontWeight: isActive ? "bold" : "normal",
                          color: isActive ? "orange" : "black",
                        })}
                      >
                        {t("header.nav_menu.transport.title")}
                      </NavLink>
                    </li>
                    {/* menu hoteles */}
                    <li className="has-children">
                      <NavLink
                        to="/hotels"
                        style={({ isActive }) => ({
                          fontWeight: isActive ? "bold" : "normal",
                          color: isActive ? "orange" : "black",
                        })}
                      >
                        {t("header.nav_menu.lodging.title")}
                      </NavLink>
                    </li>
                    {/* menu tours */}
                    <li className="mega-li has-children">
                      <NavLink
                        className="active"
                        to={t("header.nav_menu.tours.href")}
                        style={({ isActive }) => ({
                          fontWeight: isActive ? "bold" : "normal",
                          color: isActive ? "orange" : "black",
                        })}
                      >
                        {t("header.nav_menu.tours.title")}
                      </NavLink>
                      <div className="mega-menu">
                        <div className="mega-menu-inner">
                          <div className="row align-items-center">
                            <div className="col-lg-10">
                              <div className="row align-items-center">
                                <div className="col-lg-4">
                                  <p className="text-md-bold mb-10 neutral-1000">
                                    Tours Especiales
                                  </p>
                                  <h5 className="mb-45 neutral-1000">
                                    Tours que existen únicamente para ti!
                                  </h5>
                                  <Link
                                    to="/"
                                    className="btn btn-brand-secondary"
                                  >
                                    Más Información.
                                    <svg
                                      width={16}
                                      height={16}
                                      viewBox="0 0 16 16"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M8 15L15 8L8 1M15 8L1 8"
                                        stroke=""
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      >
                                        {" "}
                                      </path>
                                    </svg>
                                  </Link>
                                </div>
                                <div className="col-lg-4">
                                  <div className="card-home-link background-body">
                                    {" "}
                                    <Link className="card-icon" to="/">
                                      {" "}
                                      <img
                                        src="/imgs/template/icons/activity.svg"
                                        alt="Travila"
                                      />
                                    </Link>
                                    <div className="card-info">
                                      {" "}
                                      <Link to="/">
                                        <h6 className="text-md-bold">
                                          Tours Especiales
                                        </h6>
                                      </Link>
                                      <p className="text-xs-medium neutral-500">
                                        Helitour, Ballenas y Delfines, El Lago
                                        de Atitlán, Hotels, Volcanes, Mundo Maya
                                      </p>
                                    </div>
                                  </div>
                                  <div className="card-home-link background-body">
                                    {" "}
                                    <Link className="card-icon" to="/index-2">
                                      {" "}
                                      <img
                                        src="/imgs/template/icons/map.svg"
                                        alt="Travila"
                                      />
                                    </Link>
                                    <div className="card-info">
                                      {" "}
                                      <Link to="/index-2">
                                        <h6 className="text-md-bold">
                                          Aviturismo
                                        </h6>
                                      </Link>
                                      <p className="text-xs-medium neutral-500">
                                        Observación de Aves, Tikal, Yaxhá,
                                        Fechas fijas de salida
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-4"></div>
                              </div>
                            </div>
                            <div className="col-lg-2">
                              <Polaroid
                                picture={t("header.nav_menu.tours.picture.0", {
                                  returnObjects: true,
                                })}
                              />
                              <Polaroid
                                picture={t("header.nav_menu.tours.picture.1", {
                                  returnObjects: true,
                                })}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li>
                      <NavLink
                        to="/maps"
                        style={({ isActive }) => ({
                          fontWeight: isActive ? "bold" : "normal",
                          color: isActive ? "orange" : "black",
                        })}
                      >
                        {t("header.nav_menu.maps.title")}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/contact"
                        style={({ isActive }) => ({
                          fontWeight: isActive ? "bold" : "normal",
                          color: isActive ? "orange" : "black",
                        })}
                      >
                        {t("header.nav_menu.contact.title")}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/aboutmenu"
                        style={({ isActive }) => ({
                          fontWeight: isActive ? "bold" : "normal",
                          color: isActive ? "orange" : "black",
                        })}
                      >
                        {t("header.nav_menu.about.title")}
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <div className="header-right">
              <LanguageDropdown />
              {/* <CurrencyDropdown /> */}
              <div className="d-none d-xxl-inline-block align-middle mr-15">
                <ThemeSwitch />
              </div>

              <div
                className="burger-icon burger-icon-white"
                onClick={handleMobileMenu}
              >
                <span className="burger-icon-top" />
                <span className="burger-icon-mid" />
                <span className="burger-icon-bottom" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

Header1.propTypes = {
  scroll: PropTypes.bool.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleMobileMenu: PropTypes.func.isRequired,
  handleRegister: PropTypes.func.isRequired,
  handleSidebar: PropTypes.func.isRequired,
};
