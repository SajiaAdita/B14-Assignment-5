import { Suspense } from "react";
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

  return (
    <>
      <Nav />
      <Banner />

      <Suspense fallback={<h2>Loading......</h2>}>
        <Techlist techlistPromise={techlistPromise} />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;