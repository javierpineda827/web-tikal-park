import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import i18n from "i18next";

export default function LanguageDropdown() {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Dropdown className="d-none d-xxl-inline-block box-dropdown-cart align-middle mr-15">
      <Dropdown.Toggle
        as="span"
        className="text-14-medium icon-list icon-account icon-lang"
      >
        <span className="text-14-medium arrow-down">
          {i18n.language.toUpperCase()}
        </span>
      </Dropdown.Toggle>
      <Dropdown.Menu
        className="dropdown-account"
        style={{ visibility: "visible" }}
      >
        <ul>
          <li>
            <Link
              className="text-sm-medium"
              onClick={() => changeLanguage("es")}
            >
              Español
            </Link>
          </li>
          <li>
            <Link
              className="text-sm-medium"
              onClick={() => changeLanguage("en")}
            >
              English
            </Link>
          </li>
          <li>
            <Link
              className="text-sm-medium"
              onClick={() => changeLanguage("fr")}
            >
              French
            </Link>
          </li>
        </ul>
      </Dropdown.Menu>
    </Dropdown>
  );
}
