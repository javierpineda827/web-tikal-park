import { useTranslation } from "react-i18next";

export default function Numbers3() {
  const { t } = useTranslation("numbers3");
  const list_numbers = t("list_numbers", { returnObjects: true });
  return (
    <>
      <section className="box-section border-1 box-numbers-2 background-body">
        <div className="container mx-auto">
          <div className="list-numbers wow fadeInUp">
            {list_numbers.map((item, index) => (
              <div key={index} className="item-number">
                <div className="d-inline-block text-start">
                  <h3 className="neutral-1000 text-center">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="list-numbers wow fadeInUp">
            {list_numbers.map((item, index) => (
              <div key={index} className="item-number">
                <div className="d-inline-block text-start">
                  <div className="d-inline-block ">
                    <p className="text-lg-bold neutral-500 text-center">
                      {item.text1}
                      {item.text2 && <br />}
                      {item.text2}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
