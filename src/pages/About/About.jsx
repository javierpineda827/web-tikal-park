import { Link } from "react-router-dom";

import DefaultLayout from "../../components/layout/DefaultLayout";
import MediaSection from "../../components/elements/MediaSection";
export default function About() {
  return (
    <>
      <DefaultLayout headerStyle={1} footerStyle={1}>
        <div>
          <section className="box-section box-breadcrumb background-100">
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
                  <span className="text-breadcrumb">Acerca de</span>
                </li>
              </ul>
            </div>
          </section>
          <section className="section-box box-about-1 background-body">
            <div className="container">
              <div className="row align-items-end">
                <div className="col-lg-7 wow fadeInUp">
                  {" "}
                  <span className="btn btn-brand-secondary">
                    {" "}
                    <img
                      className="mr-10"
                      src="/imgs/page/homepage9/real.svg"
                      alt="Travile"
                    />
                    Acerca de
                  </span>
                  <h2 className="neutral-1000 mt-15 mb-15 ">
                    Parque Nacional Tikal
                  </h2>
                  <p className="text-xl-medium neutral-500"> </p>
                </div>
              </div>
            </div>
          </section>

          <section className="section-box ">
            <div className="container">
              <div className="card card-info">
                <article className="card-body d-flex justify-content-start gap-2 flex-column">
                  <p className="text-lg">
                    El Parque Nacional Tikal es una zona núcleo dentro de la
                    Reserva de Biósfera Maya, un importante patrimonio naural y
                    cultural en el norte de Guatemala. Por décadas hemos estado
                    involucrados en la protección de Tikal, particularmente en
                    la prevención de incendios forestales y en el manejo de los
                    residuos sólidos durante las temporadas pico de turismo.
                  </p>

                  <p className="text-lg">
                    Como operadores pioneros y líderes de ecoturismo en
                    Guatemala hemos asumido plenamente nuestra responsabilidad y
                    cuidado en el manejo del parque. Te llevaremos a viajes de
                    experiencias inolvidables y te mantendremos haciendo
                    actividades interesantes durante tu estancia, ¡pero más que
                    nada tu visita tendrá un impacto positivo directo en la
                    investigación científica y la conservación!
                  </p>
                  <p className="text-lg">
                    Disfruta de la belleza natural alrededor de los templos de
                    Tikal...
                  </p>
                  <p className="text-lg">
                    Bienvenidos al Parque Nacional Tikal en el norte de
                    Guatemala, comprende un área de 222 mi2 o 583 km2 . El
                    parque contiene unas de las más fascinantes piezas
                    arqueológicas de la antigua Civilización Maya. Excavada por
                    la Universidad de Pennsylvania en 1956 y 1969, Tikal es el
                    sitio excavado más grande de América. La excavación y
                    restauración en Tikal continuaron bajo el Proyecto Nacional
                    Tikal, la Universidad de San Carlos de Guatemala y el IDAEH
                    Instituto de Antropología e Historia, revelando maravillas
                    que uno solo puede imaginar. El Instituto maneja el parque.
                    Muchos de los montículos cubiertos por una gruesa capa de
                    selva por más de mil años han sido dejados intactos, tal
                    como se encuentraron por los arqueólogos. La restauración
                    continúa hasta el día de hoy, así como nuestra colaboración
                    con el parque.
                  </p>
                </article>
              </div>
            </div>
          </section>
          <section className="section-box box-why-book-travila-5 ">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 mb-30">
                  <div className="row"></div>
                </div>
              </div>
            </div>
          </section>
          <section className="container mx">
            <div className="d-flex justify-content-center">
              <img src="/imgs/page/contact/JP Daigneault tikaltemple.jpg" />
            </div>
          </section>
          <section className="section-box block-meet ">
            <div className="container">
              <div className="row align-items-end"></div>
              <div className="box-meet-team mt-35">
                <div className="row">
                  <div className="col-lg-4 col-md-6 wow fadeInUp my-4">
                    <div className="card">
                      <div className="card-header">
                        <h6 className="neutral-1000 mt-4">Administración</h6>
                      </div>
                      <div
                        className="card-body card-info d-flex flex-column gap-2"
                        style={{ height: "12rem" }}
                      >
                        <p className="text-sm-medium neutral-500 text-balance">
                          1. El Director del Parque es la máxima autoridad
                          dentro del parque, y trabaja para el Instituto de
                          Antropología e Historia, una división del Ministerio
                          de Cultura y Deportes del Gobierno de la República de
                          Guatemala.
                        </p>
                        <p className="text-sm-medium neutral-500 text-balance">
                          <b>2.</b> El edificio administrativo del Parque se
                          encuentra detrás del área del museo, y es la sede de
                          la oficina del Director del Parque, la Secretaría...
                        </p>
                      </div>
                      <div className="card-footer d-flex justify-content-end">
                        <Link to="/parkmag" className="">
                          <div className="card-button badge rounded-pill bg-success text-light px-3 py-2">
                            <span className="text-sm-medium">Leer más </span>
                            <svg
                              width={8}
                              height={8}
                              viewBox="0 0 8 8"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.08848 6.97917L7.08848 1.20442L1.31373 1.20442M7.08848 1.20442L1.31373 6.97917"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 wow fadeInUp my-4">
                    <div className="card">
                      <div className="card-header">
                        <h6 className="neutral-1000 mt-4">Reglamento</h6>
                      </div>
                      <div
                        className="card-body card-info d-flex flex-column gap-2"
                        style={{ height: "12rem" }}
                      >
                        <p className="text-sm-medium neutral-500 text-balance">
                          1. El Parque Nacional Tikal está abierto desde las 6
                          a.m. hasta las 6 p.m., todos los días de la semana,
                          los 365 días del año.
                        </p>
                        <p className="text-sm-medium neutral-500 text-balance">
                          2. Hay una tarifa de US$ 20- 22 (Q 150 quetzales) por
                          el boleto de ingreso al parque entre las 6 a.m. y las
                          6 p.m, válido únicamente durante el día en que se
                          compra. Antiguamente, podia usted validar
                        </p>
                      </div>
                      <div className="card-footer d-flex justify-content-end">
                        <Link to="/parkreg" className="">
                          <div className="card-button badge rounded-pill bg-success text-light px-3 py-2">
                            <span className="text-sm-medium">Leer más </span>
                            <svg
                              width={8}
                              height={8}
                              viewBox="0 0 8 8"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.08848 6.97917L7.08848 1.20442L1.31373 1.20442M7.08848 1.20442L1.31373 6.97917"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 wow fadeInUp my-4">
                    <div className="card">
                      <div className="card-header">
                        <h6 className="neutral-1000 mt-4">¿Sabías qué?</h6>
                      </div>
                      <div
                        className="card-body card-info d-flex flex-column gap-2"
                        style={{ height: "12rem" }}
                      >
                        <p className="text-sm-medium neutral-500 text-balance">
                          Biologia Centrali Americana, una famosa serie
                          publicada en Inglaterra a finales del siglo XIX
                          contiene 87 volúmenes de la flora y la fauna de Centro
                          America. Fue precisamente debido a los descubrimientos
                          de Sir Arthur Percival Maudslay que se agregaron los
                          volúmenes de Arqueología...
                        </p>
                      </div>
                      <div className="card-footer d-flex justify-content-end">
                        <Link to="/tikaltrivia" className="">
                          <div className="card-button badge rounded-pill bg-success text-light px-3 py-2">
                            <span className="text-sm-medium">Leer más </span>
                            <svg
                              width={8}
                              height={8}
                              viewBox="0 0 8 8"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.08848 6.97917L7.08848 1.20442L1.31373 1.20442M7.08848 1.20442L1.31373 6.97917"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 wow fadeInUp my-4">
                    <div className="card">
                      <div className="card-header">
                        <h6 className="neutral-1000 mt-4">
                          Especialistas en Ecoturismo y Aventura
                        </h6>
                      </div>
                      <div
                        className="card-body card-info d-flex flex-column gap-2"
                        style={{ height: "12rem" }}
                      >
                        <p className="text-sm-medium neutral-500 text-balance">
                          Ofrecemos servicios de excelente calidad a los
                          eco-viajeros en México, el Mundo Maya, Centroamérica y
                          el Caribe. Nuestra misión es redistribuir los ingresos
                          generados por el ecoturismo a las comunidades locales,
                          apoyar a nuestros parques nacionales y reservas
                          naturales y ayudar a personas de todo el mundo a tener
                          profundas experiencias en la naturaleza interactuando
                          con nuestro patrimonio cultural y la gente
                        </p>
                      </div>
                      <div className="card-footer d-flex justify-content-end">
                        <Link to="/tikaltrivia" className="">
                          <div className="card-button badge rounded-pill bg-success text-light px-3 py-2">
                            <span className="text-sm-medium">Leer más </span>
                            <svg
                              width={8}
                              height={8}
                              viewBox="0 0 8 8"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.08848 6.97917L7.08848 1.20442L1.31373 1.20442M7.08848 1.20442L1.31373 6.97917"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section-box box-media background-body">
            <MediaSection />
          </section>
        </div>
      </DefaultLayout>
    </>
  );
}
