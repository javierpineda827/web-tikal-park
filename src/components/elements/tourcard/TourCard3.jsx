import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // Adjust the import based on your routing setup

export default function TourCard3({ tour }) {
  return (
    <div className="card-journey-small background-card">
      <div className="card-image">
        <Link className="wish" to="#">
          <svg
            width={20}
            height={18}
            viewBox="0 0 20 18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z"
              stroke=""
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </Link>
        <img src={`/imgs/page/tour/${tour?.image}`} alt="Travila" />
      </div>
      <div className="card-info background-card">
        <div className="card-rating">
          <div className="card-left"></div>
          <div className="card-right">
            <span className="rating">
              {tour.rating}{" "}
              <span className="text-sm-medium neutral-500">
                ({tour.reviews})
              </span>
            </span>
          </div>
        </div>
        <div className="card-title">
          <Link className="text-lg-bold neutral-1000" to="/tour-detail">
            {tour.name}
          </Link>
        </div>
        <div className="card-button position-absolute bottom-0 end-0 z-1">
          <div className="p-4">
            <Link className="btn btn-gray" to="/tour-detail">
              {"Leer más..."}
            </Link>
          </div>
        </div>
        <div className="card-program">
          <div className="card-duration-tour">
            <p className="icon-duration text-sm-medium neutral-500">
              {tour.time}
            </p>
            <p className="icon-guest text-sm-medium neutral-500">
              {tour.number_persons}
            </p>
          </div>
          <div className="col-sm-10 col-md-10 mr-auto position-relative ">
            <span className="text-md-medium">
              {tour.description ? tour.description : ""}
            </span>
          </div>

          <div className="endtime">
            <div className="card-price">
              <h6 className="heading-6 neutral-1000">
                {tour.price > 0 ? `$ ${tour.price}` : ""}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

TourCard3.propTypes = {
  tour: PropTypes.shape({
    image: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.string,
    number_persons: PropTypes.number,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    time: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};
