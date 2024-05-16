// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./index.scss";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import axios from "axios";
import { useEffect, useState } from "react";

//Props
//numberOfSlide

//Carousel => numberOfSlide =1 => hiển thị 1 thằng
//Carousel => numberOfSlide =6 => hiển thị 6 thằng

export default function Carousel({
  numberOfSlide,
  category,
  isUseNavigation = false,
  title,
}) {
  const [movies, setMovies] = useState([]);
  const fetchMovies = async () => {
    const response = await axios.get(
      "https://6627a8d6b625bf088c092f0e.mockapi.io/Movie"
    );

    console.log(response.data);
    setMovies(response.data);
  };

  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <div className={`carousel ${numberOfSlide > 1 ? "multi-item" : ""}`}>
      {/* chỉ show title khi và chỉ khi có title => nếu title===null => ko show title */}
      {title && <h1>{title}</h1>}
      <Swiper
        navigation={isUseNavigation}
        slidesPerView={numberOfSlide}
        spaceBetween={10}
        pagination={true}
        modules={[Pagination, Autoplay, Navigation]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {/* movie => SwiperSlide */}
        {/* cứ mỗi movie trong movies => SwiperSlide*/}
        {movies
          .filter((movie) => movie.category === category)
          .map((movie) => (
            <SwiperSlide key={movie.id}>
              <img src={movie.poster_path} alt="" />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
