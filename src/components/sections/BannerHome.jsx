import { Link } from "react-router-dom";
import Slider from "react-slick";
import VideoPopup from "../elements/VideoPopup";

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className={
      "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
    }
    type="button"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M7.99992 3.33325L3.33325 7.99992M3.33325 7.99992L7.99992 12.6666M3.33325 7.99992H12.6666"
        stroke=""
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  </button>
);
const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className={
      "slick-next slick-arrow" +
      (currentSlide === slideCount - 1 ? " slick-disabled" : "")
    }
    type="button"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M7.99992 12.6666L12.6666 7.99992L7.99992 3.33325M12.6666 7.99992L3.33325 7.99992"
        stroke=""
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {" "}
      </path>
    </svg>
  </button>
);

export default function BannerHome() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    fade: true, // Desvanecer el cambio entre diapositivas para que sea más suave
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };

  // Array de imágenes para el slider de fondo
  const backgroundImages = [
    "bg-banner-home-slider-3",
    "bg-banner-home-slider-1",
    "bg-banner-home-slider-2",
  ];

  return (
    <Slider {...settings}>
      {backgroundImages.map((bgImage, index) => (
        <section
          key={index}
          className={`box-section block-banner-home10 ${bgImage}`}
        >
          <div className="container">
            <p className="text-with-img mb-30">
              <img src="/assets/imgs/page/homepage10/earth.png" alt="Travila" />
              Tikal - La Biosfera Maya - Guatemala
            </p>
            <h1 className="color-white mb-20">
              Tikal comprende 576km&#178;
              <br className="d-none d-lg-block" />
              de selva exhuberante
            </h1>
            <ul className="list-ticks-green">
              <li>Fauna Endémica</li>
              <li>Restos arqueológicos</li>
              <li>Reserva natural y cultural</li>
            </ul>
            <div className="box-buttons-banner mt-65">
              <Link className="btn btn-brand-secondary" to="/contact">
                Más Información
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 19L19 12L12 5M19 12L5 12"
                    stroke="none"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </Link>
              <VideoPopup
                vdocls="btn btn-how-work color-white popup-youtube"
                style5
              />
            </div>
          </div>
        </section>
      ))}
    </Slider>
  );
}
