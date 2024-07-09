import LoopTape from "./components/LoopTape";
import Content from "./Content";
import LandingPage from "./LandingPage";

export default function Home() {
  return (
    <div className=" bg-bg-color overflow-hidden text-white">
      <LandingPage/>
      <LoopTape/>
      <Content />
    </div>
  );
}
