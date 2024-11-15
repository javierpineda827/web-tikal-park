import Swiper from "swiper";
import { SwiperSlide } from "swiper/react";
import CardNews from "./CardNews";
import { swiperGroupAnimate } from "@/util/swiperOption";
import PropTypes from "prop-types";

export const NewsSlider = ({ slides }) => (
  <div className="swiper-container swiper-group-animate swiper-group-journey container">
    <Swiper {...swiperGroupAnimate}>
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <CardNews {...slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

// Definir PropTypes para el componente NewsSlider
NewsSlider.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired, // La etiqueta del tipo de noticia (e.g., "Cultural")
      date: PropTypes.string.isRequired, // La fecha de la noticia (e.g., "18 Sep 2024")
      time: PropTypes.string.isRequired, // El tiempo estimado de lectura (e.g., "6 mins")
      comments: PropTypes.number.isRequired, // Número de comentarios
      title: PropTypes.string.isRequired, // El título de la noticia
      author: PropTypes.string.isRequired, // El autor de la noticia
      imgSrc: PropTypes.string.isRequired, // La fuente de la imagen
      alt: PropTypes.string, // Texto alternativo de la imagen
      link: PropTypes.string.isRequired, // El enlace a la noticia
    })
  ).isRequired,
};
export default NewsSlider;
