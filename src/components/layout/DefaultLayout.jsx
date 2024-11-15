import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import BackToTop from "../elements/BackToTop";
import ButtonClick from "../elements/ButtonClick";
// import DropdownSelect from '../elements/DropdownSelect';
import ItemCollapse from "../elements/ItemCollapse";
import TestimonialBlock from "../elements/TestimonialBlock";

import PopupSignin from "./PopupSignin";
import PopupSignup from "./PopupSignup";
import Sidebar from "./Sidebar";

import Header1 from "./header/Header1";
import Header2 from "./header/Header2";
import MobileMenu from "./MobileMenu";
import Breadcrumb from "./Breadcrumb";
import Footer1 from "./footer/Footer";
import FloatingBanner from "../elements/FloatBanner";

export default function DefaultLayout({
  headerStyle,
  footerStyle,
  breadcrumbTitle,
  children,
}) {
  const [isMobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
    !isMobileMenu
      ? document.body.classList.add("mobile-menu-active")
      : document.body.classList.remove("mobile-menu-active");
  };
  const [isSidebar, setSidebar] = useState(false);
  const handleSidebar = () => {
    setSidebar(!isSidebar);
    !isSidebar
      ? document.body.classList.add("canvas-menu-active")
      : document.body.classList.remove("canvas-menu-active");
  };
  const [isLogin, setLogin] = useState(false);
  const handleLogin = () => setLogin(!isLogin);
  const [isRegister, setRegister] = useState(false);
  const handleRegister = () => setRegister(!isRegister);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck); // Actualiza el estado solo si cambia el valor
      }
    };

    // Añade el event listener de scroll
    window.addEventListener("scroll", handleScroll);

    // Limpia el event listener al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]); // A
  return (
    <>
      <div id="top" />
      <FloatingBanner />
      <ItemCollapse />
      <ButtonClick />
      <TestimonialBlock />
      {isMobileMenu && (
        <div className="body-overlay-1" onClick={handleMobileMenu} />
      )}
      {isSidebar && <div className="body-overlay-1" onClick={handleSidebar} />}

      {headerStyle == 1 ? (
        <Header1
          scroll={scroll}
          isMobileMenu={isMobileMenu}
          handleMobileMenu={handleMobileMenu}
          isSidebar={isSidebar}
          handleSidebar={handleSidebar}
          isLogin={isLogin}
          handleLogin={handleLogin}
          isRegister={isRegister}
          handleRegister={handleRegister}
        />
      ) : null}
      {headerStyle === 2 ? (
        <Header2
          scroll={scroll}
          isMobileMenu={isMobileMenu}
          handleMobileMenu={handleMobileMenu}
        />
      ) : null}
      <MobileMenu
        isMobileMenu={isMobileMenu}
        handleMobileMenu={handleMobileMenu}
      />
      <Sidebar isSidebar={isSidebar} handleSidebar={handleSidebar} />

      <main className="main">
        {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}
        {children}
      </main>

      {!footerStyle && <Footer1 />}
      {footerStyle === 1 && <Footer1 />}

      <PopupSignin
        isLogin={isLogin}
        handleLogin={handleLogin}
        isRegister={isRegister}
        handleRegister={handleRegister}
      />
      <PopupSignup
        isRegister={isRegister}
        handleRegister={handleRegister}
        isLogin={isLogin}
        handleLogin={handleLogin}
      />

      <BackToTop target="top" />
    </>
  );
}

DefaultLayout.propTypes = {
  headerStyle: PropTypes.number,
  footerStyle: PropTypes.number,
  breadcrumbTitle: PropTypes.string,
  children: PropTypes.node,
};
