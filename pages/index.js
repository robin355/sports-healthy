import Banner from "./Banner";
import BestFood from "./BestFood";
import DaysChallange from "./DaysChallange";
import Footer from "./Footer";
import HealthySide from "./HealthySide";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Banner></Banner>
      <HealthySide></HealthySide>
      <DaysChallange></DaysChallange>
      <BestFood></BestFood>
      <Footer></Footer>
    </div>




  )
}
