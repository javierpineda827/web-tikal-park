import VideoPopup from "@/components/elements/VideoPopup";
import DefaultLayout from "../../components/layout/DefaultLayout";
import { Link } from "react-router-dom";
import MediaSection from "../../components/elements/MediaSection";
import NewsSection from "../../components/elements/NewsSection";

export default function BlogFauna() {
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
                  <Link to="/science">ciencia</Link>
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
                    Fauna del Parque Nacional Tikal
                  </span>
                </li>
              </ul>
            </div>
          </section>
          <section className="box-section box-content-blog-detail background-body">
            <div className="container-banner-blog-detail">
              {" "}
              <img
                src="/imgs/page/home/jaguar.webp"
                alt="Travila"
                style={{ height: "39rem", objectFit: "cover" }}
              />
            </div>
            <div className="container">
              <div className="box-content-detail-blog">
                <div className="box-content-info-detail">
                  <div className="head-blog-detail text-center">
                    {" "}
                    <Link
                      className="btn btn-label-tag-lg background-2"
                      to="/science"
                    >
                      ciencia
                    </Link>
                    <Link
                      className="btn btn-label-tag-lg background-7"
                      to="/ecology"
                    >
                      Ecologia
                    </Link>
                    <h4 className="neutral-1000 mt-25 mb-25">
                      Fauna del Parque Nacional Tikal
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
                    <h6>Mamíferos residentes del Parque Nacional Tikal</h6>
                    <p className="neutral-1000">
                      El mono aullador Negro Mexicano es completamente negro con
                      el pelo largo. El escroto de los machos, mayores de 3-4
                      meses, es blanco y sobresaliente. Sus hombros son gruesos
                      y a la vez, sus piernas y caderas se ven
                      desproporcionalmente pequeños y débiles. Tienen colas
                      prensiles y las llevan enrolladas. Estos monos son
                      similares al mono aullador café (Alouatta palliata) en que
                      ambos tienen un flequillo a los lados mas pálido. Los
                      monos araña centroamericanos (Ateles geoffroyi) viven en
                      la misma área y son café o plateado con una mascara pálida
                      alrededor de los ojos.
                    </p>
                    <h6>Mono aullador</h6>
                    <div className="container mx-auto mb-4">
                      <div className="d-flex justify-content-center justify-items-center">
                        <table className="table table-striped table-responsive">
                          <thead className="table-success">
                            <tr>
                              <td colSpan={2} className="fw-semibold fs-6">
                                Mono aullador negro mexicano o Saraguate{" "}
                              </td>
                            </tr>
                          </thead>
                          <tbody className="">
                            <tr>
                              <th className="fw-semibold">Orden</th>
                              <td>Primates</td>
                            </tr>
                            <tr>
                              <th className="fw-semibold">Familia</th>
                              <td>Cebidae</td>
                            </tr>
                            <tr>
                              <th className="fw-semibold">Especie</th>
                              <td>Alouatta pigra </td>
                            </tr>
                          </tbody>
                        </table>
                        <figure className="container mx-auto align-center">
                          <img
                            src="/imgs/page/fauna/mono.gif"
                            alt="Travilla"
                            width={240}
                          />
                          <figcaption className="text-muted mt-2">
                            Mono aullador, Alouatta pigra
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    <p>
                      La Reserva de la Biosfera Maya, junto con las Reservas de
                      Biosfera de Calakmul y Montes Azules (ambas en México),
                      representan la segunda extensión de bosques del continente
                      americano después de la selva amazónica en Brasil. La
                      mayor parte de la Reserva de la Biosfera Maya, en
                      Guatemala, permanece milagrosamente imperturbable, a pesar
                      de los extendidos incendios forestales durante la estación
                      seca y las amenazas derivadas de la pobreza generalizada
                      en Guatemala (invasiones de tierras). Sin embargo, los
                      recientes descubrimientos de petróleo y los nuevos
                      inmigrantes, que han llegado al territorio de Petén,
                      plantean graves desafíos y limitaciones al Parque Nacional
                      Laguna del Tigre, la mayor zona núcleo de la Reserva de la
                      Biosfera Maya y el parque nacional más extenso de
                      Guatemala.
                    </p>
                  </div>
                  {/* <div className="box-image-video container-sm">
                    {" "}
                    <figure>
                      <img
                        src="/imgs/page/tikal/MIRADOR JUNE 3 2006 313.jpg"
                        alt="Travilla"
                      />
                      <figcaption className="text-muted mt-2">
                        El Parque Nacional Tikal, que comprende 583 kilómetros
                        cuadrados, es una zona núcleo dentro de la Reserva de
                        Biosfera Maya, creada en 1990, aunque el parque fue
                        declarado parque nacional en 1955.
                      </figcaption>
                    </figure>
                    <VideoPopup
                      vdocls="btn-play-video popup-youtube"
                      url_video={"U5htblOxNHQ"}
                    />
                  </div> */}
                  <div className="content-detail-post">
                    <h6></h6>
                    <p>
                      Las vocalizaciones del mono aullador son un coro recio de
                      aullidos que continúa por varios minutos, especialmente al
                      amanecer, en la tarde y durante tormentas de lluvia. El
                      aullido del macho empieza como una serie de gruñidos bajos
                      que van acelerándose hasta convertirse en rugidos
                      profundos y largos. Las hembras acompañan los rugidos de
                      los machos con rugidos de entonación más alta. Cuando
                      están en alerta, un mono del grupo da unos pocos gruñidos
                      suaves. Son diurnos, arbóreos y sus grupos están
                      conformados por 1 a 10, usualmente 4 a 6 miembros.
                    </p>
                    <h6></h6>
                    <p>
                      Se alimentan de frutas y hojas. Se pueden observar en
                      bosques cercanos a los sitios arqueológicos.
                      Aparentemente, su comportamiento es parecido al de los
                      monos que se encuentran en bosques siempre verdes y
                      bosques de tierras bajas cerca de ríos. Se distribuyen en
                      el área de Centroamérica (Guatemala y Belice) y la
                      Península de Yucatán. Están en peligro debido a la
                      deforestación y la cacería. Algunos grupos pueden haber
                      sido afectados por epidemias de fiebre amarilla. (CITES
                      Apéndice I, US-ESA en peligro de extinción)
                    </p>
                    <h6></h6>
                    <p>
                      Algunos nombres comunes en español son Mono aullador y
                      saraguate. En Belice, les dicen baboon, y en lengua Maya,
                      batz.
                    </p>

                    <h6>Mono araña</h6>
                    <div className="container mx-auto mb-4">
                      <div className="d-flex justify-content-center justify-items-center">
                        <figure className="container mx-auto align-center">
                          <img
                            src="/imgs/page/fauna/JPmonoarana.jpg"
                            alt="Travilla"
                            width={320}
                          />
                          <figcaption className="text-muted mt-2">
                            Mono araña, Ateles geoffroyi{" "}
                            <i> Foto por JP Daignault</i>
                          </figcaption>
                        </figure>
                        <table className="table table-striped table-responsive">
                          <thead className="table-success">
                            <tr>
                              <td colSpan={2} className="fw-semibold fs-6">
                                Mono Araña{" "}
                              </td>
                            </tr>
                          </thead>
                          <tbody className="">
                            <tr>
                              <th className="fw-semibold">Orden</th>
                              <td>Carnívora</td>
                            </tr>
                            <tr>
                              <th className="fw-semibold">Familia</th>
                              <td>Canidae</td>
                            </tr>
                            <tr>
                              <th className="fw-semibold">Especie</th>
                              <td>Nasua narica</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <h6></h6>
                    <p>
                      Al mono araña se le conoce por varios nombres: mono Negro,
                      marimonda, brasilargo y mono colorado, spider monkey (en
                      inglés), y verré y maax en lengua Maya
                    </p>
                    <p>
                      El mono araña se identifica por su cuerpo superior de
                      color negro, café o rojizo. Su cara a menudo máscara de
                      piel sin pigmento alrededor de sus ojos y hocico. Sus
                      extremidades usualmente son negras u oscuras. Sus partes
                      inferiores varían entre gris oscuro, blanco, café claro,
                      rojizo y rubio oscuro o negro en algunas poblaciones. Los
                      monos araña son altamente variables individualmente y
                      también geográficamente.
                    </p>
                    <h6></h6>
                    <p>
                      El espeso dosel impide que la luz llegue al suelo de la
                      selva, haciéndole que permanezca caliente y húmedo abajo,
                      contrastando con las plantas resistentes a sequía (cactus)
                      que crecen justo encima del dosel, donde está caliente y
                      seco.
                    </p>
                    <h6></h6>
                    <p>
                      La distribución del mono araña se extiende a través de
                      toda Centroamérica, ambas costas del sur de México hasta
                      el sur de Colombia, Darien y Panamá, al oeste de los Andes
                      y Ecuador central, y la costa norte de Colombia y
                      Venezuela. Este animal se encuentre en peligro debido a la
                      deforestación y fragmentación de su hábitat y por la caza.
                      Pueden ser afectados también por brotes de fiebre
                      amarilla. Esta especie en particular necesita de áreas
                      grandes de territorio para poder sobrevivir. (CITES
                      Apéndice I).
                    </p>
                    <p>
                      Las vocalizaciones del mono araña son gritos largos que se
                      pueden oír a largas distancias. Durante la observación
                      cercana, se les escucha gemidos suaves, pero cuando están
                      alarmados ladran como una jauría de perros. Tienden a ser
                      viajeros ruidosos que hacen brincos grandes y largos en la
                      copa de los árboles. Son mamíferos diurnos y arbóreos que
                      se mueven en grupos de 1 a 35 individuos; aunque se
                      separan formando pequeños grupos cuando buscan
                      alimentación. Se alimentan con fruta madura acompañada de
                      hojas y flores. La locomoción, reproducción y
                      comportamiento de los monos araña centroamericanos es
                      similar a la de los monos araña negros, con la excepción
                      de que las hembras tienen crías cada 2 a 4 años. Se
                      encuentran en bosque lluvioso primario y en bosque
                      deciduo.
                    </p>

                    <br></br>
                    <h6>Pizote o coatí de nariz blanca</h6>
                    <div className="container mx-auto mb-4">
                      <div className="d-flex justify-content-center justify-items-center">
                        <figure className="container mx-auto align-center">
                          <img
                            src="/imgs/page/fauna/Coati Monti.jpg"
                            alt="Travilla"
                            width={320}
                          />
                          <figcaption className="text-muted mt-2">
                            Coati de Nariz Blanca, Nasua narica{" "}
                          </figcaption>
                        </figure>
                        <table className="table table-striped table-responsive">
                          <thead className="table-success">
                            <tr>
                              <td colSpan={2} className="fw-semibold fs-6">
                                Pizote o coatí de nariz blanca{" "}
                              </td>
                            </tr>
                          </thead>
                          <tbody className="">
                            <tr>
                              <th className="fw-semibold">Orden</th>
                              <td>Primates</td>
                            </tr>
                            <tr>
                              <th className="fw-semibold">Familia</th>
                              <td>Canidae</td>
                            </tr>
                            <tr>
                              <th className="fw-semibold">Especie</th>
                              <td> Nasua narica</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <h6></h6>
                    <p>
                      Al mono araña se le conoce por varios nombres: mono Negro,
                      marimonda, brasilargo y mono colorado, spider monkey (en
                      inglés), y verré y maax en lengua Maya
                    </p>
                    <p>
                      Los coatí de nariz blanca se pueden identificar por su
                      cuerpo superior y hombros café oscuro o su parte anterior
                      gris canoso. La cabeza es café rojiza y sobre sus cejas se
                      le observan tiras blancas que descienden y cubren el
                      hocico. A veces presentan otros parches blancos por encima
                      y hacia atrás de los ojos. Sus orejas son cortas y
                      cubiertas en su interior de blanco. La cola del pizote o
                      coatí es 75% - 100% el largo de la medida de la cabeza y
                      el cuerpo, con pelaje espeso pero no crespo, afilándose en
                      la punta, café oscura con anillos más pálidos, casi
                      invisibles. El área de los hombros es gris y sus patas
                      café oscuro. Se le observa destellos blancos en el pecho y
                      garganta, a veces esparciéndosele por el estómago. Sus
                      patas anteriores poseen garras largas, pero sus garras
                      traseras son más largas y fuertes.
                    </p>
                    <h6></h6>
                    <p>
                      Hay varias especies similares como el mapache (Procyon
                      cancrivorus), que tienen mascara negra, colas cortas y
                      hocicos de tamaño normal. Otro pariente cercano es el
                      Olingo (Bassaricyon sp.), más pequeño y sin marcas
                      faciales. Los gatos leopardo mantienen la cola vertical y
                      se les puede confundir con las colas de coatí cuando
                      caminan entre los arbustos. La cola del gato tiene pelo de
                      un largo uniforme hasta la punta mientras el coatí se le
                      disminuye el grosor conforme llega a la punta, y las
                      manchas del gato son irregulares blancas y negras.
                    </p>
                    <h6></h6>
                    <p>
                      Miembros de grupos activos emiten constantes gemidos
                      mientras su llamado de peligro son ladridos explosivos y
                      clics. El coatí de nariz blanca es un animal diurno y es
                      tanto terrestre como arbóreo. Ciertos individuos llevan un
                      vida solitaria mientras existen grupos de hasta 30
                      miembros. Son omnívoros y comen fruta, invertebrados, y
                      otros animales pequeños. A los coatí se les puede observar
                      alimentándose de frutas en los niveles superiores de la
                      copa. Cuando buscan alimentación en el suelo del bosque,
                      se les observa metiendo sus largos hocicos entre grietas,
                      rocas y desgarrando troncos muertos con sus fuertes
                      garras.
                    </p>
                    <p>
                      De noche, los coatí se acomodan en las ramas de los
                      árboles. Las hembras dejan su grupo cuando están por dar a
                      luz y crían haciendo su nido en los árboles. Se les puede
                      observar en hábitat boscoso que varía entre bosque
                      lluvioso a bosque de galería cerrado y bosque seco. Los
                      coatí se encuentran en norte, centro y sudamérica.
                    </p>
                    <p>
                      Al coatí de nariz blanca se le conoce también como Quash,
                      cusumbe, cusumbe solo, gato solo, pizote, pizote solo,
                      tejn, cuchucho y andasolo. Su dispersión local puede ser
                      común a raro. (CITAS Apendice III)
                    </p>

                    <br></br>
                    <div className="footer-post-tags">
                      <div className="box-tags">
                        {" "}
                        <Link className="btn btn-tag" to="/meteorologia">
                          Meteorología
                        </Link>
                        <Link className="btn btn-tag" to="/hydrology">
                          Hidrología
                        </Link>
                        <Link className="btn btn-tag" to="/fauna">
                          Flora
                        </Link>
                        <Link className="btn btn-tag" to="/flora">
                          Fauna
                        </Link>
                      </div>
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
