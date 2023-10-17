import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 shadow-2xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Link to="/dashboard">
            <button className="btn bg-orange-500 text-white  hover:text-black hover:bg-orange-300 border-0">
              Dashboard
            </button>
          </Link>
          <div className=" lg:text-start text-center  lg:absolute left-10 text-black">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Meet Autobom Ai</h1>
              <p className="mb-12 text-xl font-bold leading-9">
                Revolutionization Bom Optimizing with Ai power. Reducing cost,
                lead times and optimizing engineering.
              </p>
              <a href="mailto:hariish@autobom.ai ">
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
