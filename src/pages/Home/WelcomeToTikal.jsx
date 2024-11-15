import { useState } from "react";
import { Link } from "react-router-dom";
import DefaultLayout from "../../components/layout/DefaultLayout";
import IconPin from "../../components/ui/IconPin";
import IconMap from "../../components/ui/IconMap";
import IconChevronDown from "../../components/ui/IconChevronDown";
import { Figure, FigureCaption, FigureImage } from "react-bootstrap";
import IconChevronRightLight from "../../components/ui/IconChevronRightLight";
import { useTranslation } from "react-i18next";
import TikalInfo from "../../components/elements/TikalInfo";

export default function WelcomeToTikal() {
  const { t } = useTranslation("WelcomeToTikal");
  const [isAccordion, setIsAccordion] = useState(null);

  const handleAccordion = (key) => {
    setIsAccordion((prevState) => (prevState === key ? null : key));
  };
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
                  {/* <div className="box-info-tour">
                    <div className="tour-info-group">
                      <div className="icon-item">
                        <IconCalendar />
                      </div>
                      <div className="info-item">
                        <p className="text-sm-medium neutral-600">Duration</p>
                        <p className="text-lg-bold neutral-1000">5-7 days</p>
                      </div>
                    </div>
                    <div className="tour-info-group">
                      <div className="icon-item background-1">
                        <IconBaggage />
                      </div>
                      <div className="info-item">
                        <p className="text-sm-medium neutral-600">Group Size</p>
                        <p className="text-lg-bold neutral-1000">06 people</p>
                      </div>
                    </div>
                    <div className="tour-info-group">
                      <div className="icon-item background-7">
                        <IconItinerary />
                      </div>
                      <div className="info-item">
                        <p className="text-sm-medium neutral-600">Tour Type</p>
                        <p className="text-lg-bold neutral-1000">Daily Tour</p>
                      </div>
                    </div>
                    <div className="tour-info-group">
                      <div className="icon-item background-3">
                        <IconWorldPin />
                      </div>
                      <div className="info-item">
                        <p className="text-sm-medium neutral-600">Languages</p>
                        <p className="text-lg-bold neutral-1000">English</p>
                      </div>
                    </div>
                  </div> */}
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
                          <p>{t("article.paragraph_1")}</p>
                          <p>{t("article.paragraph_2")}</p>
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
                      <button
                        className={
                          isAccordion == 2
                            ? "btn btn-collapse collapsed"
                            : "btn btn-collapse"
                        }
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseHighlight"
                        aria-expanded="false"
                        aria-controls="collapseHighlight"
                        onClick={() => handleAccordion(2)}
                      ></button>
                      <div
                        className={
                          isAccordion == 2 ? "collapse" : "collapse show"
                        }
                        id="collapseHighlight"
                      >
                        <div className="card card-body">
                          <p>{t("article.paragraph_3")}</p>
                          <p>{t("article.paragraph_4")}</p>
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
                      <p>{t("article.paragraph_5")}</p>

                      <p>{t("article.paragraph_6")}</p>

                      <p>{t("article.paragraph_7")}</p>
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

                  <TikalInfo />
                </div>
              </div>
            </div>
          </section>
        </main>
      </DefaultLayout>
    </>
  );
}
