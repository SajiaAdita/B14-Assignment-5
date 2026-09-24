import bannerImage from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="max-w-6xl mx-auto mt-6 px-4">
      <div
        className="min-h-[235px] px-8 py-6 flex items-center justify-between overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(#ffd6d6 1px, transparent 1px), linear-gradient(90deg, #ffd6d6 1px, transparent 1px)",
          backgroundSize: "7px 7px",
        }}
      >
        
        <div className="w-[55%]">
          <h1 className="text-[34px] leading-[0.95] font-bold text-gray-900">
            Build Your Ideal
            <br />

            <span className="text-brand-gradient">
              Development Stack
            </span>
          </h1>

          <p className="mt-4 max-w-[430px] text-[12px] leading-5 text-gray-600">
            Explore frontend, backend, database, and tooling options,
            <br />
            compare them side by side, and put together the stack that fits your
            <br />
            next project.
          </p>

          <div className="flex items-center gap-6 mt-6">
            <button className="brand-gradient text-white text-[10px] px-3 py-2 rounded-md">
              Explore Technologies
            </button>

            <button className="text-gray-600 text-[10px] hover:text-purple-600">
              Learn More
            </button>
          </div>
        </div>

        
        <div className="w-[40%] flex justify-center">
          <img
            src={bannerImage}
            alt="Development Stack"
            className="w-[220px] h-[220px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;