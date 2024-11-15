import DefaultLayout from "../../components/layout/DefaultLayout";
import { Link } from "react-router-dom";
import VideoPopup from "@/components/elements/VideoPopup";
import { swiperGroup1, swiperGroupAnimate } from "@/util/swiperOption";
import { Swiper, SwiperSlide } from "swiper/react";
import IconInstagram from "../../components/ui/IconInstagram";
import IconFacebook from "../../components/ui/IconFacebook";
import IconTwitter from "../../components/ui/IconTwitter";
import IconYouTube from "../../components/ui/IconYouTube";
import IconArrowLeft from "../../components/elements/IconArrowLeft";
import IconArrowRight from "../../components/elements/IconArrowRight";
import PostList from "../../components/elements/PostList";
import { useTranslation } from "react-i18next";
import MediaSection from "../../components/elements/MediaSection";
import CardNews from "../../components/elements/CardNews";
import ImageGallery from "../../components/elements/ImageGallery";
import { Figure, FigureCaption, FigureImage } from "react-bootstrap";

export default function PageMapas() {
  const { t } = useTranslation("arte");
  const more_info = t("arte.more_info", { returnObjects: true });
  // Obtener las tarjetas de noticias desde el archivo JSON de traducciones
  const slides = useTranslation("cardnew.news.cards", { returnObjects: true });
  return (
    <>
      <DefaultLayout headerStyle={1} footerStyle={1}>
        <main className="main">
          <section className="box-section box-breadcrumb background-body">
            <div className="container">
              <ul className="breadcrumbs">
                <li>
                  {" "}
                  <Link to="/">Parque Tikal</Link>
                  <span className="arrow-right">
                    <svg
                      width={7}
                      height={12}
                      viewBox="0 0 7 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 11L6 6L1 1"
                        stroke=""
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                    </svg>
                  </span>
                </li>
                <li>
                  {" "}
                  <Link to="/arts">Mapas</Link>
                  <span className="arrow-right">
                    <svg
                      width={7}
                      height={12}
                      viewBox="0 0 7 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 11L6 6L1 1"
                        stroke=""
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                    </svg>
                  </span>
                </li>
                <li>
                  {" "}
                  <span className="text-breadcrumb">Mapa Parque Tikal</span>
                </li>
              </ul>
            </div>
          </section>
          <section className="section-box box-banner-blog-detail-2 background-body">
            <div className="container">
              <div className="box-banner-single-blog">
                <div className="box-button-top-right">
                  {" "}
                  <Link className="btn btn-label-tag-lg background-2" to="#">
                    Arte
                  </Link>
                  <Link className="btn btn-label-tag-lg background-7" to="#">
                    Arqueología
                  </Link>
                </div>
                <div className="box-swiper">
                  <div className="swiper-container swiper-group-1">
                    <Swiper {...swiperGroup1}>
                      <SwiperSlide>
                        <img
                          // src="/imgs/page/blog/banner-detail2.png"
                          src="/imgs/page/home/butterfly.jpg"
                          alt="Travile"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src="/imgs/page/art/art_1.jpg" alt="Travile" />
                      </SwiperSlide>
                    </Swiper>
                  </div>
                  <div className="swiper-button-prev swiper-button-prev-style-1 swiper-button-prev-group-1">
                    <IconArrowLeft />
                  </div>
                  <div className="swiper-button-next swiper-button-next-style-1 swiper-button-next-group-1">
                    <IconArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="box-section box-content-blog-detail-2 background-body">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mb-35">
                  <div className="box-content-detail-blog">
                    <div className="box-content-info-detail mt-0 pt-0">
                      <div className="head-blog-detail">
                        <h4 className="neutral-1000 mb-25">
                          Arqueologia & Arquitectura del Parque Nacional Tikal
                          en Guatemala
                        </h4>
                        <div className="meta-post">
                          <div className="meta-user justify-content-start">
                            <div className="box-author-small">
                              <img
                                src="/imgs/template/avatar.png"
                                alt="Travilla"
                              />
                              <p className="text-sm-bold neutral-1000">
                                Ecotourism & Adventure Specialist
                              </p>
                            </div>
                            <div className="post-meta-date">
                              <div className="post-date neutral-1000">
                                18 Sep 2024
                              </div>
                              <div className="post-time neutral-1000">
                                6 mins
                              </div>
                              <div className="post-comment neutral-1000">
                                38 comments
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-detail-post">
                        <p className="neutral-1000">
                          Parque-Tikal.com está dirigido a viajeros que desean
                          aprender más acerca de la arqueología y arquitectura
                          del Parque Nacional Tikal. Esperamos disfrute de
                          nuestra selección de los complejos más importantes de
                          Tikal. Descubra diferentes complejos y estructuras
                          durante su estancia.
                        </p>
                      </div>
                      <div className="box-image-video">
                        {" "}
                        <img
                          className="bdrd8"
                          src="/imgs/page/maps/Tikal_map2.gif"
                          alt="Travilla"
                        />
                        <FigureCaption>
                          University of Pennsylvania's Map of the Dig at Tikal
                        </FigureCaption>
                        {/* <VideoPopup vdocls="btn-play-video popup-youtube" /> */}
                      </div>

                      <div className="box-image-video">
                        {" "}
                        <img
                          className="bdrd8"
                          src="/imgs/page/maps/Tikal final art.jpg"
                          alt="Travilla"
                        />
                        <FigureCaption>Mapa 3d del Tikal</FigureCaption>
                        {/* <VideoPopup vdocls="btn-play-video popup-youtube" /> */}
                      </div>
                      <p>
                        Permítanos llevarle en un viaje a través del tiempo
                        mientras exploramos el Parque Nacional de Tikal. Nuestro
                        mapa 3D de Tikal le dará una buena idea de dónde está
                        todo en el parque.
                      </p>
                      <br />
                      <div className="content-detail-post">
                        <div className="my-4">
                          <Figure>
                            <FigureImage
                              src="/imgs/page/maps/Patrocinio_Natural_Pool.jpg"
                              alt="Descripción de la imagen"
                              caption="Esta es la descripción de la imagen."
                            ></FigureImage>
                            <FigureCaption>
                              {" "}
                              Ecotourism & Adventure Specialist
                            </FigureCaption>
                          </Figure>
                        </div>
                        <br></br>
                        <Figure>
                          <FigureImage
                            src="/imgs/page/maps/001mapa.jpg"
                            alt="Descripción de la imagen"
                            caption="Esta es la descripción de la imagen."
                          ></FigureImage>
                        </Figure>
                        <div className="footer-post-tags">
                          <div className="box-tags">
                            {" "}
                            <Link className="btn btn-tag" to="/">
                              Tikal
                            </Link>
                            <Link className="btn btn-tag" to="/tours">
                              Tours
                            </Link>
                            <Link className="btn btn-tag" to="/science">
                              Ciencia
                            </Link>
                          </div>
                          <div className="box-share">
                            <div className="d-flex align-items-center justify-content-center justify-content-md-end box-socials-footer-cover">
                              <p className="text-lg-bold neutral-1000 d-inline-block mr-10 mb-0">
                                Comparte esto:
                              </p>
                              <div className="box-socials-footer d-inline-block">
                                <Link
                                  className="icon-socials icon-instagram"
                                  to="#"
                                >
                                  <IconInstagram />
                                </Link>
                                <Link
                                  className="icon-socials icon-facebook"
                                  to="#"
                                >
                                  <IconFacebook />
                                </Link>
                                <Link
                                  className="icon-socials icon-twitter"
                                  to="#"
                                >
                                  <IconTwitter />
                                </Link>
                                <Link className="icon-socials icon-be" to="#">
                                  <IconYouTube />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="box-leave-comment background-100">
                          <div className="box-form-reviews">
                            <h5 className="neutral-1000 mb-25">
                              Deja un comentario
                            </h5>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Nombre"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Correo"
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <textarea
                                    className="form-control"
                                    placeholder="comentario"
                                    defaultValue={""}
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <button className="btn btn-black-lg-square">
                                  Enviar Comentario
                                  <svg
                                    width={16}
                                    height={16}
                                    viewBox="0 0 16 16"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M8 15L15 8L8 1M15 8L1 8"
                                      stroke=""
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      fill="none"
                                    />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="box-list-comment background-card">
                          <div className="list-reviews">
                            <div className="item-review">
                              <div className="head-review">
                                <div className="author-review">
                                  {" "}
                                  <img
                                    src="/imgs/page/tour-detail/avatar.png"
                                    alt="Travila"
                                  />
                                  <div className="author-info">
                                    <p className="text-lg-bold">
                                      Sarah Johnson
                                    </p>
                                    <p className="text-sm-medium neutral-500">
                                      December 4, 2024 at 3:12 pm
                                    </p>
                                  </div>
                                </div>
                                <div className="rate-review">
                                  {" "}
                                  <img
                                    src="/imgs/page/tour-detail/star-big.svg"
                                    alt="Travila"
                                  />
                                  <img
                                    src="/imgs/page/tour-detail/star-big.svg"
                                    alt="Travila"
                                  />
                                  <img
                                    src="/imgs/page/tour-detail/star-big.svg"
                                    alt="Travila"
                                  />
                                  <img
                                    src="/imgs/page/tour-detail/star-big.svg"
                                    alt="Travila"
                                  />
                                  <img
                                    src="/imgs/page/tour-detail/star-big.svg"
                                    alt="Travila"
                                  />
                                </div>
                              </div>
                              <div className="content-review">
                                <p className="text-sm-medium neutral-800">
                                  ¡Explorar el Parque Nacional Tikal fue una
                                  aventura extraordinaria! Sumergirse en la
                                  selva exuberante y las magníficas ruinas añade
                                  una emoción única a la experiencia. Los guías
                                  son conocedores y enriquecen el recorrido con
                                  interesantes detalles. ¡Muy recomendado para
                                  una escapada ecoturística!
                                </p>
                              </div>
                            </div>
                            <div className="item-review">
                              <div className="head-review">
                                <div className="author-review">
                                  {" "}
                                  <img
                                    src="/imgs/page/blog/avatar.png"
                                    alt="Travila"
                                  />
                                  <div className="author-info">
                                    <p className="text-lg-bold">
                                      Sarah Johnson
                                    </p>
                                    <p className="text-sm-medium neutral-500">
                                      December 4, 2024 at 3:12 pm
                                    </p>
                                  </div>
                                </div>
                                <div className="rate-review">
                                  {" "}
                                  <img
                                    src="/imgs/page/tour-detail/star-big.svg"
                                    alt="Travila"
                                  />
                                  <img
                                    src="/imgs/page/tour-detail/star-big.svg"
                                    alt="Travila"
                                  />
                                  <img
                                    src="/imgs/page/tour-detail/star-big.svg"
                                    alt="Travila"
                                  />
                                  <img
                                    src="/imgs/page/tour-detail/star-big.svg"
                                    alt="Travila"
                                  />
                                  <img
                                    src="/imgs/page/tour-detail/star-big.svg"
                                    alt="Travila"
                                  />
                                </div>
                              </div>
                              <div className="content-review">
                                <p className="text-sm-medium neutral-800">
                                  ¡Explorar el Parque Nacional Tikal fue una
                                  aventura extraordinaria! Sumergirse en la
                                  selva exuberante y las magníficas ruinas añade
                                  una emoción única a la experiencia. Los guías
                                  son conocedores y enriquecen el recorrido con
                                  interesantes detalles. ¡Muy recomendado para
                                  una escapada ecoturística!
                                </p>
                              </div>
                            </div>
                            <div className="item-review">
                              <div className="head-review">
                                <div className="author-review">
                                  {" "}
                                  <img
                                    src="/imgs/page/blog/avatar2.png"
                                    alt="Travila"
                                  />
                                  <div className="author-info">
                                    <p className="text-lg-bold">
                                      Sarah Johnson
                                    </p>
                                    <p className="text-sm-medium neutral-500">
                                      December 4, 2024 at 3:12 pm
                                    </p>
                                  </div>
                                </div>
                                <div className="rate-review">
                                  {" "}
                                  <img
                                    src="/imgs/page/tour-detail/star-big.svg"
                                    alt="Travila"
                                  />
                                  <img
                                    src="/imgs/page/tour-detail/star-big.svg"
                                    alt="Travila"
                                  />
                                  <img
                                    src="/imgs/page/tour-detail/star-big.svg"
                                    alt="Travila"
                                  />
                                  <img
                                    src="/imgs/page/tour-detail/star-big.svg"
                                    alt="Travila"
                                  />
                                  <img
                                    src="/imgs/page/tour-detail/star-big.svg"
                                    alt="Travila"
                                  />
                                </div>
                              </div>
                              <div className="content-review">
                                <p className="text-sm-medium neutral-800">
                                  ¡Explorar el Parque Nacional Tikal fue una
                                  aventura extraordinaria! Sumergirse en la
                                  selva exuberante y las magníficas ruinas añade
                                  una emoción única a la experiencia. Los guías
                                  son conocedores y enriquecen el recorrido con
                                  interesantes detalles. ¡Muy recomendado para
                                  una escapada ecoturística!
                                </p>
                              </div>
                            </div>
                          </div>
                          <nav aria-label="Page navigation example">
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
                                <Link
                                  className="page-link"
                                  to="#"
                                  aria-label="Next"
                                >
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
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-35">
                  <div className="box-search-style-2">
                    <form action="#">
                      <input type="text" placeholder="Buscar" />
                      <input className="btn-search-submit" type="submit" />
                    </form>
                  </div>
                  <div className="box-sidebar-border">
                    <div className="box-head-sidebar">
                      <p className="text-xl-bold neutral-1000">
                        {/* MÁS INFORMACION */}
                      </p>
                    </div>
                    <div className="box-content-sidebar">
                      {typeof more_info === "object" && (
                        <PostList posts={more_info.related_posts} />
                      )}
                    </div>
                  </div>
                  {/* <div className="box-subscriber-blog-3 mb-35">
                    <p className="text-md-bold neutral-1000">
                      Subscribe to see secret deals prices drop the moment you
                      sign up!
                    </p>
                    <div className="footer-type-3">
                      <div className="d-flex align-items-center">
                        <form className="form-newsletter" action="#">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Enter your email"
                          />
                          <input
                            className="btn btn-brand-secondary"
                            type="submit"
                            defaultValue="Subscribe"
                          />
                        </form>
                      </div>
                    </div>
                  </div> */}
                  <div className="box-sidebar-border">
                    <div className="box-head-sidebar">
                      <p className="text-xl-bold neutral-1000">Galería</p>
                    </div>
                    <ImageGallery />
                  </div>
                  {/* <div className="box-sidebar-none-border box-banner-ads-recent">
                    <p className="text-md-bold mb-5">Save your time!</p>
                    <h6>Explore, Book, Soar: Your Journey Awaits!</h6>
                    <Link className="btn btn-brand-secondary" to="#">
                      View More
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 15L15 8L8 1M15 8L1 8"
                          stroke=""
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          {" "}
                        </path>
                      </svg>
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          </section>
          {/* <section className="section-box box-news box-news-blog-single background-body">
            <div className="container">
              <div className="row align-items-end">
                <div className="col-md-9 mb-30 wow fadeInUp">
                  <h2 className="neutral-1000">You might be interested</h2>
                  <p className="text-xl-medium neutral-500">
                    Favorite destinations based on customer reviews
                  </p>
                </div>
                <div className="col-md-3 mb-30 wow fadeInUp">
                  <div className="box-button-slider box-button-slider-team text-end">
                    <div className="swiper-button-prev swiper-button-prev-style-1 swiper-button-prev-animate">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M7.99992 3.33325L3.33325 7.99992M3.33325 7.99992L7.99992 12.6666M3.33325 7.99992H12.6666"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="swiper-button-next swiper-button-next-style-1 swiper-button-next-animate">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M7.99992 12.6666L12.6666 7.99992L7.99992 3.33325M12.6666 7.99992L3.33325 7.99992"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-slider box-swiper-padding">
              <div className="box-list-news">
                <div className="box-swiper mt-30">
                  <div className="swiper-container swiper-group-animate swiper-group-journey container mx-auto">
                    <Swiper {...swiperGroupAnimate}>
                      {typeof slides === "object" &&
                        slides.map((slide, idx) => (
                          <SwiperSlide key={idx}>
                            <CardNews
                              label={slide.label}
                              imgSrc={slide.imgSrc}
                              alt={slide.alt}
                              date={slide.date}
                              time={slide.time}
                              comments={slide.comments}
                              title={slide.title}
                              link={slide.link}
                              author={slide.author}
                              authorImg="/imgs/template/avatar.png" // Puedes obtener esta ruta desde el JSON si varía
                            />
                          </SwiperSlide>
                        ))}
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          <section className="section-box box-media background-body">
            <MediaSection />
          </section>
        </main>
      </DefaultLayout>
    </>
  );
}
