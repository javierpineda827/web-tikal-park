import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

function Step({ data }) {
  return (
    <>
      <li>
        <div className="step-no">
          {" "}
          <span>{data.number}</span>
        </div>
        <div className="step-info">
          <p className="text-xl-bold neutral-1000">{data.title}</p>
          <p className="text-sm-medium neutral-500">{data.text}</p>
        </div>
      </li>
    </>
  );
}

export default function HowItWork3() {
  const { t } = useTranslation("howitwork3");
  const steps = t("how_it_work.steps", { returnObjects: true });

  return (
    <>
      <section className="section-box box-how-it-work-3 background-body">
        <div className="container">
          <div className="box-how-it-work-inner background-3">
            <h3 className="neutral-1000 wow fadeInUp">
              {t("how_it_work.title")}
            </h3>
            <p className="text-xl-medium neutral-500 mb-30 wow fadeInUp">
              {t("how_it_work.text")}
            </p>
            <div className="row">
              <div className="col-lg-10">
                <ul className="list-steps list-steps-2-col wow fadeInUp">
                  {typeof steps === "object" &&
                    steps.map((step, index) => (
                      <Step data={step} key={index} />
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
Step.propTypes = {
  data: PropTypes.shape({
    number: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
};
