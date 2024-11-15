import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function LogoButton({ href = "/" }) {
  return (
    <>
      <Link className="d-flex" to={href} id="menu-link-1">
        <img
          className="light-mode"
          alt="Parque Tikal"
          src="/imgs/template/logo.png"
          width={80}
          height={42}
        />
        <img
          className="dark-mode"
          alt="Parque Tikal"
          src="/imgs/template/logo-w.png"
          width={80}
          height={42}
          loading="lazy"
        />
      </Link>
    </>
  );
}

LogoButton.propTypes = {
  href: PropTypes.string,
};
