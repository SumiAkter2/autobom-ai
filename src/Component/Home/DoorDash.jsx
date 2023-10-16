import TitleText from "../Shared/TitleText";
import { BsArrowRight } from "react-icons/bs";
const DoorDash = () => {
  return (
    <div>
      <TitleText
        img="https://brand.brex.com/transform/3391ee40-79e0-42d1-ab37-98cb07700e76/sme-doordash-logo?io=transform:fit,width:1400,height:166&quality=95"
        alt="door-dash image"
        title=" “We needed a better card and spend management solution to serve
            everyone faster and deliver a better experience for end users.”"
        subtitle="  — Josh Pickles, Head of Global Strategic Sourcing and Procurement,
          DoorDash"
        buttonText="  See how DoorDash uses Brex "
      />
      <div className="hero min-h-screen lg:px-12">
        <div className="hero-content flex-col lg:flex-row lg:px-12">
          <div className="lg:w-2/3 lg:pl-24 text-center lg:text-start">
            <h1 className="lg:text-4xl text-3xl font-bold ">
              Everyone stays on budget
              <br />
              <span>— in real time.</span>
            </h1>
            <p className="py-10 text-xl font-semibold">
              Provision spend proactively and track actuals versus budgets in
              real time for greater visibility and control. AI-powered alerts,
              including for budget anomalies and overages, will help you keep
              everyone accountable and on budget without spending hours in Brex.
            </p>
            <button className="pointer text-orange-600 font-semibold flex items-center ">
              See how budgets work
              <BsArrowRight
                size="25px"
                color="rgb(249 115 22)"
                className="ml-2 "
              />
            </button>
          </div>
          <img
            src="https://brand.brex.com/m/1a00cc3a05c7e895/webimage-Brex-Budgets-NoOrb.jpg"
            className="lg:max-w-2xl rounded-lg "
          />
        </div>
      </div>
    </div>
  );
};

export default DoorDash;
