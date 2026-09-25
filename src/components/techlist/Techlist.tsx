import { use } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { Itech } from "../../types/tech";
import AddedStack from "./AddedStack";

interface TechlistProps {
  techlistPromise: Promise<Itech[]>;
  stack: Itech[];
  handleAddToStack: (tech: Itech) => void;
  setStack: Dispatch<SetStateAction<Itech[]>>;
}

const Techlist = ({
  techlistPromise,
  stack,
  handleAddToStack,
  setStack,
}: TechlistProps) => {
  const techlist = use(techlistPromise);

  console.log(techlist);

  return (
    <div>
      <AddedStack
        techlist={techlist}
        stack={stack}
        handleAddToStack={handleAddToStack}
        setStack={setStack}
      />
    </div>
  );
};

export default Techlist;