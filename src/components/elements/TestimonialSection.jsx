import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination } from "swiper/modules";
import PropTypes from "prop-types";

const TestimonialSection = ({ testimonials }) => {
  return (
    <section className="section-box box-testimonials-2 box-testimonials-5 box-testimonials-hotel-detail background-body">
      <div className="container">
        <div className="box-author-testimonials button-bg-2 wow fadeInUp">
          <img src="/imgs/page/homepage1/testimonial.png" alt="Travila" />
          <img src="/imgs/page/homepage1/testimonial2.png" alt="Travila" />
          <img src="/imgs/page/homepage1/testimonial3.png" alt="Travila" />
          Testimonials
        </div>
        <h2 className="mt-8 mb-25 neutral-1000">What they say about us?</h2>
      </div>
      <div className="block-testimonials">
        <div className="container-testimonials wow fadeInUp">
          <div className="container-slider">
            <div className="box-swiper mt-0">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <TestimonialCard
                      title={testimonial.title}
                      description={testimonial.description}
                      authorName={testimonial.authorName}
                      authorLocation={testimonial.authorLocation}
                      authorImage={testimonial.authorImage}
                      rating={testimonial.rating}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Añadir PropTypes para validar los testimonios
TestimonialSection.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      authorName: PropTypes.string.isRequired,
      authorLocation: PropTypes.string.isRequired,
      authorImage: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default TestimonialSection;
