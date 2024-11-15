import { useTranslation } from "react-i18next";

export const TikalInfo = () => {
  const { t } = useTranslation("AsideInfo");

  return (
    <div className="sidebar-left border-1 background-body">
      <h6 className="text-lg-bold neutral-1000">{t("aside.info.title")}</h6>
      <div className="box-popular-posts box-popular-posts-md">
        <ul>
          <li>
            <div className="card-post">
              <div className="card-info d-flex flex-column gap-2">
                <p className="text-sm neutral-1000">{t("aside.info.hours")}</p>
                <p className="price text-sm-bold neutral-1000">
                  {t("aside.info.cost_entry_text")}
                  <span className="price text-sm neutral-1000">
                    {t("aside.info.cost_entry_price")}
                  </span>
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="card-post">
              <div className="card-info  d-flex flex-column gap-2">
                <span className="text-sm-bold neutral-1000">
                  {t("aside.info.label_contact_us")}
                  <ul className="list-group">
                    <li className="list-group-item">
                      <a
                        className="my-0 py-0"
                        href={`mailto:${t("aside.info.email")}`}
                      >
                        <span className="text-sm-bold text-success">
                          {t("aside.info.email")}
                        </span>
                      </a>
                    </li>
                  </ul>
                </span>

                <span className="text-sm-bold neutral-1000">
                  {t("aside.info.label_phone")}
                  <ul className="list-group">
                    <li className="list-group-item">
                      <a
                        className="my-0 py-0"
                        href={`tel:${t("aside.info.phone_1")}`}
                      >
                        <span className="text-sm-bold text-success">
                          {t("aside.info.phone_1")}
                        </span>
                      </a>
                    </li>
                    <li className="list-group-item">
                      <a
                        className="my-0 py-0"
                        href={`tel:${t("aside.info.phone_2")}`}
                      >
                        <span className="text-sm-bold text-success">
                          {t("aside.info.phone_2")}
                        </span>
                      </a>
                    </li>
                  </ul>
                </span>
                <span className="text-sm-bold neutral-1000">
                  {t("aside.info.label_fax")}
                  <ul className="list-group">
                    <li className="list-group-item">
                      <a
                        className="my-0 py-0"
                        href={`tel:${t("aside.info.fax")}`}
                      >
                        <span className="text-sm-bold text-success">
                          {t("aside.info.fax")}
                        </span>
                      </a>
                    </li>
                  </ul>
                </span>
              </div>
            </div>
          </li>

          <li>
            <div className="card-post">
              <div className="card-info">
                <p className="text-sm-bold neutral-1000">
                  {t("aside.info.label_address_gt")}
                </p>
                <span className="text-xs-bold neutral-1000">
                  <ul className="list-group">
                    <li className="list-group-item">
                      {t("aside.info.company_name")}
                    </li>
                    <li className="list-group-item">
                      {t("aside.info.address")}
                    </li>
                  </ul>
                </span>
              </div>
            </div>
          </li>

          <li>
            <div className="card-post">
              <div className="card-info d-flex flex-column">
                <p className="text-sm-bold neutral-1000">
                  {t("aside.info.label_address_us")}
                  <ul className="list-group">
                    <li className="list-group-item">
                      <span className="text-xs-bold neutral-1000">
                        {t("aside.info.company_name_en")}
                      </span>
                    </li>
                  </ul>
                </p>

                <p className="text-sm-bold neutral-1000">
                  {t("aside.info.label_phone_us")}
                  <ul className="list-group">
                    <li className="list-group-item">
                      <span className="text-xs-bold neutral-1000">
                        {t("aside.info.phone_us")}
                      </span>
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="card-post">
              <div className="card-info">
                <p className="text-xs-bold neutral-1000">
                  {t("aside.info.webmaster")}
                </p>
                <span className="text-sm-bold neutral-1000">
                  {t("aside.info.label_email")}
                  <a href={`"mailto:${t("aside.info.email_2")}"`}>
                    <span className="text-sm-bold ">
                      {t("aside.info.email_2")}
                    </span>
                  </a>
                </span>
                <p className="text-sm-bold neutral-1000">
                  {t("aside.info.comment")}
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="card-post">
              <div className="card-info">
                <p className="text-xs-bold neutral-1000">
                  {t("aside.info.label_visit")}
                </p>
                <span className="text-sm-bold neutral-1000">
                  {t("aside.info.write_to")}
                  <a href="mailto:tikalpark@tikalpark.com">
                    {t("aside.info.email")}
                  </a>
                  {t("aside.info.description")}
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TikalInfo;
