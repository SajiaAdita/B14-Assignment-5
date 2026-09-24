import { use } from "react";
import type { Itech } from "../../types/tech";
import AddedStack from "./AddedStack";

interface TechlistProps {
  techlistPromise: Promise<Itech[]>;
}

const Techlist = ({ techlistPromise }: TechlistProps) => {
  const techlist = use(techlistPromise);

  console.log(techlist);

  return (
    <div>
        
      <AddedStack techlist={techlist} />
    </div>
  );
};

export default Techlist;