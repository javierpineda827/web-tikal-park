import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CardNews = ({
  label,
  imgSrc,
  alt,
  date,
  time,
  comments,
  title,
  link,
  author,
  authorImg,
}) => {
  return (
    <div className="card-news background-card hover-up">
      <div className="card-image">
        <label className="label">{label}</label>
        <Link className="wish" to="#">
          <svg
            width={20}
            height={18}
            viewBox="0 0 20 18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z"
              stroke=""
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </Link>
        <img src={imgSrc} alt={alt} />
      </div>
      <div className="card-info">
        <div className="card-meta">
          <span className="post-date neutral-1000">{date}</span>
          <span className="post-time neutral-1000">{time}</span>
          <span className="post-comment neutral-1000">{comments} comments</span>
        </div>
        <div className="card-title">
          <Link className="text-xl-bold neutral-1000" to={link}>
            {title}
          </Link>
        </div>
        <div className="card-program">
          <div className="endtime">
            <div className="card-author">
              <img
                src={authorImg}
                alt={author}
                style={{ objectFit: "scale-down" }}
              />
              <p className="text-sm-bold neutral-1000">{author}</p>
            </div>
            <div className="card-button">
              <Link className="btn btn-gray" to={link}>
                Keep Reading
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// PropTypes para validar las propiedades del componente
CardNews.propTypes = {
  label: PropTypes.string.isRequired, // Etiqueta de la categoría
  imgSrc: PropTypes.string.isRequired, // Imagen de la noticia
  alt: PropTypes.string.isRequired, // Texto alternativo de la imagen
  date: PropTypes.string.isRequired, // Fecha de la noticia
  time: PropTypes.string.isRequired, // Tiempo estimado de lectura
  comments: PropTypes.number.isRequired, // Número de comentarios
  title: PropTypes.string.isRequired, // Título de la noticia
  link: PropTypes.string.isRequired, // Enlace al detalle de la noticia
  author: PropTypes.string.isRequired, // Nombre del autor
  authorImg: PropTypes.string.isRequired, // Imagen del autor
};

export default CardNews;
