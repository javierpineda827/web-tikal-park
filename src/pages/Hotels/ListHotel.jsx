import DefaultLayout from "../../components/layout/DefaultLayout";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { swiperGroupAnimate } from "@/util/swiperOption";
import IconChevronRight from "../../components/ui/IconChevronRight";
import IconHeartOutline from "../../components/elements/IconHeartOutline";
import HotelCard from "./HotelCard";
import MediaSection from "../../components/elements/MediaSection";
import PaymentImages from "../../components/elements/PaymentImages";
import { useTranslation } from "react-i18next";

export default function ListHotelDetail2() {
  const { t } = useTranslation("paymentimages");
  const images = t("images", { returnObjects: true });
  return (
    <>
      <DefaultLayout headerStyle={1} footerStyle={1}>
        <main className="main">
          <section className="box-section box-breadcrumb background-body">
            <div className="container">
              <ul className="breadcrumbs">
                <li>
                  {" "}
                  <Link to={t("breadcrumb_home.0.href")}>
                    {t("breadcrumb_home.0.title")}
                  </Link>
                  <span className="arrow-right">
                    <IconChevronRight width={7} height={12} />
                  </span>
                </li>
                <li>
                  {" "}
                  <Link to={t("breadcrumb_home.1.href")}>
                    {t("breadcrumb_home.1.title")}
                  </Link>
                  <span className="arrow-right">
                    <IconChevronRight width={7} height={12} />
                  </span>
                </li>
                <li>
                  {" "}
                  <Link to={t("breadcrumb_home.2.href")}>
                    <span className="text-breadcrumb">
                      {t("breadcrumb_home.2.title")}
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </section>
          <section className="section-box box-banner-hotel-detai-2">
            <div className="box-banner-hotel-detai-2-inner">
              <div className="container">
                <div className="d-flex justify-content-center mb-20">
                  {/* <Link className="btn btn-brand-secondary" to="#">
                    Luxury Hotel Experience
                  </Link> */}
                </div>
                <h2 className="color-white mb-20">{t("title")}</h2>
                <h6 className="color-white">{t("subtitle")}</h6>
              </div>
            </div>
          </section>
          <section className="box-section block-content-tourlist background-body">
            <div className="container">
              <div className="box-content-main-detail">
                <div className="box-grid-hotels box-list-hotels-detail wow fadeIn">
                  <HotelCard />

                  <div className="mb-70" />
                  {/* <nav aria-label="Page navigation example">
                    <ul className="pagination">
                      <li className="page-item">
                        <Link
                          className="page-link"
                          to="#"
                          aria-label="Previous"
                        >
                          <span aria-hidden="true">
                            <svg
                              width={12}
                              height={12}
                              viewBox="0 0 12 12"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6.00016 1.33325L1.3335 5.99992M1.3335 5.99992L6.00016 10.6666M1.3335 5.99992H10.6668"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          1
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link active" to="#">
                          2
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          3
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          4
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          5
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          ...
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#" aria-label="Next">
                          <span aria-hidden="true">
                            <svg
                              width={12}
                              height={12}
                              viewBox="0 0 12 12"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.99967 10.6666L10.6663 5.99992L5.99968 1.33325M10.6663 5.99992L1.33301 5.99992"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </nav> */}
                </div>
              </div>
            </div>
          </section>
          <section className="section-box box-payments box-payments-hotel background-body">
            <div className="container">
              <div className="box-payment-style-2 background-4">
                <div className="row align-items-center">
                  <div className="col-lg-6 mb-30">
                    <div className="box-left-payment">
                      <span className="btn btn-tag-white">
                        {t("box_payment.button_text")}
                      </span>
                      <h4 className="mb-25 mt-20 neutral-1000">
                        {t("box_payment.title")}
                      </h4>
                      <p className="text-xl-medium neutral-500 mb-35">
                        {t("box_payment.text")}
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    {typeof images === "object" && (
                      <PaymentImages images={images} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section-box box-testimonials-2 box-testimonials-5 box-testimonials-hotel-detail background-body">
            <div className="container mx-auto">
              <div className="box-author-testimonials button-bg-2 wow fadeInUp">
                {" "}
                <img src="/imgs/page/homepage1/testimonial.png" alt="Travila" />
                <img
                  src="/imgs/page/homepage1/testimonial2.png"
                  alt="Travila"
                />
                <img
                  src="/imgs/page/homepage1/testimonial3.png"
                  alt="Travila"
                />
                Testimonios
              </div>
              <h2 className="mt-8 mb-25 neutral-1000">
                ¿Qué dicen de nosotros?
              </h2>
            </div>
            <div className="block-testimonials ">
              <div className="container-testimonials wow fadeInUp">
                <div className="container-slider">
                  <div className="box-swiper mt-0">
                    <div className="swiper-container swiper-group-animate swiper-group-journey">
                      <Swiper {...swiperGroupAnimate}>
                        <SwiperSlide>
                          <div className="card-testimonial background-card">
                            <div className="card-info">
                              <p className="text-xl-bold card-title neutral-1000">
                                Una Experiencia unica
                              </p>
                              <p className="neutral-500">
                                ¡Explorar el Parque Nacional Tikal fue una
                                aventura extraordinaria! Sumergirse en la selva
                                exuberante y las magníficas ruinas añade una
                                emoción única a la experiencia. Los guías son
                                conocedores y enriquecen el recorrido con
                                interesantes detalles. ¡Muy recomendado para una
                                escapada ecoturística!
                              </p>
                            </div>
                            <div className="card-top">
                              <div className="card-author">
                                <div className="card-image">
                                  {" "}
                                  <img
                                    src="/imgs/page/homepage1/author.png"
                                    alt="Travila"
                                  />
                                </div>
                                <div className="card-info">
                                  <p className="text-lg-bold neutral-1000">
                                    Sara Mohamed
                                  </p>
                                  <p className="text-sm neutral-1000">
                                    Parque Tikal
                                  </p>
                                </div>
                              </div>
                              <div className="card-rate">
                                {" "}
                                <img
                                  src="/imgs/template/icons/star.svg"
                                  alt="Travila"
                                />
                                <img
                                  src="/imgs/template/icons/star.svg"
                                  alt="Travila"
                                />
                                <img
                                  src="/imgs/template/icons/star.svg"
                                  alt="Travila"
                                />
                                <img
                                  src="/imgs/template/icons/star.svg"
                                  alt="Travila"
                                />
                                <img
                                  src="/imgs/template/icons/star.svg"
                                  alt="Travila"
                                />
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="card-testimonial background-card">
                            <div className="card-info">
                              <p className="text-xl-bold card-title neutral-1000">
                                Una Experiencia unica
                              </p>
                              <p className="neutral-500">
                                ¡Explorar el Parque Nacional Tikal fue una
                                aventura extraordinaria! Sumergirse en la selva
                                exuberante y las magníficas ruinas añade una
                                emoción única a la experiencia. Los guías son
                                conocedores y enriquecen el recorrido con
                                interesantes detalles. ¡Muy recomendado para una
                                escapada ecoturística!
                              </p>
                            </div>
                            <div className="card-top">
                              <div className="card-author">
                                <div className="card-image">
                                  {" "}
                                  <img
                                    src="/imgs/page/homepage1/author2.png"
                                    alt="Travila"
                                  />
                                </div>
                                <div className="card-info">
                                  <p className="text-lg-bold neutral-1000">
                                    Atend John
                                  </p>
                                  <p className="text-sm neutral-1000">
                                    Califonia
                                  </p>
                                </div>
                              </div>
                              <div className="card-rate">
                                {" "}
                                <img
                                  src="/imgs/template/icons/star.svg"
                                  alt="Travila"
                                />
                                <img
                                  src="/imgs/template/icons/star.svg"
                                  alt="Travila"
                                />
                                <img
                                  src="/imgs/template/icons/star.svg"
                                  alt="Travila"
                                />
                                <img
                                  src="/imgs/template/icons/star.svg"
                                  alt="Travila"
                                />
                                <img
                                  src="/imgs/template/icons/star.svg"
                                  alt="Travila"
                                />
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="card-testimonial background-card">
                            <div className="card-info">
                              <p className="text-xl-bold card-title neutral-1000">
                                Una Experiencia unica
                              </p>
                              <p className="neutral-500">
                                ¡Explorar el Parque Nacional Tikal fue una
                                aventura extraordinaria! Sumergirse en la selva
                                exuberante y las magníficas ruinas añade una
                                emoción única a la experiencia. Los guías son
                                conocedores y enriquecen el recorrido con
                                interesantes detalles. ¡Muy recomendado para una
                                escapada ecoturística!
                              </p>
                            </div>
                            <div className="card-top">
                              <div className="card-author">
                                <div className="card-image">
                                  {" "}
                                  <img
                                    src="/imgs/page/homepage1/author.png"
                                    alt="Travila"
                                  />
                                </div>
                                <div className="card-info">
                                  <p className="text-lg-bold neutral-1000">
                                    Sara Mohamed
                                  </p>
                                  <p className="text-sm neutral-1000">
                                    Parque Tikal
                                  </p>
                                </div>
                              </div>
                              <div className="card-rate">
                                {" "}
                                <img
                                  src="/imgs/template/icons/star.svg"
                                  alt="Travila"
                                />
                                <img
                                  src="/imgs/template/icons/star.svg"
                                  alt="Travila"
                                />
                                <img
                                  src="/imgs/template/icons/star.svg"
                                  alt="Travila"
                                />
                                <img
                                  src="/imgs/template/icons/star.svg"
                                  alt="Travila"
                                />
                                <img
                                  src="/imgs/template/icons/star.svg"
                                  alt="Travila"
                                />
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="card-testimonial background-card">
                            <div className="card-info">
                              <p className="text-xl-bold card-title neutral-1000">
                                Una Experiencia unica
                              </p>
                              <p className="neutral-500">
                                ¡Explorar el Parque Nacional Tikal fue una
                                aventura extraordinaria! Sumergirse en la selva
                                exuberante y las magníficas ruinas añade una
                                emoción única a la experiencia. Los guías son
                                conocedores y enriquecen el recorrido con
                                interesantes detalles. ¡Muy recomendado para una
                                escapada ecoturística!
                              </p>
                            </div>
                            <div className="card-top">
                              <div className="card-author">
                                <div className="card-image">
                                  {" "}
                                  <img
                                    src="/imgs/page/homepage1/author2.png"
                                    alt="Travila"
                                  />
                                </div>
                                <div className="card-info">
                                  <p className="text-lg-bold neutral-1000">
                                    Sara Mohamed
                                  </p>
                                  <p className="text-sm neutral-1000">
                                    Parque Tikal
                                  </p>
                                </div>
                              </div>
                              <div className="card-rate">
                                {" "}
                                <img
                                  src="/imgs/template/icons/star.svg"
                                  alt="Travila"
                                />
                                <img
                                  src="/imgs/template/icons/star.svg"
                                  alt="Travila"
                                />
                                <img
                                  src="/imgs/template/icons/star.svg"
                                  alt="Travila"
                                />
                                <img
                                  src="/imgs/template/icons/star.svg"
                                  alt="Travila"
                                />
                                <img
                                  src="/imgs/template/icons/star.svg"
                                  alt="Travila"
                                />
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section-box box-media background-body">
            <MediaSection />
          </section>
        </main>
      </DefaultLayout>
    </>
  );
}
