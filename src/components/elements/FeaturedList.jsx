import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const FeaturedList = ({ items }) => {
  return (
    <>
      <ul className="list-featured">
        {items.map((item, index) => (
          <li key={item.href + index}>
            <Link className={item.className} to={item.href}>
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

FeaturedList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      className: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FeaturedList;
