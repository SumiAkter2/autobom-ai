import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { BsArrowRight } from "react-icons/bs";
import { Autoplay } from "swiper/modules";
import { manageSpeedInfo } from "../../info/Info";
import img1 from "../../../assets/dashboard/Flex_(company)-Logo.wine.png";
import img2 from "../../../assets/dashboard/t.png";
import img3 from "../../../assets/dashboard/gm.png";
import img4 from "../../../assets/dashboard/ford.png";

import "./ManageSpeed.css";
const ManageSpend = () => {
  return (
    <div>
      <Swiper
        autoplay={{
          delay: 0,
        }}
        speed={10000}
        loop={true}
        modules={[Autoplay]}
        breakpoints={{
          320: {
            slidesPerView: 3,
            spaceBetween: 150,
          },

          480: {
            slidesPerView: 3,
            spaceBetween: 30,
          },

          640: {
            slidesPerView: 4,
            spaceBetween: 180,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        className="my-12 sample-slider"
      >
        <SwiperSlide>
          <img className="w-32" src={img1} alt="brand image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-20" src={img2} alt="brand image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-20" src={img3} alt="brand image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-32" src={img4} alt="brand image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-32" src={img1} alt="brand image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-20" src={img2} alt="brand image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-20" src={img3} alt="brand image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-32" src={img4} alt="brand image" />
        </SwiperSlide>
      </Swiper>

      <div className="text-center px-4">
        <h1 className="lg:text-4xl text-3xl font-bold my-4 ">
          The smartest way to optimized Bill of Materials.
        </h1>
        <p className="text-xl lg:w-2/3 mx-auto">
          AutoBOM.AI is your all-in-one solution for BOM optimization. It
          leverages AI to streamline component selection, reduce costs, and
          accelerate time-to-market.
        </p>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6 lg:mx-32 mx-6 my-12">
        {manageSpeedInfo.map((info) => (
          <div key={info.id}>
            <div className="font-semibold p-6 border border-gray-700 lg:h-96 h-80 rounded-lg hover:border-gray-300 relative">
              <div className="mb-4">
                <p>{info.img}</p>
              </div>
              <h1 className="text-2xl font-bold">{info.name}</h1>
              <p className="my-4">{info.des} </p>

              <button className="pointer text-orange-500 font-bold flex items-center absolute bottom-6">
                Learn more
                <BsArrowRight
                  size="25px"
                  color="rgb(249 115 22)"
                  className="ml-2 "
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageSpend;
