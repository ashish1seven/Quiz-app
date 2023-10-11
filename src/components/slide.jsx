import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Slide= () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mt-5 mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://cdn.geekboots.com/geek/javascript-meta-1652702081069.jpg"
            alt=""
            className="mx-auto h-96"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/11/what-is-html-3.jpg"
            alt=""
            className="mx-auto h-96"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/777302/0811-Eight_CSS_Tips_for_Advanced_Layouts_and_Effects_Dan_Social-82cd65719778f3f76676cb2f04119cce.png"
            alt=""
            className="mx-auto h-96"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/1279225/regular_1708x683_0521-react-redux-and-immutablejs-Waldek_Newsletter-993b50f4ae56e9ee6e024a309c23a6c4.png"
            alt=""
            className="mx-auto h-96"
          />
        </SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slide;