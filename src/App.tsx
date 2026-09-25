import { Suspense, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Nav from "./components/Nav";
import Banner from "./components/banner";
import Techlist from "./components/techlist/Techlist";
import type { Itech } from "./types/tech";
import Footer from "./components/Footer";

const techlistFetch = async (): Promise<Itech[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();

  return data;
};

function App() {
  const techlistPromise = techlistFetch();

  const [stack, setStack] = useState<Itech[]>([]);

  const handleAddToStack = (tech: Itech) => {
    const isAlreadyAdded = stack.some((item) => item.id === tech.id);

    if (isAlreadyAdded) {
      toast.warning("Already added!");
      return;
    }

    setStack((previousStack) => [...previousStack, tech]);

    toast.success("Technology added!");
  };

  return (
    <>
      <Nav />

      <Banner />

      <Suspense fallback={<h2>Loading......</h2>}>
        <Techlist
          techlistPromise={techlistPromise}
          stack={stack}
          handleAddToStack={handleAddToStack}
          setStack={setStack}
        />
      </Suspense>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;