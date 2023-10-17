import { BsArrowRight } from "react-icons/bs";
const Experience = () => {
  return (
    <div className="mb-12">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row justify-around">
          <img
            src="https://brand.Brex.com/transform/094238b6-b923-41aa-af5f-6d4c862e42eb/Homepage-AI-Update?io=transform:fit,width:1400,height:943&quality=95"
            className="lg:max-w-lg rounded-lg shadow-2xl"
          />
          <div className="lg:w-1/3 text-center lg:text-start">
            <h1 className="lg:text-4xl text-3xl font-bold ">
              An experience so easy, employees actually comply.
            </h1>
            <p className="py-6 text-xl font-semibold">
              When it’s easy to comply, employees do it. AUTOBOM AI makes it
              almost effortless with unrivaled automation and AUTOBOM AI
              Assistant, an AI agent that performs expense tasks and answers
              employee questions — so your finance team won’t have to. Finally,
              you can close the books in hours, not weeks.
            </p>
            <div className="flex items-center justify-center lg:justify-start">
              <button className="pointer text-orange-500 font-bold flex items-center ">
                Boost compliance with AUTOBOM AI AI
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

export default Experience;
