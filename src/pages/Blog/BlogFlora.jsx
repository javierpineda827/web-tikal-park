import VideoPopup from "@/components/elements/VideoPopup";
import DefaultLayout from "../../components/layout/DefaultLayout";
import { Link } from "react-router-dom";
import MediaSection from "../../components/elements/MediaSection";
import NewsSection from "../../components/elements/NewsSection";

export default function BlogFlora() {
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
                    Flora del Parque Nacional Tikal
                  </span>
                </li>
              </ul>
            </div>
          </section>
          <section className="box-section box-content-blog-detail background-body">
            <div className="container-banner-blog-detail">
              {" "}
              <img
                src="/imgs/page/flora/Tikal-Blume 370.jpg"
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
                      Flora del Parque Nacional Tikal
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
                    <h6>Flora del Parque Nacional Tikal</h6>
                    <p className="neutral-1000">
                      En esta sección encontrará algunas de las plantas y
                      árboles más interesantes del Parque Nacional Tikal.
                      Nuestro criterio de selección fueron las plantas que eran
                      más importantes para los Mayas, las cuales se encontraron
                      en abundancia alrededor de los templos y palacios y las
                      plantas y árboles que los visitantes encontrarán más
                      atractivos, ya que son muy diferentes a las que
                      encontrarán de vuelta a casa...
                    </p>
                    <p>
                      Esperamos que disfrute esta sección botánica, la cual de
                      ninguna manera es un compendio de toda la vegetación que
                      se encuentra alrededor de Tikal.
                    </p>
                    <h6>Plantas de bosque en el Parque Nacional Tikal</h6>
                    <p>
                      Hay mucho que aprender sobre las plantas que se encuentran
                      en abundancia en todo el Parque Nacional de Tikal.
                      Examinemos las plantas conocidas por haber tenido uso
                      doméstico, místico o medicinal para los mayas en Tikal ...
                    </p>
                    {/* <div className="container mx-auto mb-4">
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
                              <td className="text-center align-middle">Primates</td>
                            </tr>
                            <tr>
                              <th className="fw-semibold">Familia</th>
                              <td className="text-center align-middle">Cebidae</td>
                            </tr>
                            <tr>
                              <th className="fw-semibold">Especie</th>
                              <td className="text-center align-middle">Alouatta pigra </td>
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
                    </div> */}
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
                    <div>
                      <h5 className="mb-4">
                        Las plantas Mayas mas conocidas y usadas...
                      </h5>
                      <p>
                        Hay mucho que aprender sobre las plantas que se
                        encuentran en abundancia en todo el Parque Nacional de
                        Tikal. Examinemos las plantas conocidas por haber tenido
                        uso&nbsp;doméstico, místico&nbsp;o medicinal&nbsp;para
                        los mayas en Tikal ...
                      </p>
                      <h6>Ficus</h6>

                      <p>
                        Los mayas usaban el ficus, o amate, para hacer papel.
                        Sacudían su corteza y la cubrían con estuco para hacer
                        sus hermosos códices, o libros, pocos de los cuales han
                        sobrevivido al paso del tiempo, ya que la mayoría fueron
                        quemados por los españoles, porque supuestamente estaban
                        llenos de contenido sacrílego.
                      </p>

                      <h6>Matapalo</h6>

                      <p>
                        <span>&nbsp; &nbsp; Un miembro de la familia fic</span>
                        <span>
                          us que puede considerarse un árbol tropical mucho
                          menos &ldquo; amistoso&rdquo;. Es el matapalo o
                          higuerote, que tiene muchas especies en el bosque
                          guatemalteco. El matapalo&nbsp;se llama así porque su
                          semilla (dispersada por los pájaros) germina en las
                          ramas altas de un árbol de acogida, que el recién
                          llegado procede a engullir lentamente con su corteza,
                          raíces y brazos hasta la muerte. El matapalo
                          eventualmente hace su camino hacia el suelo, anclando
                          el árbol cuando su infortunado anfitrión se pudre y se
                          desmorona bajo su mortal agarre. Cruel aunque pueda
                          sonar, es parte de la vida, la muerte y el reciclaje
                          de la materia orgánica en el bosque tropical!
                        </span>
                      </p>

                      <h6>Tres Puntas or Mano de Lagarto</h6>
                      <p>
                        &nbsp; &nbsp; Esta planta previene y cura la malaria.
                        ¡Tiene otros usos medicinales también! Por lo general,
                        crece cerca de cuerpos de agua o pequeños reservorios y
                        debe su nombre a su forma, que se parece a la mano de un
                        lagarto.
                      </p>

                      <h6>Bayal</h6>
                      <p>
                        &nbsp; &nbsp;Una fibra muy resistente usada para hacer
                        muebles y cestas. La gente que vive en el bosque Maya
                        continúa fabricando productos de esta planta que los
                        antiguos mayas conocían y usaban para el mismo
                        propósito. La producción forestal sostenible no
                        maderable incluye artesanías hechas de esta planta
                        robusta y atractiva.
                      </p>

                      <h6>Maíz</h6>
                      <p>
                        &nbsp; &nbsp; &nbsp;El maíz sagrado era el ingrediente
                        básico en la dieta de los mayas. Utilizaron de la misma
                        manera que usan los mayas modernos para hacer algunos de
                        los alimentos más deliciosos que podrías probar, como
                        tortillas de maíz, tamales, atole, etc. Para los mayas,
                        el maíz que daba vida era un Dios:&nbsp;<em>Yum Kax</em>
                        .
                      </p>

                      <h6>Frijoles</h6>

                      <p>
                        &nbsp; &nbsp; &nbsp;Los frijoles eran otro alimento
                        básico en la dieta de los mayas. Antes de que estén
                        maduros, se comen como habas, fritas con una capa de
                        huevo. Cuando maduran, se hacen en una abundancia de
                        preparaciones. Las plantaciones agroforestales mayas que
                        sobreviven hasta nuestros días utilizan una combinación
                        de parcelas de maíz y frijol, donde el frijol fertiliza
                        el suelo y proporciona nitrógeno enriquecido para que
                        crezca la planta de maíz, lo que a su vez provee apoyo a
                        la planta de frijol.
                      </p>

                      <p>
                        <span>&nbsp;</span>
                      </p>

                      <p>
                        <b>
                          El siguiente cuadro le dirá más sobre el uso de los
                          antiguos mayas para estas plantas...
                        </b>
                      </p>

                      <p></p>
                      <h6>
                        <em>PLANTAS PARA USO DOMÉSTICO</em>
                      </h6>

                      <div>
                        <table className="table table-sm table-striped">
                          <thead className="table-success">
                            <tr>
                              <td className="text-center">
                                <p>
                                  <strong>Uso</strong>
                                </p>
                              </td>
                              <td className="text-center">
                                <p>
                                  <strong>Nombre Maya</strong>
                                </p>
                              </td>
                              <td className="text-center">
                                <p>
                                  <strong>Nombre en español</strong>
                                </p>
                              </td>
                              <td className="text-center">
                                <p>
                                  <strong>Nombre científico</strong>
                                </p>
                              </td>
                            </tr>
                          </thead>
                          <tbody className="">
                            <tr>
                              <td className="text-center align-middle">
                                <p>Papel</p>
                              </td>
                              <td className="text-center align-middle">
                                <p>
                                  <em>Kopo/ sakawá</em>
                                </p>
                              </td>
                              <td className="text-center align-middle">
                                <p>Amate</p>
                              </td>
                              <td className="text-center align-middle">
                                <p>
                                  <em>Ficus cetinifolia</em>
                                </p>

                                <p>
                                  <em>F. mexicana</em>
                                </p>

                                <p>
                                  <em>F. yucatensis</em>
                                </p>

                                <p>
                                  Therefore:&nbsp;<em>Ficus&nbsp;</em>spp.
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-center align-middle">
                                <p>Textiles, mantas, cuerdas</p>
                              </td>
                              <td className="text-center align-middle">
                                <p>
                                  <em>Ki’</em>
                                </p>
                              </td>
                              <td className="text-center align-middle">
                                <p>Hequén y&nbsp; sisal</p>
                              </td>
                              <td className="text-center align-middle">
                                <p>
                                  <em>Agave angustifolia</em>
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-center align-middle">
                                <p>tinte púrpura/&nbsp;</p>

                                <p>Tinta para tatuajes</p>
                              </td>
                              <td className="text-center align-middle">
                                <p>
                                  <em>Eek, ek’</em>
                                </p>
                              </td>
                              <td className="text-center align-middle">
                                <p>Palo de tinte</p>
                              </td>
                              <td className="text-center align-middle">
                                <p>
                                  <em>Haematoxyllum campechianum</em>
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-center align-middle">
                                <p>Techos de casas, cestos</p>
                              </td>
                              <td className="text-center align-middle">
                                <p>
                                  <em>Bayal, xa’an</em>
                                </p>
                              </td>
                              <td className="text-center align-middle">
                                <p>Palma</p>
                              </td>
                              <td className="text-center align-middle">
                                <p>
                                  <em>Sabal mayarun</em>
                                </p>

                                <p>
                                  <em>S. mauritiformis</em>
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-center align-middle">
                                <p>Tinte naranja</p>
                              </td>
                              <td className="text-center align-middle">
                                <p>
                                  <em>K’uxub, ki’wi</em>
                                </p>
                              </td>
                              <td className="text-center align-middle">
                                <p>Achiote</p>
                              </td>
                              <td className="text-center align-middle">
                                <p>
                                  <em>Bixa orellana</em>
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <p></p>
                        <h6 className="mt-4">
                          <em>PLANTAS DE USO COMESTIBLE</em>
                        </h6>

                        <table className="table table-sm table-striped">
                          <thead className="table-success">
                            <tr>
                              <td className="text-center align-middle">
                                <p>
                                  <strong>Uso</strong>
                                </p>
                              </td>
                              <td className="text-center align-middle">
                                <p>
                                  <strong>Nombre Maya</strong>
                                </p>
                              </td>
                              <td className="text-center align-middle">
                                <p>
                                  <strong>Nombre en español</strong>
                                </p>
                              </td>
                              <td className="text-center align-middle">
                                <p>
                                  <strong>Nombre científico</strong>
                                </p>
                              </td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="text-center align-middle">
                                <p>Carnaza , semillas y flores</p>
                              </td>
                              <td className="text-center align-middle">
                                <p>
                                  <em>Ca, Chuu, kunm</em>
                                </p>
                              </td>
                              <td className="text-center align-middle">
                                <p>Calabaza</p>
                              </td>
                              <td className="text-center align-middle">
                                <p>
                                  <em>Cucurbita</em>&nbsp;spp.
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-center align-middle">
                                <p>Salsas, fibra,&nbsp;vitamina C</p>
                              </td>
                              <td className="text-center align-middle">
                                <p>
                                  <em>P’ak, ah p’ak</em>
                                </p>
                              </td>
                              <td className="text-center align-middle">
                                <p>Tomates</p>
                              </td>
                              <td className="text-center align-middle">
                                <p>
                                  <em>Lycopersicon&nbsp;esculentum</em>
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-center align-middle">
                                <p>Chocolate</p>
                              </td>
                              <td className="text-center align-middle">
                                <p>
                                  <em>Kakaw*, balamte</em>
                                </p>
                              </td>
                              <td className="text-center align-middle">
                                <p>Chocolate o cacao</p>
                              </td>
                              <td className="text-center align-middle">
                                <p>
                                  <em>Theobroma cacao</em>*
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-center align-middle">
                                <p>Fibra&nbsp;(Esencia de los humanos)</p>
                              </td>
                              <td className="text-center align-middle">
                                <p>
                                  <em>Ix’im, nal</em>
                                </p>
                              </td>
                              <td className="text-center align-middle">
                                <p>Maiz, elote o choclo</p>
                              </td>
                              <td className="text-center align-middle">
                                <p>
                                  <em>Zea mays</em>
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-center align-middle">
                                <p>Proteína/ amino ácidos</p>
                              </td>
                              <td className="text-center align-middle">
                                <p>
                                  <em>Bu’ul, Tsama’</em>
                                </p>
                              </td>
                              <td className="text-center align-middle">
                                <p>Frijol</p>
                              </td>
                              <td className="text-center align-middle">
                                <p>
                                  <em>Phaseolus vulgaris</em>
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-center align-middle">
                                <p>Condimento, especia</p>
                              </td>
                              <td className="text-center align-middle">
                                <p>
                                  <em>Ik</em>
                                </p>
                              </td>
                              <td className="text-center align-middle">
                                <p>Chile</p>
                              </td>
                              <td className="text-center align-middle">
                                <p>
                                  <em>Capsicum</em>&nbsp;spp
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <p>
                          <small className="text-muted text-sm">
                            * Highly recommended for abdominal pain and to fight
                            food poisoning…
                          </small>
                        </p>

                        <p></p>
                        <h6>
                          <em>PLANTAS PARA RITUALES Y USO MEDICINAL</em>
                        </h6>

                        <table className="table table-sm table-striped">
                          <thead className="table-success">
                            <tr>
                              <td className="text-center align-middle">
                                <p>
                                  <strong>Uso</strong>
                                </p>
                              </td>
                              <td className="text-center align-middle">
                                <p>
                                  <strong>Nombre Maya</strong>
                                </p>
                              </td>
                              <td className="text-center align-middle">
                                <p>
                                  <strong>Nombre científico</strong>
                                </p>
                              </td>
                              <td className="text-center align-middle">
                                <p>
                                  <strong>Comentario</strong>
                                </p>
                              </td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="text-center align-middle">
                                <p>Alimento y comida para&nbsp;los Dioses</p>
                              </td>
                              <td className="text-center align-middle">
                                <p>
                                  <em>Balche, baalche, saayab</em>
                                </p>
                              </td>
                              <td className="text-center align-middle">
                                <p>
                                  <em>Lonchocarpus</em>&nbsp;spp.
                                </p>
                              </td>
                              <td className="text-center align-middle">
                                <p>
                                  Bebida intoxicante para rituales elaborada a
                                  base de la corteza,&nbsp;miel y agua
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-center align-middle">
                                <p>Tabaco</p>
                              </td>
                              <td className="text-center align-middle">
                                <p>
                                  <em>K’uts, k’uuts</em>
                                </p>
                              </td>
                              <td className="text-center align-middle">
                                <p>
                                  <em>Nicotiana tabacum</em>
                                </p>
                              </td>
                              <td className="text-center align-middle">
                                <p>
                                  Se usaba tópicamente erupciones en la piel y
                                  dolor muscular, así como fumado con otras
                                  hierbas u hongos para inducir estados
                                  alterados de conciencia
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-center align-middle">
                                <p>Hongos</p>
                              </td>
                              <td className="text-center align-middle">
                                <p>
                                  <em>Kuxum</em>
                                </p>
                              </td>
                              <td className="text-center align-middle">
                                <p>
                                  <em>Psilocybe</em>&nbsp;spp.
                                </p>
                              </td>
                              <td className="text-center align-middle">
                                <p>
                                  Se usaban estos hongos alucinógenos en
                                  rituales, quiza para hablar con los Dioses en
                                  las ceremonias
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-center align-middle">
                                <p>Nenúfares</p>
                              </td>
                              <td className="text-center align-middle"></td>
                              <td className="text-center align-middle"></td>
                              <td className="text-center align-middle">
                                <p>
                                  Estos también tenían usos ceremoniales… Crecen
                                  en agua estancada&nbsp;&nbsp;de iconografía
                                  mitológica como modelos del mundo primordial
                                  que flota&nbsp; en el agua
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-center align-middle">
                                <p>Pasiflora</p>
                              </td>
                              <td className="text-center align-middle">
                                <p>
                                  <em>Xicin Zodz</em>
                                </p>
                              </td>
                              <td className="text-center align-middle"></td>
                              <td className="text-center align-middle">
                                <p>
                                  La&nbsp;raíz&nbsp;de esta planta
                                  era&nbsp;usada&nbsp;como sedativo. Es una
                                  enredadera que se encuentra en junglas no muy
                                  húmedas.
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <div>&nbsp;</div>
                    </div>
                    <br></br>
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
