import { BsArrowRight } from "react-icons/bs";

const TitleText = ({ img, title, subtitle,  buttonText }) => {
  return (
    <div>
      <div className="text-center">
        <img className="w-52 mx-auto mb-12" src={img} />

        <h1 className="text-5xl leading-20  w-3/5 mx-auto my-4 ">
          <blockquote>{title}</blockquote>
        </h1>
        <p className="font-semibold my-8">{subtitle}</p>
        <div className="flex items-center justify-center mt-12">
          <button className="pointer text-orange-500 font-semibold flex items-center justify-center ">
            {buttonText}
            <BsArrowRight
              size="25px"
              color="rgb(249 115 22)"
              className="ml-2 "
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TitleText;
