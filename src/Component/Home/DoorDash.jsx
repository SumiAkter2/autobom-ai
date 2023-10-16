import { BsArrowRight } from "react-icons/bs";
const DoorDash = () => {
  return (
    <div>
      <div className="text-center">
        <img
          className="w-48 mx-auto"
          src="https://brand.brex.com/transform/3391ee40-79e0-42d1-ab37-98cb07700e76/sme-doordash-logo?io=transform:fit,width:1400,height:166&quality=95"
          alt="door-dash image"
        />

        <h1 className="text-5xl leading-20  w-3/5 mx-auto my-4 ">
          <blockquote>
            “We needed a better card and spend management solution to serve
            everyone faster and deliver a better experience for end users.”
          </blockquote>
        </h1>
        <p className="font-semibold my-6">
          — Josh Pickles, Head of Global Strategic Sourcing and Procurement,
          DoorDash
        </p>
        <div className="flex items-center justify-center mt-12">
          <button className="pointer text-orange-500 font-semibold flex items-center justify-center ">
            See how DoorDash uses Brex
            <BsArrowRight
              size="25px"
              color="rgb(249 115 22)"
              className="ml-2 "
            />
          </button>
        </div>
      </div>
      <div className="hero min-h-screen lg:px-12">
        <div className="hero-content flex-col lg:flex-row lg:px-12">
          <img
            src="https://brand.brex.com/transform/783fe59e-5136-499b-a749-18a5c972559c/home-global-updated?io=transform:fit,width:1400,height:1400&quality=95"
            className="max-w-lg rounded-lg "
          />
          <div className="lg:w-2/3 pl-24">
            <h1 className="text-4xl font-bold ">
              Built for global spending and multinational operations.
            </h1>
            <p className="py-6 text-xl font-semibold">
              Operate in every country your employees and partners are in with
              local-currency cards, local billing, and locally funded
              reimbursements. Brex supports more countries and currencies than
              anyone else.
            </p>
            <button className="pointer text-orange-600 font-semibold flex items-center ">
              Explore Global Capabilities
              <BsArrowRight
                size="25px"
                color="rgb(249 115 22)"
                className="ml-2 "
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoorDash;
