import { BsArrowRight } from "react-icons/bs";
const Experience = () => {
  return (
    <div>
      <div className="text-center font-semibold">
        <h1 className="lg:text-5xl text-3xl font-bold my-4">
          Go from reactive to proactive.
        </h1>
        <p className="text-xl w-1/2 mx-auto mt-4 leading-7">
          Every Brex product runs on our unified Empower platform — built from
          the ground up to help you automate manual expense work and stop
          unwanted spend before it happens.
        </p>
      </div>

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row justify-around">
          <img
            src="https://brand.brex.com/transform/094238b6-b923-41aa-af5f-6d4c862e42eb/Homepage-AI-Update?io=transform:fit,width:1400,height:943&quality=95"
            className="max-w-lg rounded-lg shadow-2xl"
          />
          <div className="w-1/3 ">
            <h1 className="text-4xl font-bold ">
              An experience so easy, employees actually comply.
            </h1>
            <p className="py-6 text-xl font-semibold">
              When it’s easy to comply, employees do it. Brex makes it almost
              effortless with unrivaled automation and Brex Assistant, an AI
              agent that performs expense tasks and answers employee questions —
              so your finance team won’t have to. Finally, you can close the
              books in hours, not weeks.
            </p>
            <button className="pointer text-orange-500 font-bold flex items-center ">
              Boost compliance with Brex AI
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

export default Experience;
