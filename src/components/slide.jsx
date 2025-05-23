import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const Slide = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>Loading slide...</div>;
  }

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mt-5 mySwiper"
    >
      {data.map((quiz) => (
        <SwiperSlide key={quiz.id}>
          <Link to={`/quiz/${quiz.id}`}>
            <img src={quiz.img} alt={quiz.title} className="mx-auto h-96" />
            <h3 className="text-center text-xl font-semibold mt-4">
              {quiz.title}
            </h3>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slide;
