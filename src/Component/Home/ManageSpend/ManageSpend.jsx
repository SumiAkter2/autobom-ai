import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import { BsFillCheckCircleFill } from "react-icons/bs";
import { Autoplay } from "swiper/modules";
import { manageSpeedInfo } from "../../info/Info";
// import { logoImage } from "../../info/Info";
import "./ManageSpeed.css";
const ManageSpend = () => {
  return (
    <div>
      <Swiper
        loop={true}
        autoplay={{
          delay: 0,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        // slidesPerView={3}
        speed={12000}
        modules={[Autoplay]}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 3,
            spaceBetween: 150,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 4,
            spaceBetween: 180,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        className="my-12 sample-slider"
      >
        <SwiperSlide>
          <img
            className="w-32"
            src="https://brand.brex.com/transform/6896e0a6-f450-4920-a60c-cdc6021ac1e2/airbnb_logo_color?io=transform:fit,width:192,height:64&quality=95"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-40"
            src="https://brand.brex.com/transform/b9e84267-da80-4adf-a495-004834216963/ycombinator_logo_color?io=transform:fit,width:332,height:64&quality=95"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-40"
            src="https://brand.brex.com/transform/12b07fe8-7174-4ead-a463-fc1324e1db33/doordash-logo-1?io=transform:fit,width:438,height:52&quality=95"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-24"
            src="https://brand.brex.com/transform/1f8e0aaf-2bda-402e-9f64-49ec6103c649/scale_logo_color?io=transform:fit,width:198,height:64&quality=95"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-32"
            src="https://brand.brex.com/transform/73da92e4-375b-4488-906c-456879499a6a/airtable_logo_color?io=transform:fit,width:240,height:64&quality=95"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-36"
            src="https://brand.brex.com/transform/6862adb9-c752-43ce-9058-71fe7b60c4ad/whatnot?io=transform:fit,width:364,height:64&quality=95"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-36"
            src="https://brand.brex.com/transform/01b11bea-86eb-4b84-9c57-92280d34d45c/classpass_logo_color?io=transform:fit,width:328,height:64&quality=95"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-24"
            src="https://brand.brex.com/transform/2d116611-2537-47cc-9e1e-f1aa69e044e7/deel_logo_color?io=transform:fit,width:176,height:64&quality=95"
            alt=""
          />
        </SwiperSlide>
      </Swiper>

      <div className="text-center ">
        <h1 className="lg:text-5xl text-3xl font-bold my-4 ">
          The smartest way to manage spend.
        </h1>
        <p className="text-xl">
          Automate compliance, close the books faster, and keep everyone on
          budget in real time, worldwide.
        </p>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6 my-12">
        {manageSpeedInfo.map((info) => (
          <div key={info.id}>
            <div className="cards">
              <img src={info.img} alt="logo" />
              <h1>{info.name}</h1>
              <button>Learn more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageSpend;
