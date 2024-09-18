import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer1() {
  const { t } = useTranslation("footer");
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="row align-items-center">
              <div className="col-md-4 text-center text-md-start">
                <Link className="d-inline-block" to="/">
                  <img
                    alt="Travila"
                    src="/assets/imgs/template/logo-footer.png"
                    width={80}
                    height={42}
                  />
                </Link>
              </div>
              <div className="col-md-8 text-center text-md-end">
                <div className="d-flex align-items-center justify-content-center justify-content-md-end">
                  <Link
                    className="text-md-medium need-help"
                    to={`tel:${t("footer.help.tel")}`}
                  >
                    {t("footer.help.text")}
                  </Link>
                  <Link
                    className="heading-6 phone-support"
                    to={`tel:${t("footer.help.tel")}`}
                  >
                    {t("footer.help.phone")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-12 footer-1">
              <h6>{t("footer.contact.title")}</h6>
              <div className="mt-20 mb-20">
                <div className="box-info-contact">
                  <p className="text-md neutral-400 icon-worktime">
                    {t("footer.contact.hours")}
                  </p>
                  <p className="text-md neutral-400 icon-email">
                    {t("footer.contact.email.primary")} <br />{" "}
                    {t("footer.contact.email.secondary")}
                  </p>
                </div>
                <p className="text-lg-bold title-follow neutral-0">
                  {t("footer.contact.followUs")}
                </p>
                <div className="box-socials-footer">
                  <Link
                    className="icon-socials icon-instagram"
                    to={t("footer.socials.instagramHref")}
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
                  <Link
                    className="icon-socials icon-facebook"
                    to={t("footer.socials.facebookHref")}
                  >
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18.3334 13.4915C18.3334 16.5248 16.5251 18.3332 13.4917 18.3332H12.5001C12.0417 18.3332 11.6667 17.9582 11.6667 17.4998V12.6915C11.6667 12.4665 11.8501 12.2748 12.0751 12.2748L13.5417 12.2498C13.6584 12.2415 13.7584 12.1582 13.7834 12.0415L14.0751 10.4498C14.1001 10.2998 13.9834 10.1582 13.8251 10.1582L12.0501 10.1832C11.8167 10.1832 11.6334 9.99985 11.6251 9.77485L11.5918 7.73317C11.5918 7.59984 11.7001 7.48318 11.8417 7.48318L13.8417 7.44984C13.9834 7.44984 14.0918 7.34152 14.0918 7.19985L14.0584 5.19983C14.0584 5.05816 13.9501 4.94984 13.8084 4.94984L11.5584 4.98318C10.1751 5.00818 9.07509 6.1415 9.10009 7.52484L9.14175 9.8165C9.15008 10.0498 8.96676 10.2332 8.73342 10.2415L7.73341 10.2582C7.59175 10.2582 7.48342 10.3665 7.48342 10.5082L7.50842 12.0915C7.50842 12.2332 7.61675 12.3415 7.75841 12.3415L8.75842 12.3248C8.99176 12.3248 9.17507 12.5082 9.18341 12.7332L9.2584 17.4832C9.26674 17.9498 8.89174 18.3332 8.42507 18.3332H6.50841C3.47508 18.3332 1.66675 16.5248 1.66675 13.4832V6.50817C1.66675 3.47484 3.47508 1.6665 6.50841 1.6665H13.4917C16.5251 1.6665 18.3334 3.47484 18.3334 6.50817V13.4915V13.4915Z" />
                    </svg>
                  </Link>
                  <Link
                    className="icon-socials icon-twitter"
                    to={t("footer.socials.twitterHref")}
                  >
                    <svg
                      width={18}
                      height={16}
                      viewBox="0 0 18 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.1924 3.06705L14.8565 5.40299C14.3846 10.8733 9.77132 15.1249 4.25022 15.1249C3.11585 15.1249 2.18069 14.9452 1.47053 14.5905C0.897878 14.3038 0.663503 13.9967 0.604909 13.9092C0.552663 13.8309 0.518798 13.7417 0.505847 13.6485C0.492895 13.5552 0.50119 13.4602 0.530113 13.3706C0.559036 13.2809 0.607839 13.199 0.672875 13.1309C0.737911 13.0628 0.817498 13.0102 0.905691 12.9772C0.926003 12.9694 2.79944 12.2499 3.98928 10.8803C3.32943 10.3378 2.75341 9.70072 2.27991 8.98971C1.31116 7.55143 0.226784 5.05299 0.561159 1.3194C0.571758 1.20076 0.616036 1.08762 0.688779 0.993308C0.761521 0.898992 0.859699 0.827427 0.971752 0.787039C1.0838 0.746651 1.20506 0.739122 1.32125 0.76534C1.43744 0.791557 1.54372 0.850429 1.62757 0.935022C1.65491 0.962365 4.22757 3.52096 7.37288 4.35065V3.87487C7.37168 3.37595 7.47032 2.88185 7.66299 2.42164C7.85566 1.96143 8.13847 1.54443 8.49475 1.19518C8.84077 0.849652 9.25248 0.576929 9.70561 0.393103C10.1587 0.209277 10.6441 0.11807 11.133 0.124865C11.7889 0.131335 12.432 0.307407 12.9997 0.635963C13.5674 0.964519 14.0405 1.43438 14.3729 1.99987H16.7502C16.8739 1.99977 16.9948 2.03637 17.0977 2.10504C17.2006 2.17371 17.2808 2.27136 17.3281 2.38562C17.3755 2.49989 17.3878 2.62563 17.3637 2.74693C17.3395 2.86823 17.2799 2.97964 17.1924 3.06705Z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-xs-6 footer-2">
              <h6 className="text-linear-3">
                {t("footer.sections.help.title")}
              </h6>
              <ul className="menu-footer">
                <li>
                  <Link to={t("footer.sections.help.termsHref")}>
                    {t("footer.sections.help.terms")}
                  </Link>
                </li>

                <li>
                  <Link to={t("footer.sections.help.securityHref")}>
                    {t("footer.sections.help.security")}
                  </Link>
                </li>
                <li>
                  <Link to={t("footer.sections.help.privacyHref")}>
                    {t("footer.sections.help.privacy")}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-2 col-xs-6 footer-3">
              <h6 className="text-linear-3">
                {t("footer.sections.about.title")}
              </h6>
              <ul className="menu-footer">
                <li>
                  <Link to={t("footer.sections.about.aboutUsHref")}>
                    {t("footer.sections.about.aboutUs")}
                  </Link>
                </li>

                <li>
                  <Link to={t("footer.sections.about.contactUsHref")}>
                    {t("footer.sections.about.contactUs")}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-2 col-xs-6 footer-4">
              <h6 className="text-linear-3">
                {t("footer.sections.services.title")}
              </h6>
              <ul className="menu-footer">
                <li>
                  <Link to="#">{t("footer.sections.services.tourGuide")}</Link>
                </li>
                <li>
                  <Link to="#">
                    {t("footer.sections.services.excursionBooking")}
                  </Link>
                </li>

                <li>
                  <Link to="#">
                    {t("footer.sections.services.hotelBooking")}
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    {t("footer.sections.services.rentalServices")}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-xs-6 footer-5">
              <h6 className="text-linear-3">
                {t("footer.sections.legal.title")}
              </h6>
              <ul className="menu-footer">
                <li>
                  <Link to="#">
                    {t("footer.sections.legal.serviceConditions")}
                  </Link>
                </li>
                <li>
                  <Link to="#">{t("footer.sections.legal.privacyPolicy")}</Link>
                </li>
                <li>
                  <Link to="#">{t("footer.sections.legal.cookiePolicy")}</Link>
                </li>
                <li>
                  <Link to="#">
                    {t("footer.sections.legal.dataProcessing")}
                  </Link>
                </li>
                <li>
                  <Link to="#">{t("footer.sections.legal.dataPolicy")}</Link>
                </li>
                <li>
                  <Link to="#">{t("footer.sections.legal.refundPolicy")}</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom mt-50">
            <div className="row">
              <div className="col-md-6 text-md-start text-center mb-20">
                <p className="text-xs color-white ">
                  {t("footer.footerBottom.copyright").replace(
                    "{year}",
                    new Date().getFullYear()
                  )}
                </p>
              </div>
              <div className="col-md-6 text-md-end text-center mb-20">
                <ul className="menu-bottom-footer">
                  <li>
                    {" "}
                    <Link to="/term">
                      <span className="text-xs">
                        {t("footer.footerBottom.menu.terms")}
                      </span>
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="#">
                      <span className="text-xs">
                        {t("footer.footerBottom.menu.privacy")}
                      </span>
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="#">
                      <span className="text-xs">
                        {t("footer.footerBottom.menu.legalNotice")}
                      </span>
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="#">
                      <span className="text-xs">
                        {t("footer.footerBottom.menu.accessibility")}
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
