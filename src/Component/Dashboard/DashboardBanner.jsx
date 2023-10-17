import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
const DashboardBanner = () => {
  return (
    <div className="px-4">
      <h1 className="lg:text-4xl text-3xl font-bold my-4">
        Welcome Back Maggie
      </h1>
      <p className="text-semibold">
        How can we make your experience better today !
      </p>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 px-6">
        <div className="card lg:w-96 bg-blue-300 text-black mt-12">
          <div className="card-body">
            <h2 className="card-title">Today savings per BOM</h2>
            <h1 className="mt-4 lg:text-4xl text-3xl font-bold">$29.57</h1>
            <p>
              Initial BOM cost: <span className="text-green-700">$79.30</span>
            </p>
            <div className="card-actions justify-end absolute right-2">
              <button className=" btn-circle ">
                <BsFillArrowUpRightCircleFill size="35px" />
              </button>
            </div>
          </div>
        </div>{" "}
        <div className="card lg:w-96 bg-slate-400 text-black mt-12">
          <div className="card-body">
            <h2 className="card-title">Total components optimized</h2>
            <h1 className="mt-4 lg:text-4xl text-3xl font-bold">24</h1>
            <p>
              BOM components:{" "}
              <span className="text-gray-700">550 components</span>
            </p>
            <div className="card-actions justify-end absolute right-2">
              <button className=" btn-circle ">
                <BsFillArrowUpRightCircleFill size="35px" />
              </button>
            </div>
          </div>
        </div>{" "}
        <div className="card lg:w-96 bg-slate-300 text-black mt-12">
          <div className="card-body">
            <h2 className="card-title">Total component lead times</h2>
            <h1 className="mt-4 lg:text-4xl text-3xl font-bold">23</h1>
            <p>
              Previous total lead time:{" "}
              <span className="text-gray-600">69 weeks</span>
            </p>
            <div className="card-actions justify-end absolute right-2">
              <button className=" btn-circle ">
                <BsFillArrowUpRightCircleFill size="35px" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardBanner;
