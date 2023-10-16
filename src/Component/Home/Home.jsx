import Banner from "./Banner";
import DoorDash from "./DoorDash";
import Experience from "./Experience";
import ManageSpend from "./ManageSpend/ManageSpend";

const Home = () => {
  return (
    <div>
      <Banner />
      <ManageSpend />
      <Experience />
      <DoorDash />
    </div>
  );
};

export default Home;
