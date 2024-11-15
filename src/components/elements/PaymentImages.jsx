import PropTypes from "prop-types";

const PaymentImages = ({
  images,
  imgClass,
  containerClass,
  rowClass,
  colClass,
}) => {
  return (
    <div className={containerClass}>
      <div className={rowClass}>
        {images.map((colImages, index) => (
          <div className={colClass} key={index}>
            {colImages.map((image, i) => (
              <img
                key={i}
                className={`${imgClass} ${
                  i < colImages.length - 1 ? "mb-15" : ""
                }`}
                src={image.src}
                alt={image.alt || `tikal_payment_${index}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

// Definición de los PropTypes
PaymentImages.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string.isRequired, // `src` es obligatorio y debe ser un string
        alt: PropTypes.string, // `alt` es opcional pero debe ser un string si se proporciona
      })
    )
  ).isRequired, // `images` es obligatorio y debe ser un array de arrays de objetos
  imgClass: PropTypes.string, // `imgClass` es opcional y debe ser un string
  containerClass: PropTypes.string, // `containerClass` es opcional y debe ser un string
  rowClass: PropTypes.string, // `rowClass` es opcional y debe ser un string
  colClass: PropTypes.string, // `colClass` es opcional y debe ser un string
};

// Valores por defecto (opcional)
PaymentImages.defaultProps = {
  imgClass: "bdrd8 w-100",
  containerClass: "box-image-payment-2",
  rowClass: "row align-items-center",
  colClass: "col-sm-4 mb-30",
};

export default PaymentImages;
