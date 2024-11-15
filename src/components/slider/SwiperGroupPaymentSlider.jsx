"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { swiperGroupPayment } from "@/util/swiperOption";
import PropTypes from "prop-types";

export default function SwiperGroupPaymentSlider({ data }) {
  return (
    <>
      <Swiper {...swiperGroupPayment}>
        {typeof data === "object" &&
          data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="btn btn-payment">
                <img src={item.url_image} alt={item.alt} />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}

SwiperGroupPaymentSlider.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      url_image: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ),
};
