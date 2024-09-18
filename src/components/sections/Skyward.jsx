import SwiperGroupPaymentSlider from "../slider/SwiperGroupPaymentSlider";

export default function Skyward() {
  return (
    <>
      <section className="section-box box-skyward background-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-30 wow fadeInUp">
              <div className="box-image-sky">
                <div className="col-sky-1">
                  <img
                    className="w-100"
                    src="/assets/imgs/page/homepage10/001CRTikal.jpg"
                    alt="Travila"
                  />
                  <img
                    className="w-100"
                    src="/assets/imgs/page/homepage10/4x4_adventure_2.jpg"
                    alt="Travila"
                  />
                  <img
                    className="w-100"
                    src="/assets/imgs/page/homepage10/Background08.jpg"
                    alt="Travila"
                  />
                </div>
                <div className="col-sky-2">
                  <img
                    className="w-100"
                    src="/assets/imgs/page/homepage10/chicabal_lagoon.jpg"
                    alt="Travila"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-30 wow fadeInUp">
              <div className="box-right-skyward">
                <span className="btn btn-tag-white">Únete a nuestros</span>
                <h4 className="title-why mb-25 mt-10 neutral-1000">
                  “Tours Especiales” que llevan la firma de Especialistas en
                  Ecoturismo y Aventura
                </h4>
                <p className="text-lg-medium mb-25 neutral-1000">
                  Descubre los destinos mas sorprendentes de Guatemala y del
                  Mundo Maya. Únete a nuestros tours a El Mirador
                </p>
                <div className="payment-method mt-60">
                  <div className="box-swiper mt-30">
                    <div className="swiper-container swiper-group-payment">
                      <SwiperGroupPaymentSlider />
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
