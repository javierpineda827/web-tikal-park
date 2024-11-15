import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const ImageGallery = () => {
  const { t } = useTranslation("arte");

  const thumb_gallery = t("arte.thumb_gallery", { returnObjects: true });

  return (
    <div className="box-content-sidebar">
      <ul className="list-photo-col-3">
        {thumb_gallery.map((image, index) => (
          <li key={index}>
            <Link to="#">
              <img src={image.src} alt={image.alt} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
