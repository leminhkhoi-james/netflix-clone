import Carousel from "../../components/carousel";
import Header from "../../components/header";

function HomePage() {
  return (
    <div>
      <Header />
      <Carousel numberOfSlide={1} category={"Trending"} />
      <Carousel
        numberOfSlide={6}
        category={"Horror"}
        isUseNavigation={true}
        title="Horror movie"
      />
      <Carousel numberOfSlide={6} category={"Comedy"} isUseNavigation={true} />
    </div>
  );
}

export default HomePage;
