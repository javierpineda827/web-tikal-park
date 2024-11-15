import { useTranslation } from "react-i18next";
import SwiperGroupPaymentSlider from "../slider/SwiperGroupPaymentSlider";

export default function Skyward() {
  const { t } = useTranslation("skyward");
  const group_images = t("group_images", { returnObjects: true });
  const dataImage = t("group_slider", { returnObjects: true });
  return (
    <>
      <section className="section-box box-skyward background-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-30 wow fadeInUp">
              <div className="box-image-sky">
                <div className="col-sky-1">
                  {typeof group_images === "object" &&
                    group_images
                      .slice(0, 3)
                      .map((image, index) => (
                        <img
                          key={index}
                          className="w-100"
                          src={image.url_image}
                          alt={image.alt}
                        />
                      ))}
                </div>
                <div className="col-sky-2">
                  {typeof group_images === "object" &&
                    group_images
                      .slice(3)
                      .map((image, index) => (
                        <img
                          key={index}
                          className="w-100"
                          src={image.url_image}
                          alt={image.alt}
                        />
                      ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-30 wow fadeInUp">
              <div className="box-right-skyward">
                <span className="btn btn-tag-white">{t("label")}</span>
                <h4 className="title-why mb-25 mt-10 neutral-1000">
                  {t("title")}
                </h4>
                <p className="text-lg-medium mb-25 neutral-1000">
                  {t("description")}
                </p>
                <div className="payment-method mt-60">
                  <div className="box-swiper mt-30">
                    <div className="swiper-container swiper-group-payment">
                      <SwiperGroupPaymentSlider data={dataImage} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
