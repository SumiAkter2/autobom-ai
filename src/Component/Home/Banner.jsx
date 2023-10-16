const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://brand.brex.com/m/3e314e49da541973/webimage-BrexAi-Homepage-R4-1.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-10"></div>
      <div className="hero-content lg:text-start text-center text-neutral-content lg:absolute left-10">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Meet Autobom Ai</h1>
          <p className="mb-12 text-xl font-bold leading-9">
            Give every employee their own expense assistant and automate manual
            work across cards, expenses, travel, and bill pay.
          </p>
          <button className="btn bg-orange-500 text-white  hover:text-black hover:bg-orange-300 border-0">
            Contact Sales
          </button>
          <button className="btn bg-slate-900 text-white hover:text-black hover:bg-white ml-6  border">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
