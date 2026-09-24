import type { Itech } from "../../types/tech";

interface AddedStackProps {
  techlist: Itech[];
}

const AddedStack = ({ techlist }: AddedStackProps) => {
  console.log(techlist, "techlist from added stack");

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Explore Technologies
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {techlist.map((tech) => {
          return (
            <div
              key={tech.id}
              className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-shadow"
            >
              {/* Top */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-lg bg-gray-100 flex items-center justify-center">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-7 h-7 object-contain"
                    />
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {tech.name}
                    </h3>
                  </div>
                </div>

                <span className="text-[10px] bg-pink-100 text-pink-600 px-2 py-1 rounded-full">
                  {tech.badge}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs text-gray-600 leading-5 mt-4">
                {tech.description}
              </p>

              {/* Bottom Info */}
              <div className="flex items-center justify-between mt-5">
                <span className="text-[9px] bg-gray-100 text-gray-600 px-2 py-1 rounded">
                  {tech.category}
                </span>

                <span className="text-[9px] text-gray-500">
                  {tech.difficulty}
                </span>

                <span className="flex items-center gap-1 text-sm text-gray-700">
                  <span className="text-yellow-400 text-base">★</span>
                  <span>{tech.rating}</span>
                </span>
              </div>

              {/* Button */}
              <button className="w-full mt-4 bg-gray-900 text-white text-xs font-medium py-2 rounded-lg hover:bg-gray-800 transition">
                Add to Stack
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AddedStack;