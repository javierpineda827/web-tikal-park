import { Link } from "react-router-dom";
import IconHeartOutline from "../../components/elements/IconHeartOutline";
import IconArrowRightSingle from "../../components/elements/IconArrowRightSingle";

const info = {
  disclaimer:
    "Este paquete representa el mejor valor por tu dinero e incluye una noche de alojamiento, un tour guiado con un guía profesional empezando desde el lobby de su hotel a las 10 a.m. y almuerzo (sin bebidas) y todos los impuestos aplicables. Los paquetes anteriores NO incluyen la entrada al parque.",
  hotelData: [
    {
      image: "/imgs/page/hotel/room1-Jungle-Lodge-StandardSingleKingBed.jpg",
      alt: "StandardSingleKingBed",
      rating: 4.96,
      title: "Sencilla Standard",
      label: "",
      tags: ["Transporte", "Internet inalámbrico (WiFi)"],
      facilities: ["Tour guiado", "Alimentación", "Caja de Seguridad"],
      description:
        "En el Jungle Lodge deberás tomar un paquete la primera noche y puedes agregar las noches adicionales que desees. Incluye una visita guiada, un almuerzo o comida sin bebidas & desayuno",
      oldPrice: 220.9,
      price: 197.11,
      night: "2 Días, 1 Noche",
      symbolCurrency: "$ ",
      season: "Baja",
    },
    {
      image: "/imgs/page/hotel/room1-Jungle-Lodge-DoubleKingBed.jpg",
      alt: "DoubleKingBed",
      rating: 4.96,
      title: "Doble Standard",
      label: "",
      tags: ["Transporte", "Internet inalámbrico (WiFi)"],
      facilities: ["Tour guiado", "Alimentación", "Caja de Seguridad"],
      description:
        "En el Jungle Lodge deberás tomar un paquete la primera noche y puedes agregar las noches adicionales que desees.",
      oldPrice: 153.5,
      price: 140.61,
      night: "2 Días, 1 Noche",
      symbolCurrency: "$ ",
      season: "Baja",
    },
    {
      image: "/imgs/page/hotel/room1-Jungle-Lodge-TripleKingBed.jpg",
      alt: "TripleKingBed",
      rating: 4.96,
      title: "Triple Standard",
      label: "",
      tags: ["Transporte", "Internet inalámbrico (WiFi)"],
      facilities: ["Tour guiado", "Alimentación", "Caja de Seguridad"],
      description:
        "En el Jungle Lodge deberás tomar un paquete la primera noche y puedes agregar las noches adicionales que desees.",
      oldPrice: 131.03,
      price: 121.12,
      night: "2 Días, 1 Noche",
      symbolCurrency: "$ ",
      season: "Baja",
    },
    {
      image: "/imgs/page/hotel/room1-Jungle-Lodge-QuadKingBed.jpg",
      alt: "QuadKingBed",
      rating: 4.96,
      title: "Cuadruple Standard",
      label: "",
      tags: ["Transporte", "Internet inalámbrico (WiFi)"],
      facilities: ["Tour guiado", "Alimentación", "Caja de Seguridad"],
      description:
        "En el Jungle Lodge deberás tomar un paquete la primera noche y puedes agregar las noches adicionales que desees.",
      oldPrice: 119.3,
      price: 111.37,
      night: "2 Días, 1 Noche",
      symbolCurrency: "$ ",
      season: "Baja",
    },
    {
      image: "/imgs/page/hotel/room1-Jungle-Lodge-SinglePremium.jpg",
      alt: "SinglePremium",
      rating: 4.96,
      title: "Sencilla Premium",
      label: "",
      tags: ["Transporte", "Internet inalámbrico (WiFi)"],
      facilities: ["Tour guiado", "Alimentación", "Caja de Seguridad"],
      description:
        "En el Jungle Lodge deberás tomar un paquete la primera noche y puedes agregar las noches adicionales que desees.",
      oldPrice: 230.82,
      price: 207.03,
      night: "2 Días, 1 Noche",
      symbolCurrency: "$ ",
      season: "Baja",
    },
    {
      image: "/imgs/page/hotel/room1-Jungle-Lodge-DoublePremium.jpg",
      alt: "DoublePremium",
      rating: 4.96,
      title: "Doble Premium",
      label: "",
      tags: ["Transporte", "Internet inalámbrico (WiFi)"],
      facilities: ["Tour guiado", "Alimentación", "Caja de Seguridad"],
      description:
        "En el Jungle Lodge deberás tomar un paquete la primera noche y puedes agregar las noches adicionales que desees.",
      oldPrice: 158.45,
      price: 145.57,
      night: "2 Días, 1 Noche",
      symbolCurrency: "$ ",
      season: "Baja",
    },
    {
      image: "/imgs/page/hotel/room1-Jungle-Lodge-TriplePremium.jpg",
      alt: "TriplePremium",
      rating: 4.96,
      title: "Triple Premium",
      label: "",
      tags: ["Transporte", "Internet inalámbrico (WiFi)"],
      facilities: ["Tour guiado", "Alimentación", "Caja de Seguridad"],
      description:
        "En el Jungle Lodge deberás tomar un paquete la primera noche y puedes agregar las noches adicionales que desees.",
      oldPrice: 134.33,
      price: 124.42,
      night: "2 Días, 1 Noche",
      symbolCurrency: "$ ",
      season: "Baja",
    },
    {
      image: "/imgs/page/hotel/room1-Jungle-Lodge-QuadPremium.jpg",
      alt: "QuadPremium",
      rating: 4.96,
      title: "Cuadruple Premium",
      label: "",
      tags: ["Transporte", "Internet inalámbrico (WiFi)"],
      facilities: ["Tour guiado", "Alimentación", "Caja de Seguridad"],
      description:
        "En el Jungle Lodge deberás tomar un paquete la primera noche y puedes agregar las noches adicionales que desees.",
      oldPrice: 121.78,
      price: 113.85,
      night: "2 Días, 1 Noche",
      symbolCurrency: "$ ",
      season: "Baja",
    },
    {
      image: "/imgs/page/hotel/room1-Jungle-Lodge-SingleJuniorSuite.jpg",
      alt: "SingleJuniorSuite",
      rating: 4.96,
      title: "Sencilla Junior Suite",
      label: "",
      tags: ["Transporte", "Internet inalámbrico (WiFi)"],
      facilities: ["Tour guiado", "Alimentación", "Caja de Seguridad"],
      description:
        "En el Jungle Lodge deberás tomar un paquete la primera noche y puedes agregar las noches adicionales que desees.",
      oldPrice: 276.41,
      price: 246.68,
      night: "2 Días, 1 Noche",
      symbolCurrency: "$ ",
      season: "Baja",
    },
    {
      image: "/imgs/page/hotel/room1-Jungle-Lodge-DoublePremium.jpg",
      alt: "DoubleJuniorSuite",
      rating: 4.96,
      title: "Doble Junior Suite",
      label: "",
      tags: ["Transporte", "Internet inalámbrico (WiFi)"],
      facilities: ["Tour guiado", "Alimentación", "Caja de Seguridad"],
      description:
        "En el Jungle Lodge deberás tomar un paquete la primera noche y puedes agregar las noches adicionales que desees.",
      oldPrice: 182.24,
      price: 167.38,
      night: "2 Días, 1 Noche",
      symbolCurrency: "$ ",
      season: "Baja",
    },
    {
      image: "/imgs/page/hotel/room1-Jungle-Lodge-TripleKingBed.jpg",
      alt: "TripleJuniorSuite",
      rating: 4.96,
      title: "Triple Junior Suite",
      label: "",
      tags: ["Transporte", "Internet inalámbrico (WiFi)"],
      facilities: ["Tour guiado", "Alimentación", "Caja de Seguridad"],
      description:
        "En el Jungle Lodge deberás tomar un paquete la primera noche y puedes agregar las noches adicionales que desees.",
      oldPrice: 150.99,
      price: 140.94,
      night: "2 Días, 1 Noche",
      symbolCurrency: "$ ",
      season: "Baja",
    },
    {
      image: "/imgs/page/hotel/room1-Jungle-Lodge-TripleKingBed.jpg",
      alt: "QuadJuniorSuite",
      rating: 4.96,
      title: "Cuadruple Junior Suite",
      label: "",
      tags: ["Transporte", "Internet inalámbrico (WiFi)"],
      facilities: ["Tour guiado", "Alimentación", "Caja de Seguridad"],
      description:
        "En el Jungle Lodge deberás tomar un paquete la primera noche y puedes agregar las noches adicionales que desees.",
      oldPrice: 135.16,
      price: 127.73,
      night: "2 Días, 1 Noche",
      symbolCurrency: "$ ",
      season: "Baja",
    },
    {
      image: "/imgs/page/hotel/room1-Jungle-Lodge-KidsUnder10.jpg",
      alt: "KidsUnder10",
      rating: 4.96,
      title: "Niños menores de 10 años",
      label: "",
      tags: ["Transporte", "Internet inalámbrico (WiFi)"],
      facilities: ["Tour guiado", "Alimentación", "Caja de Seguridad"],
      description:
        "En el Jungle Lodge deberás tomar un paquete la primera noche y puedes agregar las noches adicionales que desees.",
      oldPrice: 101.73,
      price: 101.73,
      night: "2 Días, 1 Noche",
      symbolCurrency: "$ ",
      season: "Baja",
    },
    {
      image: "/imgs/page/hotel/room1-Jungle-Lodge-KidsUnder10.jpg",
      alt: "KidsUnder2",
      rating: 4.96,
      title: "Niños menores de 2 años",
      label: "",
      tags: ["Transporte", "Internet inalámbrico (WiFi)"],
      facilities: ["Tour guiado", "Alimentación", "Caja de Seguridad"],
      description:
        "En el Jungle Lodge deberás tomar un paquete la primera noche y puedes agregar las noches adicionales que desees.",
      oldPrice: "Gratis",
      price: "Gratis",
      night: "2 Días, 1 Noche",
      symbolCurrency: "$ ",
      season: "Baja",
    },
  ],
};

