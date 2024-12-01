import Cards from "./Cards";
import Fakepage from "./Fakepage";
import Nav from "./Nav";

export default function Home() {
  return (
    <div className="min-h-screen w-screen bg-[#201d20]">
      <Nav />
      <Cards />
      {/* <Fakepage /> */}
    </div>
  );
}
