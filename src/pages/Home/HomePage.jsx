import Logos4 from "../../components/elements/Logos4";
import DefaultLayout from "../../components/layout/DefaultLayout";
import BannerHome from "../../components/sections/BannerHome";
import HowItWork3 from "../../components/sections/HowItWork3";
import Numbers3 from "../../components/sections/Numbers3";
import PopularDestinations6 from "../../components/sections/PopularDestinations6";
import Skyward from "../../components/sections/Skyward";
import Testimonials7 from "../../components/sections/Testimonials";
import SlideBanner1 from "../../sections/SlideBanner1";

export default function HomePage() {
  return (
    <>
      <DefaultLayout headerStyle={1} footerStyle={1}>
        <BannerHome />
        <Logos4 />
        <SlideBanner1 />
        <Numbers3 />
        <PopularDestinations6 />
        <Skyward />
        <HowItWork3 />
        <Testimonials7 />
      </DefaultLayout>
    </>
  );
}
