import { BsArrowRight } from "react-icons/bs";
import TitleText from "../Shared/TitleText";
const SuperHuman = () => {
  return (
    <div>
      <div>
        <TitleText
          img="https://brand.brex.com/transform/6b6c9dad-82f8-415a-90c0-d37f6559fc66/SuperHuman-Logo-1?io=transform:fit,width:1400,height:249&quality=95"
          alt="door-dash image"
          title=" “I can put everything in Brex budgets. If spending is approaching limits in one area, I know in real time and can talk to leaders about possible tradeoffs.”"
          subtitle=" — Andrew Maher, Head of Finance, Superhuman,
          DoorDash"
          buttonText="  See how DoorDash uses Brex "
        />
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
    </div>
  );
};

export default SuperHuman;
