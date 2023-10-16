import Banner from "./Banner";
import DoorDash from "./DoorDash";
import Experience from "./Experience";
import ManageSpend from "./ManageSpend/ManageSpend";
import SeatGeek from "./SeatGeek";
import SuperHuman from "./SuperHuman";
import WhatCan from "./WhatCan";

const Home = () => {
  return (
    <div>
      <Banner />
      <ManageSpend />
      <Experience />
      <DoorDash />
      <SuperHuman />
      <SeatGeek />
      <WhatCan/>
    </div>
  );
};

export default Home;
