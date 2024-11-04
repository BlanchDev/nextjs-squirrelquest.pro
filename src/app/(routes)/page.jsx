import "./home.css";
import HomeSection1 from "./components/HomeSection1/HomeSection1";
import HomeSection2 from "./components/HomeSection2/HomeSection2";
import HomeSection3 from "./components/HomeSection3/HomeSection3";

export default function Home() {
  return (
    <div className='home-page'>
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
    </div>
  );
}
