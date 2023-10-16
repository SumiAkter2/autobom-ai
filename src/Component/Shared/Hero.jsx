import { BsArrowRight } from "react-icons/bs";

const Hero = ({ title, paragraph, buttonText }) => {
  return (
    <div className="lg:w-2/3 lg:px-12">
      <h1 className="text-4xl font-bold ">{title}</h1>
      <p className="py-6 text-xl font-semibold">{paragraph}</p>
      <button className="pointer text-orange-600 font-semibold flex items-center ">
        {buttonText}
        Explore Global Capabilities
        <BsArrowRight size="25px" color="rgb(249 115 22)" className="ml-2 " />
      </button>
    </div>
  );
};

export default Hero;
