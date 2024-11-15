import { Link } from "react-router-dom";
import CategoryFilter from "../elements/CategoryFilter";
import { useTranslation } from "react-i18next";

export default function PopularDestinations6() {
  const { t } = useTranslation("Destinos");
  const destinos = t("destinations", { returnObjects: true });
  return (
    <>
      <section className="section-box box-popular-destinations background-body mt-0 pt-60">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-8 mb-30 text-center text-lg-start">
              <h2 className="neutral-1000">{t("title")}</h2>
              <div className="row col-lg-8">
                <p className="text-xl-medium neutral-500">{t("hours")}</p>
              </div>
            </div>
            <div className="col-lg-4 mb-30 d-flex justify-content-end  align-items-center flex-column">
              {/* <CategoryFilter /> */}
              <img src="" width={320}></img>
              <p className="text-xl-medium neutral-500"></p>
            </div>
            <hr></hr>
          </div>

          <div className="box-list-populars mt-30">
            <div className="row">
              {typeof destinos === "object" &&
                destinos.map((item, idx) => (
                  <div className="col-lg-3 col-sm-6" key={idx}>
                    <div className="card-popular background-card hover-up">
                      <div className="card-image">
                        <Link to={item.href}>
                          <img
                            src={item.img}
                            alt={item.text}
                            width={262}
                            height={150}
                            style={{ objectFit: "cover" }}
                          />
                        </Link>
                      </div>
                      <div className="card-info">
                        {" "}
                        <Link
                          className="card-title"
                          to={item.href}
                          style={{ minHeight: "4rem" }}
                        >
                          {item.text}
                        </Link>
                        <div className="card-meta">
                          <div className="meta-links">
                            <span className="text-sm-bold neutral-500">
                              {item.group_size}
                            </span>
                            <span className="text-sm neutral-500">
                              {item.number_people}
                            </span>

                            <Link to="#"></Link>
                            <Link to="#"></Link>
                          </div>
                          <div className="card-button">
                            {" "}
                            <Link to={item.href}>
                              <svg
                                width={10}
                                height={10}
                                viewBox="0 0 10 10"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

              {/* <div className="col-lg-3 col-sm-6">
                <div className="card-popular background-card hover-up">
                  <div className="card-image">
                    {" "}
                    <Link to="/destination">
                      <img
                        src="/imgs/page/home/floresaerial1.jpg"
                        alt="Travila"
                        width={262}
                        height={150}
                        style={{ objectFit: "cover" }}
                      />
                    </Link>
                  </div>
                  <div className="card-info">
                    {" "}
                    <Link className="card-title" to="/destination">
                      Isla de Flores
                    </Link>
                    <div className="card-meta">
                      <div className="meta-links">
                        {" "}
                        <Link to="#"></Link>
                        <Link to="#"></Link>
                      </div>
                      <div className="card-button">
                        {" "}
                        <Link to="/destination">
                          <svg
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="card-popular background-card hover-up">
                  <div className="card-image">
                    {" "}
                    <Link to="/destination">
                      <img
                        src="/imgs/page/home/destinations/pacaya_volcano.jpg"
                        alt="Travila"
                        width={262}
                        height={150}
                        style={{ objectFit: "cover" }}
                      />
                    </Link>
                  </div>
                  <div className="card-info">
                    {" "}
                    <Link className="card-title" to="/helitours03">
                      El Volcán de Pacaya
                    </Link>
                    <div className="card-meta">
                      <div className="meta-links">
                        {" "}
                        <Link to="#"></Link>
                        <Link to="#"></Link>
                      </div>
                      <div className="card-button">
                        {" "}
                        <Link to="/destination">
                          <svg
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="card-popular background-card hover-up">
                  <div className="card-image">
                    {" "}
                    <Link to="/destination">
                      <img
                        src="/imgs/page/home/destinations/sunrisenew.jpg"
                        alt="Travila"
                        height={150}
                        style={{ objectFit: "cover" }}
                      />
                    </Link>
                  </div>
                  <div className="card-info">
                    {" "}
                    <Link className="card-title" to="/destination">
                      El Amanecer
                    </Link>
                    <div className="card-meta">
                      <div className="meta-links">
                        {" "}
                        <Link to="#"></Link>
                        <Link to="#"></Link>
                      </div>
                      <div className="card-button">
                        {" "}
                        <Link to="/destination">
                          <svg
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="card-popular background-card hover-up">
                  <div className="card-image">
                    {" "}
                    <Link to="/destination">
                      <img
                        src="/imgs/page/home/destinations/PosadaDeDonRodrigoAntigua.jpg"
                        alt="Travila"
                        width={262}
                        height={150}
                        style={{ objectFit: "cover" }}
                      />
                    </Link>
                  </div>
                  <div className="card-info">
                    {" "}
                    <Link className="card-title" to="/destination">
                      Antigua Guatemala{" "}
                    </Link>
                    <div className="card-meta">
                      <div className="meta-links">
                        {" "}
                        <Link to="#"></Link>
                        <Link to="#"></Link>
                      </div>
                      <div className="card-button">
                        {" "}
                        <Link to="/destination">
                          <svg
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="card-popular background-card hover-up">
                  <div className="card-image">
                    {" "}
                    <Link to="/destination">
                      <img
                        src="/imgs/page/home/destinations/yaxhalagoon3.jpg"
                        alt="Travila"
                        width={262}
                        height={150}
                        style={{ objectFit: "cover" }}
                      />
                    </Link>
                  </div>
                  <div className="card-info">
                    {" "}
                    <Link className="card-title" to="/destination">
                      Laguna Yaxha
                    </Link>
                    <div className="card-meta">
                      <div className="meta-links">
                        {" "}
                        <Link to="#"></Link>
                        <Link to="#"></Link>
                      </div>
                      <div className="card-button">
                        {" "}
                        <Link to="/destination">
                          <svg
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="card-popular background-card hover-up">
                  <div className="card-image">
                    {" "}
                    <Link to="/destination">
                      <img
                        src="/imgs/page/home/destinations/PB140150.jpg"
                        alt="Travila"
                        width={262}
                        height={150}
                        style={{ objectFit: "cover" }}
                      />
                    </Link>
                  </div>
                  <div className="card-info">
                    {" "}
                    <Link className="card-title" to="/destination">
                      Pacifico
                    </Link>
                    <div className="card-meta">
                      <div className="meta-links">
                        {" "}
                        <Link to="#"></Link>
                        <Link to="#"></Link>
                      </div>
                      <div className="card-button">
                        {" "}
                        <Link to="/destination">
                          <svg
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="card-popular-2">
                  <div className="card-info">
                    <h6 className="neutral-500">
                      Cómo crear la experiencia de viaje perfecta
                    </h6>
                    <div className="card-meta">
                      <div className="meta-links">
                        Visite <br />
                        Todos los destinos
                      </div>
                      <div className="card-button hover-up">
                        {" "}
                        <Link to="/destination">
                          <svg
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
