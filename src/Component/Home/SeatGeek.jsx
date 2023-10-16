import { BsArrowRight } from "react-icons/bs";
import { geekInfo } from "../info/Info";
const SeatGeek = () => {
  return (
    <div>
      <div className="text-center">
        <img
          className="w-32 mx-auto mb-12"
          src="https://brand.brex.com/transform/88a6dc06-021b-4b01-b467-c27dd2d45d3a/Seatgeek-Logo?io=transform:fit,width:1400,height:996&quality=95"
        />

        <h1 className="text-5xl leading-20  w-3/5 mx-auto my-4 ">
          “Brex offers a level of enterprise-grade automation, integration, and
          security that far exceeds the 10 other providers we evaluated. It has
          every feature and automation we need and want. We`&apos;`ve made no
          compromises — because Brex can do it.”
        </h1>
        <p className="font-semibold my-8">
          — Teddy Collins, VP Corporate Finance, SeatGeek
        </p>
        <div className="flex items-center justify-center mt-12">
          <button className="pointer text-orange-500 font-semibold flex items-center justify-center ">
            Learn more about SeatGeek`&apos;`s growth
            <BsArrowRight
              size="25px"
              color="rgb(249 115 22)"
              className="ml-2 "
            />
          </button>
        </div>
      </div>
      <img
        src="https://brand.brex.com/transform/42aae456-598f-48d8-bb8a-0bcdd0f16099/AI-homepage-vp-dashboard?io=transform:fit,width:1400,height:478&quality=95"
        alt="image"
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-6  my-12 lg:mx-12">
        {geekInfo.map((info) => (
          <div
            key={info.id}
            className=" hover:border hover:border-gray-400 rounded-md ease-in duration-300"
          >
            <div className="px-4">
              <img src={info.img} alt="image" className="w-36 my-6" />
              <p className="font-semibold">{info.name}</p>
              <button className="pointer text-orange-600 font-semibold flex items-center mt-6">
                Read more
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

export default SeatGeek;
