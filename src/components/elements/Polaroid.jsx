import PropTypes from "prop-types";
import styles from "./custom.module.css";

export default function Polaroid({ picture }) {
  return (
    <>
      <div className={styles.polaroid}>
        <img src={picture.url_image} alt={picture.alt} />
        <div className={styles.polaroidCaption}>{picture.text}</div>
      </div>
    </>
  );
}

Polaroid.propTypes = {
  picture: PropTypes.shape({
    text: PropTypes.string.isRequired,
    url_image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
};
