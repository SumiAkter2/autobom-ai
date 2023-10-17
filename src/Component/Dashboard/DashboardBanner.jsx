import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { dashboardInfo, dashboardInfo2 } from "../info/Info";
const DashboardBanner = () => {
  return (
    <div className="px-4">
      <h1 className="lg:text-4xl text-3xl font-bold my-4">
        Welcome Back Maggie
      </h1>
      <p className="text-semibold">
        How can we make your experience better today !
      </p>
      {/* banner */}
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
        </div>
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
        </div>
        <div className="card lg:w-96 bg-slate-300 text-black mt-12">
          <div className="card-body">
            <h2 className="card-title">Total component lead times</h2>
            <h1 className="mt-4 lg:text-4xl text-3xl font-bold">23</h1>
            <p>
              Previous total lead time:
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

      {/* main content */}

      <div className=" my-12 lg:flex justify-between items-start">
        <div className="overflow-x-auto lg:w-8/12 mx-6">
          <h1 className="text-2xl font-bold  mb-4">Recent BOMs</h1>
          <table className="table table-zebra gap-y-6">
            {/* head */}
            <thead className="bg-slate-300 ">
              <tr className="text-sm ">
                <th>BOM Component</th>
                <th>Lead Time</th>
                <th>Supplier Name</th>
                <th>Description</th>
                <th>Status</th>
                <th>Avl. Quantity </th>
              </tr>
            </thead>
            {dashboardInfo.map((info) => (
              <tbody key={info.id}>
                <tr>
                  <th>{info.name}</th>
                  <td className="text-gray-500">{info.time}</td>
                  <td>{info.SupName}</td>
                  <td className="font-bold">{info.des}</td>
                  <td className=" font-bold text-green-600 ">{info.status}</td>
                  <td>
                    {info.quantity} <br />
                    <span className=" text-green-600 ">IN STOCK</span>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>

        <div className="lg:w-3/12 mx-4">
          <h1 className="text-2xl font-bold text-center lg:mb-4 my-12 lg:my-0">
            Recent AUTOBOM AI Runs
          </h1>
          {dashboardInfo2.map((info) => (
            <div key={info.id}>
              <div className="flex justify-between items-center my-2 bg-slate-300 rounded-full p-2 border hover:border-gray-400 hover:cursor-pointer">
                <img className="w-12" src={info.img} alt="logo" />
                <div>
                  <h1 className="text-xl font-bold">{info.name}</h1>
                  <p className="text-gray-500">{info.des}</p>
                </div>
                <IoIosArrowForward size="25px" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardBanner;
