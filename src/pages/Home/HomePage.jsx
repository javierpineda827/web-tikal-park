import Logos4 from "../../components/elements/Logos4";
import MediaSection from "../../components/elements/MediaSection";
import DefaultLayout from "../../components/layout/DefaultLayout";
import BannerHome from "../../components/sections/BannerHome";
import HowItWork3 from "../../components/sections/HowItWork3";
import Numbers3 from "../../components/sections/Numbers3";
import PopularDestinations6 from "../../components/sections/PopularDestinations6";
import Skyward from "../../components/sections/Skyward";
import Testimonials7 from "../../components/sections/Testimonials";
import SlideBanner1 from "../../sections/SlideBanner1";

export default function HomePage() {
  const images = [
    { src: "/imgs/page/home/bottom-sliders/media1.jpg", alt: "Travila 1" },
    { src: "/imgs/page/home/bottom-sliders/media2.jpg", alt: "Travila 2" },
    { src: "/imgs/page/home/bottom-sliders/media3.jpg", alt: "Travila 3" },
    { src: "/imgs/page/home/bottom-sliders/media4.jpg", alt: "Travila 4" },
    { src: "/imgs/page/home/bottom-sliders/media5.jpg", alt: "Travila 5" },
    { src: "/imgs/page/home/bottom-sliders/media6.jpg", alt: "Travila 6" },
    { src: "/imgs/page/home/bottom-sliders/media7.jpg", alt: "Travila 7" },
  ];

  return (
    <>
      <DefaultLayout headerStyle={1} footerStyle={1}>
        <BannerHome />
        <Logos4 />
        <SlideBanner1 />
        <Numbers3 />
        <div className="mb-30" style={{ height: "12rem" }}></div>
        <PopularDestinations6 />
        <Skyward />
        {/* <HowItWork3 /> */}
        {/* <Testimonials7 /> */}
        <div className="mb-30" style={{ height: "12rem" }}></div>
        <MediaSection images={images} />
      </DefaultLayout>
    </>
  );
}
