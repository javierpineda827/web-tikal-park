import DefaultLayout from "../components/layout/DefaultLayout";
import MediaSection from "../components/elements/MediaSection";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation("Contact");

  return (
    <>
      <DefaultLayout headerStyle={1} footerStyle={1}>
        <main className="main">
          <section className="box-section box-location-shop background-body">
            <div className="container">
              <div className="row align-items-end">
                <div className="col-lg-7 wow fadeInUp">
                  <h1 className="neutral-1000 mt-15">
                    {" "}
                    <span></span>
                    {t("contact_us")}
                    <span></span>
                  </h1>
                </div>
              </div>
            </div>
          </section>

          <section className="section-box  ">
            <div className="container">
              <div className="text-center wow fadeInUp">
                <h2 className="mt-8 mb-15 neutral-1000">
                  {t("you_may_email_us_at")}
                </h2>
                <h4 className="mb-4">
                  <a href={`mailto:${t("email")}`}>{t("email")}</a>
                </h4>
                <span className="text-md-bold fs-5">{t("call_at_our")}</span>
              </div>
            </div>
          </section>
          <section className="box-section box-contact-support ">
            <div className="container">
              <div className="box-footer-col-3">
                <div className="footer-col-1">
                  <div className="box-footer-help">
                    <img
                      className="light-mode"
                      alt="Travila"
                      src="/imgs/template/icons/help-w.svg"
                    />
                    <img
                      className="dark-mode"
                      alt="Travila"
                      src="/imgs/page/homepage6/help.svg"
                    />
                    <div className="box-info-support">
                      <p className="text-lg-bold mb-5 neutral-1000">
                        {t("phone_numbers")}
                      </p>
                      <div
                        className=" phone-support neutral-1000"
                        to="tel:+50259793030"
                      >
                        <div className="row justify-content-center gap-2">
                          <a href={`tel:${t("phone1")}`}>
                            <span className="text-md-bold">{t("phone1")}</span>
                          </a>

                          <a href={`tel:${t("phone2")}`}>
                            <span className="text-md-bold"> {t("phone2")}</span>
                          </a>
                        </div>
                        <p className="text-lg-bold mt-4 neutral-1000">
                          {t("call_us")}
                        </p>
                        <div className="row justify-content-center gap-2">
                          <a href={`tel:${t("phone3")}`}>
                            <span className="text-md-bold"> {t("phone3")}</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="footer-col-2 ">
                  <div className="box-join ">
                    <img
                      className="light-mode"
                      alt="Travila"
                      src="/imgs/template/icons/join-w.svg"
                    />
                    <img
                      className="dark-mode"
                      alt="Travila"
                      src="/imgs/page/homepage6/join.svg"
                    />
                    <span className="neutral-1000 text-md mt-40 mb-40">
                      {t("suggestions")}
                    </span>
                  </div>
                </div>
                <div className="footer-col-3">
                  <div className="box-send-message">
                    {" "}
                    <img
                      className="light-mode"
                      alt="Travila"
                      src="/imgs/template/icons/send-msg-w.svg"
                    />
                    <img
                      className="dark-mode"
                      alt="Travila"
                      src="/imgs/page/homepage6/msg.svg"
                    />
                    <div className="box-info-msg">
                      <div>
                        <p className="text-lg-bold neutral-1000">
                          {t("your_write_us")}
                        </p>
                        <span className="text-sm-medium neutral-1000 ">
                          <p>{t("company")}</p>
                          <p></p>
                          <p>{t("city")}</p>
                        </span>
                      </div>
                      <div className="mt-4">
                        <p className="text-sm-bold neutral-1000">{t("text")}</p>
                        <span className="text-sm-medium neutral-1000 ">
                          <p>{t("text1")}</p>
                          <p>{t("text2")}</p>
                          <p>{t("text3")}</p>
                          <p>{t("text4")}</p>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="heading-6 neutral-1000 mt-4 mx-auto d-flex justify-content-center">
                {t("message")}
              </p>
            </div>
          </section>
          <section className="section-box box-media background-body">
            <MediaSection />
          </section>
        </main>
      </DefaultLayout>
    </>
  );
}
