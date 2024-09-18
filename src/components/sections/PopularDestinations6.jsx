import { Link } from "react-router-dom";
import CategoryFilter from "../elements/CategoryFilter";

export default function PopularDestinations6() {
  return (
    <>
      <section className="section-box box-popular-destinations background-body mt-0 pt-60">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-6 mb-30 text-center text-lg-start">
              <h2 className="neutral-1000">Destinos populares</h2>
              <p className="text-xl-medium neutral-500">
                Destinos favoritos según las opiniones de los clientes
              </p>
            </div>
            <div className="col-lg-6 mb-30">
              <CategoryFilter />
            </div>
          </div>
          <div className="box-list-populars">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="card-popular background-card hover-up">
                  <div className="card-image">
                    {" "}
                    <Link to="/destination">
                      <img
                        src="/assets/imgs/page/homepage1/tikgua3d2n.jpg"
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
                      Parque Tikal
                    </Link>
                    <div className="card-meta">
                      <div className="meta-links">
                        {" "}
                        <Link to="#">356 Tours, </Link>
                        <Link to="#">248 Actividades</Link>
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
                        src="/assets/imgs/page/homepage1/journey1.jpg"
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
                        <Link to="#">356 Tours, </Link>
                        <Link to="#">248 Actividades</Link>
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
                        src="/assets/imgs/page/homepage1/pacaya_volcano.jpg"
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
                      El Volcán de Pacaya
                    </Link>
                    <div className="card-meta">
                      <div className="meta-links">
                        {" "}
                        <Link to="#">356 Tours, </Link>
                        <Link to="#">15 Actividades</Link>
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
                        src="/assets/imgs/page/homepage1/sunrisenew.jpg"
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
                        <Link to="#">356 Tours, </Link>
                        <Link to="#">248 Actividades</Link>
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
                        src="/assets/imgs/page/homepage1/PosadaDeDonRodrigoAntigua.jpg"
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
                      Antigua Guatemala - Posada de Don Rodrigo
                    </Link>
                    <div className="card-meta">
                      <div className="meta-links">
                        {" "}
                        <Link to="#">356 Tours, </Link>
                        <Link to="#">248 Actividades</Link>
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
                        src="/assets/imgs/page/homepage1/yaxhalagoon3.jpg"
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
                        <Link to="#">356 Tours, </Link>
                        <Link to="#">248 Actividades</Link>
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
                        src="/assets/imgs/page/homepage1/PB140150.JPG"
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
                        <Link to="#">356 Tours, </Link>
                        <Link to="#">248 Actividades</Link>
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
