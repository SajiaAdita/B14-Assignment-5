import type { Dispatch, SetStateAction } from "react";
import type { Itech } from "../types/tech";

interface SidebarProps {
  stack: Itech[];
  setStack: Dispatch<SetStateAction<Itech[]>>;
}

const Sidebar = ({ stack, setStack }: SidebarProps) => {

  return (
    <div className="border border-gray-200 rounded-xl p-4 mt-6">
    <div className="flex items-center justify-between">
    <div>
          <h3 className="font-semibold text-sm text-gray-900">Your Stack</h3>
          <p className="text-[10px] text-gray-400 mt-1">No technologies selected yet.</p>

        </div>{stack.length > 0 && (<button onClick={() => setStack([])}className="text-[9px] text-red-500 hover:text-red-600">Remove All</button>
             )}
      </div>{stack.length === 0 ? (
        <div className="border border-dashed border-gray-200 rounded-lg mt-4 p-6 text-center">
        <p className="text-[10px] text-gray-400">Your stack is empty.</p>
        </div>
        ) : (<div className="mt-4 space-y-2">
          {stack.map((tech) => 
          (
            <div key={tech.id}
              className="flex items-center justify-between border border-gray-100 rounded-lg p-2">
              <div className="flex items-center gap-2">
                <img src={tech.icon} alt={tech.name}
                  className="w-6 h-6 object-contain"/>

                <div>
                <p className="text-xs text-gray-700">{tech.name}</p>

                  <p className="text-[9px] text-gray-400">{tech.category}</p>
                </div>
                </div>

              <button onClick={() => setStack((previousStack) =>
                    previousStack.filter((item) => item.id !== tech.id)
                  )
                }
                className="text-xs text-gray-400 hover:text-red-500">✕</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;