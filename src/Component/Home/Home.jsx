import Banner from "./Banner";
import DoorDash from "./DoorDash";
import Experience from "./Experience";
import ManageSpend from "./ManageSpend/ManageSpend";
import SeatGeek from "./SeatGeek";
import SuperHuman from "./SuperHuman";

const Home = () => {
  return (
    <div>
      <Banner />
      <ManageSpend />
      <Experience />
      <DoorDash />
      <SuperHuman />
      <SeatGeek />
    </div>
  );
};

export default Home;
