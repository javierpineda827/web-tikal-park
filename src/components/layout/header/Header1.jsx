import LanguageDropdown from "@/components/elements/LanguageDropdown";
import PropTypes from "prop-types";

import { lazy } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
        <div className="top-bar">
          <div className="container-fluid">
            <div className="text-header">
              <div className="text-unlock text-sm-bold" id="label-banner">
                {t("header.top_label")}
              </div>
              <Link
                className="link-secondary-2"
                to="/"
                id="top-advertising-link-1"
              >
                {t("header.top_message_link")}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M7.99992 12.6666L12.6666 7.99992L7.99992 3.33325M12.6666 7.99992L3.33325 7.99992"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="container-fluid background-body">
          <div className="main-header">
            <div className="header-left">
              <div className="header-logo">
                <Link className="d-flex" to="/" id="menu-link-1">
                  <img
                    className="light-mode"
                    alt="Parque Tikal"
                    src="/assets/imgs/template/logo.png"
                    width={80}
                    height={42}
                  />
                  <img
                    className="dark-mode"
                    alt="Parque Tikal"
                    src="/assets/imgs/template/logo-w.png"
                    width={80}
                    height={42}
                  />
                </Link>
              </div>
              <div className="header-nav">
                <nav className="nav-main-menu">
                  <ul className="main-menu">
                    {/* menu parque tikal */}
                    <li className="mega-li has-children">
                      <Link
                        className="active"
                        to={t("header.nav_menu.home.href")}
                      >
                        {t("header.nav_menu.home.title")}
                      </Link>
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
                      <Link className="active" to="/arte">
                        {t("header.nav_menu.art.title")}
                      </Link>
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
                      <Link to="/ciencia">
                        {t("header.nav_menu.science.title")}
                      </Link>
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
                                  <Link to="/tours">Meteorología</Link>
                                </li>
                                <li>
                                  <Link to="/tours">Hidrología</Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-6">
                              <h6 className="text-lg-bold neutral-1000">
                                Naturaleza
                              </h6>
                              <ul className="sub-menu">
                                <li>
                                  <Link to="/tours">Ecología</Link>
                                </li>
                                <li>
                                  <Link to="/tours">Fauna</Link>
                                </li>
                                <li>
                                  <Link to="/tours">Flora</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* Menu Transporte */}
                    <li className="mega-li-small has-children">
                      <Link to="/">{t("header.nav_menu.transport.title")}</Link>
                      <div className="mega-menu">
                        <div className="mega-menu-inner mega-menu-inner-small">
                          <div className="row">
                            <div className="col-lg-6">
                              <h6 className="text-lg-bold neutral-1000">
                                Vuelos
                              </h6>
                              <ul className="sub-menu">
                                <li>
                                  <Link to="/rental-car">
                                    Vuelos a Flores desde la Ciudad de Guatemala
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/rental-car-2">
                                    Vuelos a Flores desde la Ciudad de Guatemala
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/rental-car-3">
                                    Vuelos a Flores desde la Ciudad de Guatemala
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-6">
                              <h6 className="text-lg-bold neutral-1000">
                                Autobus
                              </h6>
                              <ul className="sub-menu">
                                <li>
                                  <Link to="/rental-property">
                                    Vuelos a Flores desde la Ciudad de Guatemala
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/rental-property-2">
                                    Transportación colectiva desde la Ciudad de
                                    Belice
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/rental-property-3">
                                    Transportación colectiva desde la Ciudad de
                                    Belice
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/property-detail">
                                    Transportación colectiva desde la Ciudad de
                                    Belice
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* menu hoteles */}
                    <li className="has-children">
                      <Link to="/hoteles">
                        {t("header.nav_menu.lodging.title")}
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link to="/hotel-grid">
                            Hoteles en el Parque Nacional Tikal
                          </Link>
                        </li>
                        <li>
                          <Link to="/hotel-grid-2">
                            Hoteles en el Parque Nacional Tikal
                          </Link>
                        </li>
                        <li>
                          <Link to="/hotel-grid-3">
                            Hoteles en el Parque Nacional Tikal
                          </Link>
                        </li>
                        <li>
                          <Link to="/hotel-grid-4">
                            Hoteles en el Parque Nacional Tikal
                          </Link>
                        </li>
                        <li>
                          <Link to="/hotel-grid-5">
                            Hoteles en el Parque Nacional Tikal
                          </Link>
                        </li>
                        <li>
                          <Link to="/hotel-grid-6">
                            Hoteles en el Parque Nacional Tikal
                          </Link>
                        </li>
                      </ul>
                    </li>
                    {/* menu tours */}
                    <li className="mega-li has-children">
                      <Link
                        className="active"
                        to={t("header.nav_menu.tours.href")}
                      >
                        {t("header.nav_menu.tours.title")}
                      </Link>
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
                                        src="/assets/imgs/template/icons/activity.svg"
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
                                        src="/assets/imgs/template/icons/map.svg"
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
                                <div className="col-lg-4">
                                  <ul className="list-featured">
                                    <li>
                                      <Link className="tours" to="/index-4">
                                        El Mirador Helitour
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="activities"
                                        to="/index-5"
                                      >
                                        Guatemala desde el aire en helicóptero
                                        <p>
                                          <small className="pl-4 text-muted text-xs">
                                            4 días- 3 noches
                                          </small>
                                        </p>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="destinations"
                                        to="/index-6"
                                      >
                                        Helitours en los volcanes de Guatemala
                                      </Link>
                                    </li>
                                    <li>
                                      <Link className="hotels" to="/index-7">
                                        Aventura en Helicóptero por el Mundo
                                        Maya
                                        <p>
                                          <small className="pl-4 text-muted text-xs">
                                            7 días- 6 noches
                                          </small>
                                        </p>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="rental-car"
                                        to="/index-8"
                                      >
                                        Home 08 - Rental Car
                                      </Link>
                                    </li>
                                    <li>
                                      <Link className="property" to="/index-9">
                                        Home 09 - Property
                                      </Link>
                                    </li>
                                    <li>
                                      <Link className="tickets" to="/index-10">
                                        Home 10 - Tickets
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
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
                      <Link to="/maps">{t("header.nav_menu.maps.title")}</Link>
                    </li>
                    <li>
                      <Link to="/contact">
                        {t("header.nav_menu.contact.title")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/about">
                        {t("header.nav_menu.about.title")}
                      </Link>
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
                className="burger-icon-2 burger-icon-white"
                onClick={handleSidebar}
              >
                <img src="/assets/imgs/template/icons/menu.svg" alt="Travila" />
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
