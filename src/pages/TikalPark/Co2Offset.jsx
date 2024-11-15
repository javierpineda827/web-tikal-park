import { useState } from "react";
import { Link } from "react-router-dom";
import DefaultLayout from "../../components/layout/DefaultLayout";
import IconPin from "../../components/ui/IconPin";
import IconMap from "../../components/ui/IconMap";
import IconChevronDown from "../../components/ui/IconChevronDown";
import { Figure, FigureCaption, FigureImage } from "react-bootstrap";
import IconChevronRightLight from "../../components/ui/IconChevronRightLight";
import { Trans, useTranslation } from "react-i18next";

export default function Co2Offset() {
  const { t } = useTranslation("Co2Offset");
  const [isAccordion, setIsAccordion] = useState(null);

  const handleAccordion = (key) => {
    setIsAccordion((prevState) => (prevState === key ? null : key));
  };

  const aside = t("aside", { returnObjects: true });
  console.log(aside.paragraphs);

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
                    <IconChevronRightLight />
                  </span>
                </li>
                <li>
                  {" "}
                  <Link to="/destination">Tours</Link>
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
                  <span className="text-breadcrumb">{t("title")}</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="box-section box-content-tour-detail background-body">
            <div className="container">
              <div className="tour-header">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="tour-title-main">
                      <h4 className="neutral-1000">{t("title")}</h4>
                    </div>
                  </div>
                </div>
                <div className="tour-metas">
                  <div className="tour-meta-left">
                    <p className="text-md-medium neutral-500 mr-20 tour-location">
                      <IconPin width={12} height={16} />
                    </p>
                    <Link
                      className="text-md-medium neutral-1000 mr-30"
                      to={t("location.href")}
                    >
                      {t("location.text")}
                    </Link>
                    <p className="text-md-medium neutral-500 tour-code mr-15">
                      <IconMap width={20} height={18} />
                    </p>
                    <Link className="text-md-medium neutral-1000" to="#"></Link>
                  </div>
                </div>
              </div>
              <div className="row mt-30">
                <div className="col-lg-8">
                  <div className="box-collapse-expand">
                    <div className="group-collapse-expand">
                      <div>
                        <h6>{t("article.title")}</h6>
                        <IconChevronDown />
                      </div>
                      <div
                        className={
                          isAccordion == 1 ? "collapse" : "collapse show"
                        }
                        id="collapseOverview"
                      >
                        <div className="card card-body">
                          <Trans
                            i18nKey="article"
                            components={{
                              b: <strong />,
                              u: <u />,
                              p: <p style={{ textWrap: "pretty" }} />,
                              a: <a />,
                            }}
                          >
                            <p>{t("article.paragraph_1")}</p>
                            <p>{t("article.paragraph_2")}</p>
                          </Trans>
                          <blockquote className="blockquote">
                            <footer className="blockquote-footer">
                              {t("article.thanks")}
                              <cite title="Source Title"></cite>
                            </footer>
                          </blockquote>
                        </div>
                      </div>
                    </div>
                    <div className="my-4">
                      <Figure>
                        <FigureImage src={t("article.fig_img_1")} />
                        <FigureCaption>
                          {t("article.fig_caption_1")}
                        </FigureCaption>
                      </Figure>
                    </div>
                    <div className="group-collapse-expand">
                      <div>
                        <div className="card card-body pt-0">
                          <Trans
                            i18nKey="article"
                            components={{
                              b: <strong />,
                              u: <u />,
                              p: <p style={{ textWrap: "pretty" }} />,
                              a: <a />,
                            }}
                          >
                            <p>{t("article.paragraph_3")}</p>
                            <p>{t("article.paragraph_4")}</p>
                            <p>{t("article.paragraph_5")}</p>
                            <p>{t("article.paragraph_6")}</p>
                            <p>{t("article.paragraph_7")}</p>
                            <p>{t("article.paragraph_8")}</p>
                          </Trans>
                        </div>
                      </div>
                    </div>
                    <div className="container my-4">
                      <Figure className="d-flex justify-content-center flex-column">
                        <FigureImage src={t("article.fig_img_2")} />
                        <FigureCaption>
                          {t("article.fig_caption_2")}
                        </FigureCaption>
                      </Figure>
                    </div>
                    <div className="group-collapse-expand">
                      <div>
                        <div className="card card-body pt-0">
                          <Trans
                            i18nKey="article"
                            components={{
                              b: <strong />,
                              u: <u />,
                              p: <p style={{ textWrap: "pretty" }} />,
                              a: <a />,
                            }}
                          >
                            <p>{t("article.paragraph_9")}</p>

                            <p>{t("article.paragraph_10")}</p>

                            <p>{t("article.paragraph_11")}</p>
                          </Trans>
                        </div>
                        <div className="container mx-auto">
                          <table
                            className="table table-responsive table-bordered  table-striped "
                            style={{ border: "1px solid" }}
                          >
                            <thead className="table-dark">
                              <tr>
                                <th scope="col">
                                  <p>
                                    <strong>
                                      Emisiones de CO2 de vuelos de las
                                      siguientes rutas.
                                    </strong>
                                  </p>
                                </th>
                                <th scope="col">
                                  <p>
                                    <strong>US$ 16.50 por tonelada</strong>
                                  </p>
                                </th>
                                <th scope="col">
                                  <p>
                                    <strong>Euros 11.08 por tonelada</strong>
                                  </p>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <p>
                                    Guatemala City-Flores ida y vuelta con TAG
                                  </p>
                                </td>
                                <td>
                                  <p>&nbsp;</p>
                                </td>
                                <td>
                                  <p>&nbsp;</p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <p>Guatemala City-Flores una vía con TAG</p>
                                </td>
                                <td>
                                  <p>&nbsp;</p>
                                </td>
                                <td>
                                  <p>&nbsp;</p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <p>
                                    Belice City- Flores ida y vuelta con TROPIC
                                    AIR
                                  </p>
                                </td>
                                <td>
                                  <p>&nbsp;</p>
                                </td>
                                <td>
                                  <p>&nbsp;</p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <p>
                                    Belice City- Flores una vía con TROPIC AIR
                                  </p>
                                </td>
                                <td>
                                  <p>&nbsp;</p>
                                </td>
                                <td>
                                  <p>&nbsp;</p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <p>
                                    Cancún- Flores ida y vuelta con TROPIC AIR
                                  </p>
                                </td>
                                <td>
                                  <p>&nbsp;</p>
                                </td>
                                <td>
                                  <p>&nbsp;</p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <p>Cancún- Flores una vía con TROPIC AIR</p>
                                </td>
                                <td>
                                  <p>&nbsp;</p>
                                </td>
                                <td>
                                  <p>&nbsp;</p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <p>
                                    Guatemala City- Cancún con TROPIC AIR-El
                                    Mirador en helicóptero.
                                  </p>
                                </td>
                                <td>
                                  <p>&nbsp;</p>
                                </td>
                                <td>
                                  <p>&nbsp;</p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <p>
                                    Aeropuerto de flores a Tikal transportación
                                    terrestre (49 millas).
                                  </p>
                                </td>
                                <td>
                                  <p>&nbsp;</p>
                                </td>
                                <td>
                                  <p>&nbsp;</p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="group-collapse-expand">
                      <div>
                        <div className="card card-body pt-0">
                          <Trans
                            i18nKey="article"
                            components={{
                              b: <strong />,
                              u: <u />,
                              p: <p style={{ textWrap: "pretty" }} />,
                              a: <a />,
                            }}
                          >
                            <p>{t("article.paragraph_12")}</p>
                            <p>{t("article.paragraph_13")}</p>
                            <p>{t("article.paragraph_14")}</p>
                            <p>{t("article.paragraph_15")}</p>
                            <p>{t("article.paragraph_16")}</p>
                            <p>{t("article.paragraph_17")}</p>
                          </Trans>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="booking-form">
                    <div className="head-booking-form">
                      <p className="text-xl-bold neutral-1000">
                        {t("aside.title")}
                      </p>
                    </div>
                    <Figure className="mx-4 my-4">
                      <FigureImage src={t("aside.fig_img_1")} />
                      <FigureCaption>
                        <p>{t("aside.fig_caption_1")}</p>
                        <p>{t("aside.fig_caption_2")}</p>
                      </FigureCaption>
                    </Figure>
                  </div>
                  <div className="box-popular-posts box-popular-posts-md card ">
                    <div className="card-body card-post">
                      <div className="card-info  d-flex flex-column gap-2">
                        {typeof aside === "object" &&
                          aside.paragraphs.map((p, idx) => (
                            <span className="text-sm neutral-1000" key={idx}>
                              <Trans
                                i18nKey="article"
                                components={{
                                  b: <strong />,
                                  u: <u />,
                                  p: <p style={{ textWrap: "pretty" }} />,
                                  a: (
                                    <a
                                      className="p-0 m-0 text-sm-bold"
                                      style={{ color: "#319f1f" }}
                                    />
                                  ),
                                }}
                              >
                                {p.text}
                              </Trans>
                            </span>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="mb-4 pb-4"></section>
        </main>
      </DefaultLayout>
    </>
  );
}
