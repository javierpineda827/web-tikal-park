import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CardHomeLink = ({ cardData }) => {
  const { tags } = cardData;

  return (
    <div className="card-home-link background-body">
      <Link className="card-icon" to={cardData.href_icon}>
        <img src={cardData.icon} alt={cardData.title} />
      </Link>
      <div className="card-info">
        <Link to={cardData.href}>
          <h6 className="text-md-bold">{cardData.title}</h6>
        </Link>
        <div className="d-inline-flex">
          {tags.map((tag, index) => (
            <Link key={tag.id} to={tag.href}>
              <span className="text-xs-medium neutral-500 ps-1">
                {tag.title}
                {index < tags.length - 1 && tags.length > 2 && <span>, </span>}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

// Añadiendo los PropTypes
CardHomeLink.propTypes = {
  cardData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    href_icon: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default CardHomeLink;
