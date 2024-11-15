import PropTypes from "prop-types";
const MediaSection = ({ images }) => {
  if (!images) {
    images = [
      { src: "/imgs/page/home/bottom-sliders/media1.jpg", alt: "Travila 1" },
      { src: "/imgs/page/home/bottom-sliders/media2.jpg", alt: "Travila 2" },
      { src: "/imgs/page/home/bottom-sliders/media3.jpg", alt: "Travila 3" },
      { src: "/imgs/page/home/bottom-sliders/media4.jpg", alt: "Travila 4" },
      { src: "/imgs/page/home/bottom-sliders/media5.jpg", alt: "Travila 5" },
      { src: "/imgs/page/home/bottom-sliders/media6.jpg", alt: "Travila 6" },
      { src: "/imgs/page/home/bottom-sliders/media7.jpg", alt: "Travila 7" },
    ];
  }

  return (
    <section className="section-box box-media background-body">
      <div className="container-media wow fadeInUp">
        {typeof images === "object" &&
          images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt || "Image"}
              width={image.width || 270}
              height={image.height || 270}
              style={{
                objectFit: image.objectFit || "cover",
                mixBlendMode: image.mixBlendMode || "multiply",
                position: image.position || "top center",
              }}
            />
          ))}
      </div>
    </section>
  );
};

// Definimos las propTypes para el componente
MediaSection.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
      width: PropTypes.number,
      height: PropTypes.number,
      objectFit: PropTypes.string,
      mixBlendMode: PropTypes.string,
      position: PropTypes.string,
    })
  ),
};

export default MediaSection;
