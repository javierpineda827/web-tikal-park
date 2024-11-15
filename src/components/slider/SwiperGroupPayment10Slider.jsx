import { swiperGroupPayment10 } from "@/util/swiperOption";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";

export default function SwiperGroupPayment10Slider() {
  const { t } = useTranslation("swipergrouppayment10slider");
  const sliders = t("sliders", { returnObjects: true });

  return (
    <>
      <Swiper {...swiperGroupPayment10}>
        {typeof sliders === "object" &&
          sliders.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="item-logo-payment d-flex justify-content-center">
                {" "}
                <img
                  className="light-mode"
                  src={item.url_image}
                  alt={item.alt}
                  width={128}
                  height={32}
                  style={{ ObjectFit: "cover" }}
                />
                <img
                  className="dark-mode"
                  src={item.url_image}
                  alt={item.alt}
                  width={128}
                />
                {/* <img
                className="dark-mode"
                src="/imgs/page/homepage10/casa-dark.svg"
                alt="Travila"
              /> */}
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
