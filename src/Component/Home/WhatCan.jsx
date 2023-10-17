const WhatCan = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-black text-white">
        <div className="hero-content flex-col lg:flex-row-reverse lg:gap-x-24">
          <img
            src="https://brand.Brex.com/transform/d2f2341f-92ea-4983-a67d-417a52921900/Closed-loop-dark?io=transform:fit,width:1400,height:1400&quality=95"
            className="lg:max-w-xl rounded-lg shadow-2xl"
          />
          <div className="hero-content lg:text-start text-center text-neutral-content ">
            <div className="max-w-md ">
              <h1 className="mb-5 text-4xl font-bold">
                See what AUTOBOM AI can do for you.
              </h1>
              <p className="mb-12 text-xl font-bold leading-9">
                Learn how our spend platform can increase the strategic impact
                of your finance team and future-proof your company.
              </p>
              <a href="mailto:hariish@autobom.ai " className="mt-8">
                <button className="btn bg-orange-500 text-white  hover:text-black hover:bg-orange-300 border-0">
                  Request Demo
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatCan;
