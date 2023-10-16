import { enterpriseInfo } from "../info/Info";

const Enterprise = () => {
  return (
    <div>
      <h1 className="lg:text-5xl font-bold text-3xl text-center mb-12">
        Enterprise-grade platform.
      </h1>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 mx-32 my-12 ">
        {enterpriseInfo.map((info) => (
          <div key={info.id}>
            <div className="text-center  ">
              <div className="flex justify-center items-center ">
                <p>{info.img}</p>
              </div>
              <h1 className="text-2xl font-bold my-4">{info.name} </h1>
              <div className="font-semibold mt-4 gap-6">
                <p>{info.des1} </p>
                <p>{info.des2} </p>
                <p>{info.des3} </p>
                <p>{info.des4} </p>
                <p>{info.des5} </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Enterprise;
