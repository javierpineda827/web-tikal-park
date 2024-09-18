// import { Link } from "react-router-dom";
// import SearchFilterBottom from "@/components/elements/SearchFilterBottom";

import BannerMainSlider from "../slider/BannerMainSlider";

export default function BannerHome1() {
  return (
    <>
      <section className="section-box box-banner-home2 background-body">
        <div className="container-top">
          <div className="container" />
        </div>
        <div className="container-banner mb-4">
          <BannerMainSlider />
        </div>
        {/* <div className="container">
          <div className="box-search-advance background-card">
            <div className="box-top-search">
              <div className="left-top-search">
                <Link className="category-link btn-click active" to="#">
                  Tours
                </Link>
                <Link className="category-link btn-click" to="#">
                  Hotels
                </Link>
                <Link className="category-link btn-click" to="#">
                  Tickets
                </Link>
                <Link className="category-link btn-click" to="#">
                  Rental
                </Link>
                <Link className="category-link btn-click" to="#">
                  Activities
                </Link>
              </div>
              <div className="right-top-search">
                <Link
                  className="text-sm-medium need-some-help"
                  to="/help-center"
                >
                  Need some help?
                </Link>
              </div>
            </div>
            <SearchFilterBottom />
          </div>
        </div> */}
      </section>
    </>
  );
}
