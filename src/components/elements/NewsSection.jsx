import NewsSlider from "./NewsSlider";
import SliderNavigation from "./SliderNavigation";

const NewsSection = () => {
  const slides = [
    {
      label: "Cultural",
      date: "18 Sep 2024",
      time: "6 mins",
      comments: 38,
      title: "Ultimate Travel Planning Guide: 10 Tips for a Seamless Journey",
      author: "Jimmy Dave",
      imgSrc: "/imgs/page/homepage1/news.png",
      alt: "Travila",
      link: "/blog-detail-2",
    },
    {
      label: "Travel",
      date: "18 Sep 2024",
      time: "6 mins",
      comments: 38,
      title: "Top 10 Travel Hacks for Budget-Conscious Adventurers",
      author: "Jimmy Dave",
      imgSrc: "/imgs/page/homepage1/news2.png",
      alt: "Travila",
      link: "/blog-detail-2",
    },
    {
      label: "Discovery",
      date: "18 Sep 2024",
      time: "6 mins",
      comments: 38,
      title: "Discovering Hidden Gems: 10 Off-the-Beaten-Path Travel Tips",
      author: "Jimmy Dave",
      imgSrc: "/imgs/page/homepage1/news3.png",
      alt: "Travila",
      link: "/blog-detail-2",
    },
  ];

  return (
    <section className="section-box box-news box-news-blog-single background-body">
      <div className="container mx-auto">
        <div className="row align-items-end">
          <div className="col-md-9 mb-30 wow fadeInUp">
            <h2 className="neutral-1000">Quizá le interese</h2>
            <p className="text-xl-medium neutral-500">
              Destinos favoritos según las opiniones de los clientes
            </p>
          </div>
          <div className="col-md-3 mb-30 wow fadeInUp">
            <SliderNavigation />
          </div>
        </div>
      </div>
      <div className="container-slider box-swiper-padding">
        <div className="box-list-news">
          <div className="box-swiper mt-30">
            <NewsSlider slides={slides} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
