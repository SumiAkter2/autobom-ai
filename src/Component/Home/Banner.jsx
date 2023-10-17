import img from "../../assets/dashboard/dashboard.png";

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen shadow-lg lg:my-24 py-24 lg:py-0 px-2">
        <div className="lg:hero-content lg:flex-row-reverse ">
          <div className=" lg:text-start text-center  lg:absolute left-10 text-black ">
            <div className="lg:max-w-md">
              <h1 className="mb-6 lg:text-5xl text-3xl font-bold">
                Meet AUTOBOM Ai
              </h1>
              <p className="my-12 lg:text-xl font-semibold leading-9">
                Revolutionizing BOM Optimization with Ai power. Reducing cost,
                lead times and optimizing engineering.
              </p>
              <a href="mailto:hariish@autobom.ai " className="mt-8">
                <button className="btn bg-orange-500 text-white  hover:text-black hover:bg-orange-300 border-0">
                  Request Demo
                </button>
              </a>
            </div>
          </div>
          <div className="lg:absolute right-10  flex justify-center items-center mt-12 lg:mt-0 px-4">
            <img
              src={img}
              alt="img"
              className="lg:max-w-3xl shadow-lg rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="hero-overlay bg-opacity-10"></div>
    </div>
  );
};

export default Banner;
