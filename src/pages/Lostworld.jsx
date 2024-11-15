import { useState } from "react";
import { Link } from "react-router-dom";
import DefaultLayout from "../components/layout/DefaultLayout";
import IconChevronDown from "../components/ui/IconChevronDown";
import { Figure, FigureCaption, FigureImage } from "react-bootstrap";
import { Trans, useTranslation } from "react-i18next";

export default function Lostworld() {
  const { t } = useTranslation("Lostworld");
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
            <div className="container"></div>
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
                    <div className="container mx-auto d-flex justify-content-center align-items-center">
                      <p className="breadcrumb">
                        <a
                          className="breadcrumb-item font-semibold text-black"
                          href="#"
                        >
                          Tikal Arqueología y Arquitectura
                        </a>
                      </p>
                    </div>
                    <nav aria-label="breadcrumb d-flex align-items-center justify-content-center">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a href="#" className="text-black">
                            Tikal Datos
                          </a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="/explorers" className="text-black">
                            Primeros Exploradores
                          </a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="/penn" className="text-black">
                            Excavación de Pensilvania en Tikal
                          </a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="/" className="text-black">
                            Proyecto Nacional Tikal
                          </a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="/ancient" className="text-black">
                            Los Antiguos Mayas de Tikal
                          </a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="#" className="text-black">
                            Gobernantes Dinásticos de Tikal
                          </a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="#" className="text-black">
                            Calendarios & El Sistema de Cuenta Larga
                          </a>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          <a href="#" className="text-black">
                            Glifo Emblema de Tikal
                          </a>
                        </li>
                      </ol>
                    </nav>
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
                          <h4 className="fs-6">{t("article.label_1")}</h4>
                          <Trans
                            i18nKey="article"
                            components={{
                              b: <strong />,
                              u: <u />,
                              p: (
                                <p
                                  style={{
                                    textWrap: "pretty",
                                    paddingBlock: "2px",
                                  }}
                                />
                              ),
                              a: <a />,
                            }}
                          >
                            <p>{t("article.paragraph_1")}</p>
                            <p>{t("article.paragraph_2")}</p>
                            <p>{t("article.paragraph_3")}</p>
                            <p>{t("article.paragraph_4")}</p>
                            <p>{t("article.paragraph_5")}</p>
                            <p>{t("article.paragraph_6")}</p>
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
                          <h4 className="fs-6">{t("article.label_2")}</h4>
                          <Trans
                            i18nKey="article"
                            components={{
                              b: <strong />,
                              u: <u />,
                              p: <p style={{ textWrap: "pretty" }} />,
                              a: <a />,
                            }}
                          >
                            <p>{t("article.paragraph_7")}</p>
                            <p>{t("article.paragraph_8")}</p>
                            <p>{t("article.paragraph_9")}</p>
                            <p>{t("article.paragraph_10")}</p>
                            <p>{t("article.paragraph_11")}</p>
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
                            <p>{t("article.paragraph_11")}</p>
                            <p>{t("article.paragraph_12")}</p>
                            <p>{t("article.paragraph_13")}</p>
                            <p>{t("article.paragraph_14")}</p>
                            <p>{t("article.paragraph_14")}</p>
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
                            <Trans
                              i18nKey="article"
                              key={idx}
                              components={{
                                b: <strong />,
                                u: <u />,
                                p: <p style={{ textWrap: "pretty" }} />,
                                a: <a />,
                              }}
                            >
                              {p.text}
                            </Trans>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </DefaultLayout>
    </>
  );
}
