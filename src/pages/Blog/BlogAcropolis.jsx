import VideoPopup from "@/components/elements/VideoPopup";
import DefaultLayout from "../../components/layout/DefaultLayout";
import { Link } from "react-router-dom";
import MediaSection from "../../components/elements/MediaSection";

export default function BlogAcropolis() {
  return (
    <>
      <DefaultLayout headerStyle={1} footerStyle={1}>
        <main className="main">
          <section className="box-section box-breadcrumb background-body">
            <div className="container">
              <ul className="breadcrumbs">
                <li>
                  {" "}
                  <Link to="/">Inicio</Link>
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
                  <Link to="/destination">ciencia</Link>
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
                  <span className="text-breadcrumb">
                    Las Acrópolis del Parque Nacional Tikal Guatemala
                  </span>
                </li>
              </ul>
            </div>
          </section>
          <section className="box-section box-content-blog-detail background-body">
            <div className="container-banner-blog-detail">
              {" "}
              <img
                src="/imgs/page/art/Patrocinio_Natural_Pool.jpg"
                alt="Travila"
              />
            </div>
            <div className="container">
              <div className="box-content-detail-blog">
                <div className="box-content-info-detail">
                  <div className="head-blog-detail text-center">
                    {" "}
                    <Link className="btn btn-label-tag-lg background-2" to="#">
                      ciencia
                    </Link>
                    <Link className="btn btn-label-tag-lg background-7" to="#">
                      Ecologia
                    </Link>
                    <h4 className="neutral-1000 mt-25 mb-25">
                      Ecología del Parque Nacional Tikal en Guatemala
                    </h4>
                    <div className="meta-post">
                      <div className="meta-user">
                        <div className="box-author-small">
                          <img
                            src="/imgs/template/logo.png"
                            alt="Travilla"
                            style={{ objectFit: "scale-down" }}
                          />
                          <p className="text-sm-bold neutral-1000">
                            Ecoturismo y Aventura
                          </p>
                        </div>
                        <div className="post-meta-date">
                          <div className="post-date neutral-1000">
                            18 Sep 2024
                          </div>
                          <div className="post-time neutral-1000">6 mins</div>
                          <div className="post-comment neutral-1000">
                            38 comments
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-detail-post">
                    <p className="neutral-1000">
                      Acrópolis: Construcciones masivas de edificios
                      ceremoniales a gran escala, los cuales eran sectores muy
                      importantes de la ciudad; en este lugar se asentó el poder
                      político y administrativo, y era un lugar reservado para
                      los entierros de los gobernantes. Hay cuatro acrópolis en
                      Tikal: La Acrópolis del Norte, La Acrópolis Central, La
                      Acrópolis del Sur y la Acrópolis del Este.
                    </p>
                  </div>
                  <div className="box-image-video">
                    {" "}
                    <img src="/imgs/page/art/Patrocinio_Natural_Pool.jpg" />
                  </div>
                  <div className="content-detail-post ">
                    <h6>Acrópolis del Norte</h6>
                    <p>
                      La Acrópolis del Norte es un lugar sagrado, escogido para
                      el entierro de los Gobernantes de Tikal por más de 5
                      siglos entre el año 1 D. C. y el 550 D. C. Sin embargo, lo
                      más notable es que contiene evidencias de los primeros
                      pobladores de Tikal, quienes llegaron al área alrededor
                      del año 800 A. C. Estudios arqueológicos han revelado que
                      junto con las fundaciones del Mundo Perdido, las áreas de
                      la Acrópolis del Norte son las más antiguas, en donde se
                      establecieron los primeros pobladores de Tikal. La
                      Acrópolis del Norte fue ocupada por al menos 1500 años,
                      como se ha demostrado por más de una docena de niveles de
                      construcciones sucesivas, colocados uno encima del otro.
                    </p>
                    <h6></h6>
                    <p>
                      Desde la fundación de la acrópolis, se construyó una
                      terraza artificial en la parte superior, la cual es
                      sostenida por numerosas construcciones asociadas con
                      rituales. Su localización y diseño fueron concebidos
                      durante el Período Preclásico, siguiendo un antiguo
                      concepto ideológico basado en tres estructuras básicas;
                      describiendo una tríada, asociada con deidades
                      mitológicas, involucradas con la creación del Universo.
                      Numerosas estelas y altares retratan a los gobernantes de
                      Tikal y graban eventos trascendentales en sus vidas y
                      están localizados al frente de la Acrópolis.
                    </p>
                    <h6></h6>
                    <p>
                      En las capas de los edificios posteriores, los arqueólogos
                      encontraron conchas de mar, evidencia de una valiosa
                      fuente de alimento, y piedras importadas. La gente de
                      Tikal importaba mercadería de otras áreas, aún en los sus
                      primeros tiempos. Los arqueólogos también encontraron los
                      entierros de Huh Chaan Mah K’ina (o Nariz Enrollada) y de
                      K’awil Chaan (Cielo Tormentoso) dentro de los diferentes
                      templos. Otros miembros de la clase noble, tales como una
                      mujer del año 100 A. C., también fue encontrada. En su
                      tumba, encontraron muestras de la riqueza de la nobleza,
                      jade y otros artículos.
                    </p>
                    <h6></h6>
                    <p>
                      Esta máscara de un dios de nariz larga, pertenece al
                      primer edificio construido en este lugar. Su máscara es de
                      10 pies de alto. En los tiempos antiguos, esta máscara
                      pudo haber sido cubierta con estuco. La máscara y todo el
                      edificio fueron pintados de rojos brillantes, verdes,
                      amarillos y azules. Los edificios se veían muy diferentes
                      a los de roca desnuda que vemos ahora.
                    </p>
                    <h6>TEMPLO 33: </h6>
                    <p>
                      Los Mayas construyeron tres templos en este lugar sagrado.
                      Cielo Tormentoso, uno de los líderes más poderosos de
                      Tikal, fue enterrado en el primer templo después de su
                      muerte en el año 457 D. C. Después los Mayas cubrieron el
                      primer edificio con otro más grande e imponente, el cual
                      utilizaron durante los siguientes 250 años.
                    </p>
                    <h6>ESTELA 31:</h6>
                    <p>
                      Esta estela es una de las más famosas. Fue construida por
                      Cielo Tormentoso, uno de los gobernantes más célebres. Un
                      jaguar representado en ella, era el dios que protegía la
                      Ciudad de Tikal. El dorso de esta estela está cubierto por
                      la historia de los eventos más importantes en la historia
                      de Tikal. Los expertos creen que solamente los escribas y
                      las personas de la élite supieron leer. Los escribas
                      tuvieron una posición muy importante. El texto también fue
                      diseñado para ser leído por los dioses. Los gobernantes
                      proclamaban sus logros a la gente de su ciudad, a los
                      dioses y a sus ancestros.
                    </p>
                    <h6>LA PARTE SUPERIOR DE LA ESTELA 31: </h6>
                    <p>
                      El gobernante Cielo Tormentoso, sostiene un tocado para
                      que lo vea la gente, antes de colocárselo. El título en el
                      tocado y las palabras de la estela, lo conectan con su
                      famoso abuelo Chak-To-Ich’ak. De esta forma, agrega poder
                      y fama a la visa de la población. En este tiempo Tikal era
                      una ciudad poderosa, con un gobernante poderoso. La ciudad
                      en sí creció y floreció. Tikal controlaba o influenciaba a
                      muchos otros lugares en la región y sus gobernantes
                      controlaban las rutas importantes del comercio.
                      <br></br>
                      Justo 100 años más tarde, Tikal fue derrotada por Caracol.
                      Su gloria oscureció durante otros 150 años. Pero después,
                      Ha Sawa Chaan-K’awil subió al trono y le regresó a Tikal
                      su gloria. Como un símbolo, él enterró la Estela 31, un
                      monumento dedicado a Cielo Tormentoso, dentro del segundo
                      templo. Luego construyó un nuevo templo, que se erguía
                      hasta unos 8 pisos sobre el nivel de la Gran Plaza.
                    </p>
                    <div className="content-detail-post ">
                      <h6>Acrópolis Central</h6>
                      <p>
                        Es un enorme complejo de palacios residenciales y
                        administrativos en donde vivió la Familia Real de Tikal.
                        El complejo abarca alrededor de 1.5 hectáreas y está
                        constituido por 45 edificios y 6 patios (rodeados por
                        palacios de dos y tres pisos). Escaleras, salones y
                        portales comunican los edificios y las plazas. Muchos de
                        estos palacios fueron usados como residencias y muchas
                        de las cámaras todavía contienen camas de piedra, sobre
                        las cuales fueron colocadas pieles y alfombras para
                        hacer camas confortables.
                      </p>
                      <p>
                        {" "}
                        El Palacio Mahler y el Palacio de los Cinco Pisos son
                        los edificios más sobresalientes del complejo. El sur de
                        éstos fue la reserva de agua más importante de Tikal,
                        dividiendo las Acrópolis Central y Sur. Los expertos
                        creen que la familia gobernante vivió en este grupo de
                        edificios. El laberinto de cuartos y patios creció tanto
                        como la gente que vivió allí por un período de más de
                        200 años. Cuando la gente vivió allí, colgaron cortinas
                        a través de los portales. Todavía podemos observar los
                        agujeros hechos en los portales de piedra para colgar
                        las cortinas. Las paredes del edificio pudieron haber
                        sido decoradas con pinturas y colores brillantes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <NewsSection /> */}
          <section className="section-box box-media background-body">
            <MediaSection />
          </section>
        </main>
      </DefaultLayout>
    </>
  );
}
