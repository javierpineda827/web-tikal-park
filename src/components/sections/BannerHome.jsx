import { Link } from "react-router-dom";
import Slider from "react-slick";
import VideoPopup from "../elements/VideoPopup";
import { useTranslation } from "react-i18next";

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

  const { t } = useTranslation("bannerhome");
  const banner = t("banner", { returnObjects: true });
  return (
    <Slider {...settings}>
      {backgroundImages.map((bgImage, index) => (
        <section
          key={index}
          className={`box-section block-banner-home10 ${bgImage}`}
        >
          <div className="container">
            <p className="text-with-img mb-30">
              <img src="/imgs/page/home/earth.png" alt="earth" />
              {banner.tag}
            </p>
            <h4 className="color-white mb-40 ">
              {banner.title}
              <br className="d-none d-lg-block" />
            </h4>
            <ul className="list-ticks-green mt-4">
              {typeof banner.bullets === "object" &&
                banner.bullets.map((item, idx) => (
                  <li key={idx}>{item.text}</li>
                ))}
            </ul>
            <div className="box-buttons-banner mt-65">
              <Link className="btn btn-brand-secondary" to={banner.button.href}>
                {banner.button.text}
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 19L19 12L12 5M19 12L5 12"
                    stroke="currentColor"
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
                url_video={banner.video.url_video}
                textButton={banner.video.text}
              />
            </div>
          </div>
        </section>
      ))}
    </Slider>
  );
}
