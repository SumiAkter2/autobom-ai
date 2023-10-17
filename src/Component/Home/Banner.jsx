import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-gray-300 shadow-lg">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <div className="lg:absolute right-10  flex justify-center items-center">
            <MdDashboard size="100px" color="orangered" className="w-32" />
            <Link to="/dashboard">
              <h1 className=" font-bold text-2xl">
                Let&lsquo;s check Dashboard
              </h1>
              <button className=" mt-2 text-xl underline  rounded-full  text-orange-500 font-bold">
                Dashboard
              </button>
            </Link>
          </div>
          <div className=" lg:text-start text-center  lg:absolute left-10 text-black">
            <div className="max-w-lg">
              <h1 className="mb-6 text-5xl font-bold text-orange-500">
                Meet Autobom Ai
              </h1>
              <p className="my-12 text-xl font-bold leading-9">
                Revolutionization BOM Optimizing with Ai power. Reducing cost,
                lead times and optimizing engineering.
              </p>
              <a href="mailto:hariish@autobom.ai " className="mt-8">
                <button className="btn bg-orange-500 text-white  hover:text-black hover:bg-orange-300 border-0">
                  Request Demo
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-overlay bg-opacity-10"></div>
    </div>
  );
};

export default Banner;
