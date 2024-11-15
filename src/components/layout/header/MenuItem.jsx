import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function MenuItem({
  title,
  links,
  currentAccordion,
  isAccordion,
  handleAccordion,
  index,
  href,
}) {
  return (
    <li
      className={`has-children ${currentAccordion === index ? "active" : ""}`}
    >
      <span className="menu-expand" onClick={() => handleAccordion(index)}>
        <i className="arrow-small-down"></i>
      </span>

      <Link to={href}>{title}</Link>
      <ul
        className="sub-menu"
        style={{ display: `${isAccordion === index ? "block" : "none"}` }}
      >
        {links.map((link, idx) => (
          <li key={idx}>
            <Link to={link.href}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  currentAccordion: PropTypes.number.isRequired,
  isAccordion: PropTypes.number.isRequired,
  handleAccordion: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  href: PropTypes.string,
};
