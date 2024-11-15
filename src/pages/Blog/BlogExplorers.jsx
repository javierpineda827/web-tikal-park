import VideoPopup from "@/components/elements/VideoPopup";
import DefaultLayout from "../../components/layout/DefaultLayout";
import { Link } from "react-router-dom";
import MediaSection from "../../components/elements/MediaSection";

export default function BlogExplorers() {
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
                    Tikal / Los primeros exploradores
                  </span>
                </li>
              </ul>
            </div>
          </section>
          <section className="box-section box-content-blog-detail background-body">
            <div className="container-banner-blog-detail">
              {" "}
              <img
                src="/imgs/page/arqueology/descubretikal.jpg"
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
                      <h6>Tikal y los primeros exploradores</h6> El primer
                      hombre blanco que viera Tikal fue posiblemente el fraile
                      español Andrés de Avendaño en 1696. Avendaño estaba
                      huyendo de Tayasal y tratando de encontrar una ruta segura
                      hacia Mérida, pues sabía de la conspiración en su contra
                      que dirigía el rey -aparentemente amistoso- Canek de los
                      Itzaes. En sus crónicas describe el paso a través de una
                      ciudad antigua, llena de edificios con bóvedas y casas de
                      paredes emblanquecidas con estuco.
                    </p>
                    <p>
                      {" "}
                      Modesto Méndez, Gobernador y Magistrado de El Petén,
                      escribió el primer reporte oficial sobre Tikal en 1848,
                      tras la primera visita oficial hecha por el Gobierno de
                      Guatemala que duró 6 días.
                    </p>
                  </div>
                  <div className="box-image-video">
                    {" "}
                    <figure>
                      <img src="/imgs/page/arqueology/explorers.jpg" />
                      <figcaption className="text-muted mt-2 ">
                        Tikal estaba cubierto por una densa capa de selva que
                        creció en el sitio por mas de 1000 años antes que fuera
                        abandonado por los Mayas hasta el tiempo en que la
                        exploración diera inicio en el sitio a finales de los
                        1800...
                      </figcaption>
                    </figure>
                  </div>
                  <div className="content-detail-post ">
                    <h6></h6>
                    <p>
                      Durante esta primera expedición el artista Eusebio Lara
                      hizo dibujos estilizados de las estelas de la Plaza Mayor
                      de Tikal. Ambrosio Tut, un chiclero, había sido el primero
                      en ver el sitio. El reportó su hallazgo a Modesto Méndez.
                      Un periódico guatemalteco (La Gaceta) hizo la primera
                      publicación sobre el sitio, al cual llamó Tikal, o Lugar
                      de Voces, en la lengua Maya Itzá. El informe fue publicado
                      en la Revista de la Academia de Ciencias de Berlín en
                      1853. Así inició una era de exploración, y llegaron al
                      sitio tanto científicos como cazadores de tesores europeos
                      y americanos.
                    </p>
                    <h6></h6>
                    <p>
                      John Carmichael visitó Tikal en 1869, 1890 y 1903. En 1877
                      Gustave Bernouilli, de Suiza, removió algunos de los
                      dinteles tallados en madera de chico zapote que adornaban
                      los Templos IV y I, durante una expedición botánica. Estos
                      ahora pueden ser apreciados en el Museo Etnológico
                      (Völkerkunde) de Basel, excepto por dos pequeños
                      fragmentos que se encuentran en el Museo Británico en
                      Londres.
                    </p>
                    <h6></h6>
                    <p>
                      Sir Alfred Percival Maudslay, quien fue el primer hombre
                      en dibujar un mapa de Tikal, llevó esos 2 fragmentos a
                      Inglaterra. Maudslay, quien visitó Tikal en 1881 y 82,
                      también fue el primero en tomar fotografías (ya que
                      recientemente se había inventado la cámara) en el sitio
                      después de remover la vegetación que había crecido en la
                      Gran Plaza por más de 1,000 años. El tenía todos los
                      permisos necesarios del Gobierno de Guatemala. El hizo del
                      Palacio de Cinco Niveles, en la Acrópolis Central, su casa
                      durante su estancia en Tikal. Las contribuciones de Sir
                      Alfred Maudslay a la arqueología Maya son numerosas y de
                      gran importancia.{" "}
                    </p>
                    <p>
                      El gobierno guatemalteco le solicitó hiciera una
                      investigación de campo en el Río Usumacinta, del cual se
                      había conocido muy poco, y le autorizó para tomar los
                      dinteles de Macanché para su protección. (Macanché fue
                      llamado más tarde Yaxchilán). Maudslay extiende sus
                      conocimientos sobre la Civilización Maya entre la
                      comunidad científica de su época y convenció a los
                      editores Osbert Salvin y F. Ducane Godman que le
                      permitieran realizar una valiosa adición a las famosa
                      serie científica que se publicara en aquellos tiempos.
                      Esta adición consistió en los 4 Volúmenes de Arqueología
                      Maya, agregados a los 87 volúmenes de la Biología Centrali
                      Americana, publicada en Londres a finales del Siglo XIX.
                      En una visión retrospectiva, fácilmente podríamos decir
                      que Maudslay es el padre de la Arqueología Maya. (Ian
                      Graham, de la Universidad de Harvard está escribiendo
                      actualmente la biografía de Maudslay.)
                    </p>
                    <h6></h6>
                    <p>
                      Para aprender más sobre como Alfred Maudslay trajo la
                      cultura maya al mundo visita la página del{" "}
                      <a href="https://www.google.com/culturalinstitute/beta/exhibit/zQJSwXKR4tiSLQ">
                        Museo Británico en colaboración con Arte & Cultura de
                        Google.
                      </a>
                    </p>
                    <h6></h6>
                    <p>
                      Teobert Mahler llegó en 1895 y 1904 para dibujar un nuevo
                      mapa, el cual nunca entregó a sus jefes del Museo Peabody
                      de la Universidad de Harvard. Este estudioso alemán fue el
                      primero en dibujar un graffiti en una pared de un edificio
                      en Tikal, el cual todavía puede “apreciarse” en el llamado
                      Palacio Mahler, en la Acrópolis Central, en dónde vivió
                      mientras trabajó en Tikal.
                    </p>
                    <p>
                      Alfred Tozzer y E. E. Merwin fueron enviados a completar
                      el trabajo de Mahler en 1910 y para tomar fotografías.
                    </p>

                    <p>
                      Poco tiempo después, Sylvanus Griswold Morley, de la
                      Institución Carnegie, hizo cinco visitas al sitio entre
                      1914 y 1937. El enfocó sus esfuerzos en el desciframiento
                      de los heroglíficos mayas inscritos en los monumentos.
                    </p>

                    <p>
                      De acuerdo con una entrevista con Erwin Shook, la
                      excavación en Tikal había sido planificada para arrancar
                      en los años cuarenta. Sin embargo, la Revolución Social de
                      1944 en Guatemala, retrasó el proyecto de los
                      norteamericanos hasta 1956.
                    </p>

                    <p>
                      Aubrey S Trik (1910- 1968) Arquitecto de la Universidad de
                      Virginia que trabajó como arqueólogo de Copan y en varios
                      sitio en Yucatan antes de la Segunda Guerra Mundial. Fue
                      el jefe del Proyecto Arqueológico de Zaculeu. Se le
                      atribuye la restauración del Templo I de Tikal.
                      Contribución fotográfica: Familia Trik
                    </p>
                    <div className="content-detail-post ">
                      <h6>Datos Tikal</h6>
                      <p>
                        El Parque Nacional Tikal cubre 576 km² o 222 millas². Es
                        una zona núcleo dentro de la Reserva de la Biosfera
                        Maya, que es la cuarta extensión de bosque continuo más
                        grande del planeta. El Gobierno de Guatemala declaró
                        Tikal como Parque Nacional en mayo de 1955 y como
                        Monumento Nacional en 1970. Fue el primer Parque
                        Nacional establecido en Centroamérica. El 5 de noviembre
                        de 1979, fue declarado como Patrimonio de la Humanidad
                        por la UNESCO.
                      </p>
                      <p>
                        {" "}
                        Tikal está localizado en una zona de vida llamada bosque
                        subtropical cálido, en la región de El Petén. Forma
                        parte de una de las extensiones de bosque subtropical
                        más grandes que aún sobreviven en esta parte del mundo y
                        es el hogar de una gran variedad de plantas y animales.
                        Con la presión de los madereros y las compañías de
                        petróleo, el futuro de El Petén como tal, todavía no se
                        ha decidido. Sin embargo, un sistema de parques dentro
                        de la Reserva de la Biosfera Maya, si es salvaguardada,
                        puede ser la respuesta al desarrollo económico de la
                        región basado en el ecoturismo y la producción no
                        maderable de bosque. En conjunto con las Reservas de
                        Biosfera de Montes Azules en Chiapas y de Calakmul en
                        Tabasco, México y el Área de Conservación de Río Bravo
                        en Belice, esta es la segunda extensión más grande de
                        bosque en el Continente Americano, después de la Selva
                        Amazónica. La Selva Maya cubre un total de 5 millones de
                        hectáreas.
                      </p>
                      <p>
                        La UNESCO declaró a Tikal como Patrimonio Cultural del
                        Mundo en 1979 y como Monumento Mundial en 1986, debido a
                        sus tesoros culturales y naturales.
                      </p>

                      <p>
                        Tikal está localizado en las tierras bajas Mayas, una
                        extensa área con un subsuelo de piedra caliza que se en
                        encuentra a un máximo de 600 metros sobre el nivel del
                        mar, el cual se extiende desde el Petén en Guatemala
                        -Corazón y Cuna del Mundo Maya- hacia el norte de la
                        Península de Yucatán en el vecino México y hacia el este
                        hacia en Belice.
                      </p>

                      <p>
                        El gran centro ceremonial está a 283 metros sobre el
                        nivel del mar y fue construido alrededor de terrenos
                        húmedos llamados “bajos”. En su apogeo, en el Período
                        Clásico, Tikal cubría un área definida por marcas
                        territoriales de 120 km2.
                      </p>

                      <p>
                        Tikal puede ser accesado por una carretera pavimentada
                        de 64 kilómetros, la cual inicia en la ciudad Isla de
                        Flores, la capital del Departamento de El Petén.
                      </p>
                      <p>
                        Durante su apogeo, de acuerdo con el Dr. Patrick
                        Culbert, el área central de Tikal –de alrededor de 120
                        km2– fue el hogar de unas 60,000 personas. Las
                        excavaciones en Tikal revelan interesantes patrones
                        habitacionales en las áreas circundantes a los
                        monumentos, templos y plazas. Aquí vivieron los
                        ciudadanos comunes. Algunos estudios han revelado que
                        cerca de 30,000 habitantes rurales vivieron allí
                        simultáneamente. Si tomáramos ambos estudios en
                        consideración, fácilmente podríamos decir que la
                        población de Tikal fue de alrededor de 90 mil personas
                        durante el Período Clásico Tardío. Tikal fue una de las
                        ciudades más grandes y más pobladas del Período Clásico
                        Tardío en el Mundo Maya.
                      </p>
                      <figure className="mb-4">
                        <img
                          className="polaroid"
                          src="/imgs/page/arqueology/Aubrey S  Trik-email photo.jpg"
                        />
                        <figcaption className="text-muted mt-2 ">
                          Aubrey Trik (1910- 1968) University of Virginia
                          architect turned Copan archaeologist, he worked at
                          several sites around the Yucatan before World War II.
                          He was the head archaeologist at Zaculeu in Guatemala
                          and is creditted with the restoration of Temple I in
                          Tikal. (Photo contribution: Trik family){" "}
                        </figcaption>
                      </figure>
                      <p>
                        Sus habitantes originales abandonaron Tikal después del
                        año 900 A.C., fecha del colapso de la Civilización Maya
                        Clásica en las tierras bajas del sur. Durante el Siglo
                        XVI, los peregrinos Itzaes pudieron haber visitado el
                        sitio para propósitos ceremoniales.
                      </p>

                      <p>
                        Ambrosio Tut, un chiclero, fue el primero que vio Tikal,
                        a mediados del Siglo XIX, desde la copa de un árbol de
                        chico zapote, observando varias crestas de los templos
                        en el horizonte.
                      </p>

                      <p>
                        Tikal fue el nombre con el que los itzaes conocieron el
                        sitio, que significa “Lugar de Voces”.
                      </p>

                      <p>
                        Recientemente, el nombre del glifo emblema de Tikal fue
                        leído por el epigrafista David Stuart como Mutul, cuyo
                        significado aún no se conoce.
                      </p>
                    </div>
                    <div className="footer-post-tags">
                      <div className="box-tags">
                        {" "}
                        <Link className="btn btn-tag" to="#">
                          Meteorología
                        </Link>
                        <Link className="btn btn-tag" to="#">
                          Hidrología
                        </Link>
                        <Link className="btn btn-tag" to="#">
                          Ecología
                        </Link>
                        <Link className="btn btn-tag" to="#">
                          Flora
                        </Link>
                        <Link className="btn btn-tag" to="#">
                          Fauna
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
                              <svg
                                width={20}
                                height={20}
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M13.4915 1.6665H6.50817C3.47484 1.6665 1.6665 3.47484 1.6665 6.50817V13.4832C1.6665 16.5248 3.47484 18.3332 6.50817 18.3332H13.4832C16.5165 18.3332 18.3248 16.5248 18.3248 13.4915V6.50817C18.3332 3.47484 16.5248 1.6665 13.4915 1.6665ZM9.99984 13.2332C8.2165 13.2332 6.7665 11.7832 6.7665 9.99984C6.7665 8.2165 8.2165 6.7665 9.99984 6.7665C11.7832 6.7665 13.2332 8.2165 13.2332 9.99984C13.2332 11.7832 11.7832 13.2332 9.99984 13.2332ZM14.9332 5.73317C14.8915 5.83317 14.8332 5.92484 14.7582 6.00817C14.6748 6.08317 14.5832 6.1415 14.4832 6.18317C14.3832 6.22484 14.2748 6.24984 14.1665 6.24984C13.9415 6.24984 13.7332 6.1665 13.5748 6.00817C13.4998 5.92484 13.4415 5.83317 13.3998 5.73317C13.3582 5.63317 13.3332 5.52484 13.3332 5.4165C13.3332 5.30817 13.3582 5.19984 13.3998 5.09984C13.4415 4.9915 13.4998 4.90817 13.5748 4.82484C13.7665 4.63317 14.0582 4.5415 14.3248 4.59984C14.3832 4.60817 14.4332 4.62484 14.4832 4.64984C14.5332 4.6665 14.5832 4.6915 14.6332 4.72484C14.6748 4.74984 14.7165 4.7915 14.7582 4.82484C14.8332 4.90817 14.8915 4.9915 14.9332 5.09984C14.9748 5.19984 14.9998 5.30817 14.9998 5.4165C14.9998 5.52484 14.9748 5.63317 14.9332 5.73317Z" />
                              </svg>
                            </Link>
                            <Link className="icon-socials icon-facebook" to="#">
                              <svg
                                width={20}
                                height={20}
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M18.3334 13.4915C18.3334 16.5248 16.5251 18.3332 13.4917 18.3332H12.5001C12.0417 18.3332 11.6667 17.9582 11.6667 17.4998V12.6915C11.6667 12.4665 11.8501 12.2748 12.0751 12.2748L13.5417 12.2498C13.6584 12.2415 13.7584 12.1582 13.7834 12.0415L14.0751 10.4498C14.1001 10.2998 13.9834 10.1582 13.8251 10.1582L12.0501 10.1832C11.8167 10.1832 11.6334 9.99985 11.6251 9.77485L11.5918 7.73317C11.5918 7.59984 11.7001 7.48318 11.8417 7.48318L13.8417 7.44984C13.9834 7.44984 14.0918 7.34152 14.0918 7.19985L14.0584 5.19983C14.0584 5.05816 13.9501 4.94984 13.8084 4.94984L11.5584 4.98318C10.1751 5.00818 9.07509 6.1415 9.10009 7.52484L9.14175 9.8165C9.15008 10.0498 8.96676 10.2332 8.73342 10.2415L7.73341 10.2582C7.59175 10.2582 7.48342 10.3665 7.48342 10.5082L7.50842 12.0915C7.50842 12.2332 7.61675 12.3415 7.75841 12.3415L8.75842 12.3248C8.99176 12.3248 9.17507 12.5082 9.18341 12.7332L9.2584 17.4832C9.26674 17.9498 8.89174 18.3332 8.42507 18.3332H6.50841C3.47508 18.3332 1.66675 16.5248 1.66675 13.4832V6.50817C1.66675 3.47484 3.47508 1.6665 6.50841 1.6665H13.4917C16.5251 1.6665 18.3334 3.47484 18.3334 6.50817V13.4915V13.4915Z" />
                              </svg>
                            </Link>
                            <Link className="icon-socials icon-twitter" to="#">
                              <svg
                                width={21}
                                height={20}
                                viewBox="0 0 21 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M12.2845 8.46864L19.5698 0H17.8434L11.5176 7.3532L6.4651 0H0.637695L8.278 11.1193L0.637695 20H2.36419L9.04447 12.2348L14.3802 20H20.2076L12.284 8.46864H12.2845ZM9.9198 11.2173L9.14568 10.1101L2.98627 1.29967H5.63806L10.6088 8.40994L11.3829 9.51718L17.8442 18.7594H15.1925L9.9198 11.2177V11.2173Z" />
                              </svg>
                            </Link>
                            <Link className="icon-socials icon-be" to="#">
                              <svg
                                width={21}
                                height={15}
                                viewBox="0 0 21 15"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M8.82393 10.736L13.9225 7.78881L8.82393 4.84165V10.736ZM20.1803 3.04389C20.308 3.50561 20.3964 4.12451 20.4554 4.91042C20.5242 5.69633 20.5536 6.37418 20.5536 6.96361L20.6126 7.78881C20.6126 9.94024 20.4554 11.5219 20.1803 12.5337C19.9347 13.4179 19.3649 13.9877 18.4808 14.2333C18.0191 14.361 17.1742 14.4494 15.8775 14.5083C14.6004 14.5771 13.4313 14.6066 12.3507 14.6066L10.7887 14.6655C6.67251 14.6655 4.10848 14.5083 3.09662 14.2333C2.21247 13.9877 1.64269 13.4179 1.39709 12.5337C1.26938 12.072 1.18097 11.4531 1.12203 10.6672C1.05326 9.8813 1.02379 9.20345 1.02379 8.61402L0.964844 7.78881C0.964844 5.63739 1.12203 4.05575 1.39709 3.04389C1.64269 2.15974 2.21247 1.58996 3.09662 1.34436C3.55834 1.21665 4.4032 1.12823 5.69995 1.06929C6.97705 1.00052 8.14609 0.971052 9.22671 0.971052L10.7887 0.912109C14.9049 0.912109 17.4689 1.06929 18.4808 1.34436C19.3649 1.58996 19.9347 2.15974 20.1803 3.04389Z" />
                              </svg>
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
                              Enviar comentario
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
                                <p className="text-lg-bold">Sarah Johnson</p>
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
                              aventura extraordinaria! Sumergirse en la selva
                              exuberante y las magníficas ruinas añade una
                              emoción única a la experiencia. Los guías son
                              conocedores y enriquecen el recorrido con
                              interesantes detalles. ¡Muy recomendado para una
                              escapada ecoturística!
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
                                <p className="text-lg-bold">Sarah Johnson</p>
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
                              aventura extraordinaria! Sumergirse en la selva
                              exuberante y las magníficas ruinas añade una
                              emoción única a la experiencia. Los guías son
                              conocedores y enriquecen el recorrido con
                              interesantes detalles. ¡Muy recomendado para una
                              escapada ecoturística!
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
                                <p className="text-lg-bold">Sarah Johnson</p>
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
                              aventura extraordinaria! Sumergirse en la selva
                              exuberante y las magníficas ruinas añade una
                              emoción única a la experiencia. Los guías son
                              conocedores y enriquecen el recorrido con
                              interesantes detalles. ¡Muy recomendado para una
                              escapada ecoturística!
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