function HotelCard() {
  const button_text = "";
  const season = "Temporada:";

  return (
    <div className="card-container">
      {info.hotelData &&
        info.hotelData.map((hotel, index) => (
          <div key={index} className="card-flight card-hotel background-card">
            <div className="card-image">
              <Link className="wish" to="#">
                <IconHeartOutline />
              </Link>
              <Link to="/room-detail">
                <img src={hotel.image} alt={hotel.alt} />
              </Link>
            </div>
            <div className="card-info">
              <label className="sale-lbl">{hotel.label}</label>
              <div className="tour-rate">
                <div className="rate-element">
                  <span className="rating fw-semibold">
                    {season}
                    <span className="text-sm-medium neutral-500 fw-bold">
                      {hotel.season}
                    </span>
                  </span>
                </div>
              </div>
              <div className="card-title">
                <Link className="heading-6 neutral-1000" to="/room-detail">
                  {hotel.title}
                </Link>
              </div>
              <div className="card-hotel-2-col">
                <div className="card-program">
                  <div className="card-tags">
                    {hotel.tags.map((tag, tagIndex) => (
                      <Link
                        key={tagIndex}
                        className="btn btn-tag-border"
                        to="#"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                  <div className="card-facilities">
                    <ul className="list-tick-green">
                      {hotel.facilities.map((facility, facilityIndex) => (
                        <li key={facilityIndex}>{facility}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="card-hotel-desc">
                    <span className="text-md-medium neutral-500">
                      {hotel.description}
                    </span>
                  </div>
                </div>
                <div className="card-hotel-price">
                  <div className="box-hotel-price">
                    <p className="price-throught text-20-medium neutral-500">
                      {hotel.symbolCurrency} {hotel.oldPrice}
                    </p>
                    <h4 className="price-main neutral-1000">${hotel.price}</h4>
                    <p className="text-md-medium neutral-500">{hotel.night}</p>
                    <div className="card-button">
                      <Link className="btn btn-gray" to="#">
                        {button_text}
                        <IconArrowRightSingle />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      <div className="container mx-auto">
        <p className="fw-semibold">{info.disclaimer}</p>
      </div>
    </div>
  );
}

export default HotelCard;
