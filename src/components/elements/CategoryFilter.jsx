import PropTypes from "prop-types";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

export default function CategoryFilter({ data, t }) {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center justify-content-lg-end popular-categories">
        <Dropdown className="dropdown dropdown-filter">
          <Dropdown.Toggle
            className="btn btn-dropdown dropdown-toggle"
            id="dropdownCategory"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {" "}
            <span>{typeof t === "object" && t("categories")}</span>
          </Dropdown.Toggle>
          <Dropdown.Menu
            as="ul"
            className="dropdown-menu dropdown-menu-light"
            aria-labelledby="dropdownCategory"
            style={{ margin: 0 }}
          >
            <li>
              <Link className="dropdown-item" to="#">
                {typeof t === "object" && t("cat1")}
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                {typeof t === "object" && t("cat1")}
              </Link>
            </li>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="dropdown dropdown-filter">
          <Dropdown.Toggle
            className="btn btn-dropdown dropdown-toggle"
            id="dropdownCategory"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {" "}
            <span>Duración</span>
          </Dropdown.Toggle>
          <Dropdown.Menu
            as="ul"
            className="dropdown-menu dropdown-menu-light"
            aria-labelledby="dropdownCategory"
            style={{ margin: 0 }}
          >
            <li>
              <Link className="dropdown-item" to="#">
                2 Días
              </Link>
            </li>
            <li>
              <Link className="dropdown-item active" to="#">
                4 Días
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                8 Días
              </Link>
            </li>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="dropdown dropdown-filter">
          <Dropdown.Toggle
            className="btn btn-dropdown dropdown-toggle"
            id="dropdownCategory"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {" "}
            <span>Revisión / Valoración</span>
          </Dropdown.Toggle>
          <Dropdown.Menu
            as="ul"
            className="dropdown-menu dropdown-menu-light"
            aria-labelledby="dropdownCategory"
            style={{ margin: 0 }}
          >
            <li>
              <Link className="dropdown-item active" to="#">
                Reciente
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Anterior
              </Link>
            </li>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  );
}

CategoryFilter.propTypes = {
  data: PropTypes.object,
  t: PropTypes.object,
};
