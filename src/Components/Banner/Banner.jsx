import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Autoplay, Pagination } from "swiper";
import "./CostomSyle.modules.css";

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <div
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
            className="group bg-opacity-40 text-neutral px-6 py-4 md:left-16 absolute bottom-32 z-10 space-y-5"
          >
            <h2 className="capitalize md:text-4xl text-3xl group-hover:underline text-start">
              rupali bank sureCash and bangladesh shishu <br /> academy made ans
              agreement
            </h2>
            <button className="bg-secondary px-4 py-1 md:ml-32">
              Read More
            </button>
          </div>
          <img
            src="https://anjirliton.com/uploads/banner/1676722927.jpg"
            alt="slider"
          />
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
            className="group bg-opacity-40 text-neutral px-6 py-4 absolute md:left-16 bottom-32 z-10 space-y-5"
          >
            <h2 className="capitalize md:text-4xl text-3xl group-hover:underline md:pr-52">
              DG visit tungi para
            </h2>
            <button className="bg-secondary px-4 py-1 md:ml-44">
              Read More
            </button>
          </div>
          <img
            src="https://anjirliton.com/uploads/banner/1676722944.jpg"
            alt="slider"
          />
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
            className="group bg-opacity-40 text-neutral px-6 py-4 absolute md:left-16 bottom-32 z-10 space-y-5"
          >
            <h2 className="capitalize md:text-4xl text-3xl group-hover:underline md:pr-52">
              tungi para visit
            </h2>
            <button className="bg-secondary px-4 py-1 md:ml-44">
              Read More
            </button>
          </div>
          <img
            src="https://anjirliton.com/uploads/banner/1676789309.jpg"
            alt="slider"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
