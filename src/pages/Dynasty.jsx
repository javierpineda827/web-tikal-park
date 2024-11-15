import { useState } from "react";

import DefaultLayout from "../components/layout/DefaultLayout";

import IconChevronDown from "../components/ui/IconChevronDown";
import { Figure, FigureCaption, FigureImage } from "react-bootstrap";

import { Trans, useTranslation } from "react-i18next";

export default function Dynasty() {
  const { t } = useTranslation("Dynasty");
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
                              h3: <h3 style={{ fontSize: "1.5rem" }} />,
                            }}
                          >
                            <p>{t("article.paragraph_1")}</p>
                            <p>{t("article.paragraph_2")}</p>

                            <p>{t("article.paragraph_3")}</p>
                            <p>{t("article.paragraph_4")}</p>
                            <p>{t("article.paragraph_5")}</p>
                            <p>{t("article.paragraph_6")}</p>
                          </Trans>
                          <div className="container mt-5">
                            <table className="table table-bordered table-hover table-striped text-center border">
                              <thead className="thead-dark">
                                <tr>
                                  <th>Name of Ruler</th>
                                  <th>Access to Throne</th>
                                  <th>Date of Reign</th>
                                  <th>Monuments/ Importance</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Yax Ehb&apos; Xook</td>
                                  <td>60?</td>
                                  <td></td>
                                  <td>Founder of the Tikal Lineage</td>
                                </tr>
                                <tr>
                                  <td>Balam Ajaw or Decorated Jaguar</td>
                                  <td></td>
                                  <td>292 A.D.</td>
                                  <td>Stelae 29 & 31</td>
                                </tr>
                                <tr>
                                  <td>
                                    K&apos;inich Ehb&apos; or Animal Headdress
                                  </td>
                                  <td></td>
                                  <td></td>
                                  <td>Stela 1 from El Encanto</td>
                                </tr>
                                <tr>
                                  <td>Siyaj Chan K&apos;awiil I</td>
                                  <td></td>
                                  <td>307 A.D.</td>
                                  <td>Stela 1 from El Encanto</td>
                                </tr>
                                <tr>
                                  <td>
                                    Ix Une&apos; B&apos;alam
                                    <br /> Lady Une&apos; B&apos;alam
                                  </td>
                                  <td></td>
                                  <td>317 A.D.</td>
                                  <td>
                                    Stela 31 (twice) & small sherd fragment of a
                                    vase found in Tikal says &quot;The lady… was
                                    born…&quot;
                                  </td>
                                </tr>
                                <tr>
                                  <td>K&apos;inich Muwaan Jol</td>
                                  <td></td>
                                  <td>?-359 A.D.</td>
                                  <td>
                                    Stela 39, appears on Dynastic vase, Stela
                                    28, Stela from Corozal, & on sculpture named
                                    Man of Tikal
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    Chak Tok Ich&apos;aak I<br /> Great Jaguar
                                    Paw I
                                  </td>
                                  <td>360 A.D. approximately</td>
                                  <td>360-378 A.D.</td>
                                  <td>
                                    Stelae 26, 31, 39 & Stela from Corozal, & on
                                    sculpture named Man of Tikal
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    Yax Nuun Ayiin I<br /> Curl Snout
                                  </td>
                                  <td>379 A.D.</td>
                                  <td>Until his death in 404 A.D.?</td>
                                  <td>
                                    Stelae 4, 18 and 31 on sculpture named Man
                                    of Tikal
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    Siyaj Chan K&apos;awiil II
                                    <br /> Stormy Sky
                                  </td>
                                  <td>411 A.D.</td>
                                  <td>
                                    Until his death on 456 A.D., but he is
                                    buried 2 years later on Temple 33
                                  </td>
                                  <td>Stela 1, 28, 31 and 40</td>
                                </tr>
                                <tr>
                                  <td>
                                    K&apos;an Ak
                                    <br /> Kan Boar (Pecary)
                                  </td>
                                  <td>458 A.D.</td>
                                  <td>Until his death on 486 A.D.?</td>
                                  <td>Stelae 2, 9, 13 and 40</td>
                                </tr>
                                <tr>
                                  <td>
                                    Chak Tok Ich&apos;aak II
                                    <br /> Jaguar Paw II
                                  </td>
                                  <td>486 A.D.</td>
                                  <td>Until his death on 508 A.D.?</td>
                                  <td>Stela 3, 7, 15 & 27</td>
                                </tr>
                                <tr>
                                  <td>
                                    Ix Yo K&apos;in or
                                    <br /> Lady of Tikal
                                  </td>
                                  <td>511 A.D.</td>
                                  <td>Until her death on 527 A.D.</td>
                                  <td>Stela 6, 12 and 23</td>
                                </tr>
                                <tr>
                                  <td>Kaloomte&apos; B&apos;alam</td>
                                  <td>511 A.D.?</td>
                                  <td>527 A.D.</td>
                                  <td>Stela 10, 12 and 25</td>
                                </tr>
                                <tr>
                                  <td>Bird Claw?</td>
                                  <td></td>
                                  <td></td>
                                  <td>Stela 8</td>
                                </tr>
                                <tr>
                                  <td>Wak Chan K&apos;awil or Double Bird</td>
                                  <td>December 29th, 537 A.D.</td>
                                  <td>Until his death on 562 A.D.</td>
                                  <td>
                                    Stela 17 and on Altar 21 of Caracol, dying
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    K&apos;inich Waaw
                                    <br /> Animal Skull
                                  </td>
                                  <td>593 A.D.</td>
                                  <td>628 A.D.</td>
                                  <td>
                                    His portrait appears on a polychrome vase
                                    from Tikal, also on MT 216 and 217
                                  </td>
                                </tr>
                                <tr>
                                  <td>K&apos;inich Wayaan</td>
                                  <td></td>
                                  <td></td>
                                  <td>
                                    Ceramics obtained without context, found in
                                    several collections in Europe, at the Tikal
                                    Museum and at the Popol Vuh Museum in
                                    Guatemala City
                                  </td>
                                </tr>
                                <tr>
                                  <td>K&apos;inich Muwaan Jol II</td>
                                  <td></td>
                                  <td></td>
                                  <td>
                                    Ceramics obtained without context, found in
                                    several collections in Europe, at the Tikal
                                    Museum and at the Popol Vuh Museum in
                                    Guatemala City
                                  </td>
                                </tr>
                                <tr>
                                  <td>Nuun Ujol Chak or Shield Skull</td>
                                  <td>657 A.D.</td>
                                  <td>Died in 679 A.D.</td>
                                  <td>
                                    Married Lady Throne Jaguar/ Named in Lintel
                                    3 of Temple I
                                  </td>
                                </tr>
                                <tr>
                                  <td>Jasaw Chan K&apos;awiil I or Ruler A</td>
                                  <td>682 A.D.</td>
                                  <td>
                                    Died 734 A.D. and was buried in a
                                    spectacular ceremony beneath Temple I
                                  </td>
                                  <td>
                                    Married Lady 12 Macaw/ Monuments: Stela 30 &
                                    16/ Lintels 2 and 3 of Temple I
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    Yik&apos;in Chan K&apos;awiil or Ruler B
                                  </td>
                                  <td>734 A.D.</td>
                                  <td>On 746 A.D. he was still in power</td>
                                  <td>
                                    Monuments: Stela 5, 20 and 21 of Temple IV
                                  </td>
                                </tr>
                                <tr>
                                  <td>?</td>
                                  <td>766 A.D.</td>
                                  <td>768 A.D.</td>
                                  <td>Monuments: Temple VI</td>
                                </tr>
                                <tr>
                                  <td>Yax Nuun Ayiin II or Ruler C</td>
                                  <td>768 A.D.</td>
                                  <td>790 A.D.</td>
                                  <td>Stelae 19 and 22, Altars 6 & 10</td>
                                </tr>
                                <tr>
                                  <td>Nuun Ujol K&apos;inich</td>
                                  <td>800 A.D.?</td>
                                  <td>810 A.D.?</td>
                                  <td>Mentioned on Lintel of Temple III</td>
                                </tr>
                                <tr>
                                  <td>Dark Sun</td>
                                  <td>810 A.D.?</td>
                                  <td></td>
                                  <td>
                                    Depicted on Stela 24 of Temple III & Lintel
                                    of Temple III
                                  </td>
                                </tr>
                                <tr>
                                  <td>Jewel K&apos;awil</td>
                                  <td>849 A.D.</td>
                                  <td></td>
                                  <td>Mentioned on Stela 10 from Ceibal</td>
                                </tr>
                                <tr>
                                  <td>Jasaw Chan K&apos;awiil II</td>
                                  <td>869 A.D.</td>
                                  <td>889 A.D.</td>
                                  <td>
                                    Depicted on Stela 11 of Tikal and Stela 12
                                    of Uaxactun twenty years later
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
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
                              h3: <h3 style={{ fontSize: "1.5rem" }} />,
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
                    <div className="container my-4 mx-auto">
                      <Figure className="d-flex justify-content-center flex-column">
                        <FigureImage
                          src={t("article.fig_img_2")}
                          style={{ width: "300px", height: "auto" }}
                        />
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
                              h3: <h3 style={{ fontSize: "1.5rem" }} />,
                            }}
                          >
                            <p>{t("article.paragraph_11")}</p>
                            <p>{t("article.paragraph_12")}</p>
                            <p>{t("article.paragraph_13")}</p>
                            <p>{t("article.paragraph_14")}</p>
                            <p>{t("article.paragraph_15")}</p>
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
                                h3: <h3 style={{ fontSize: "1.5rem" }} />,
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
