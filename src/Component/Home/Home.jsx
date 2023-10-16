import Banner from "./Banner";
import DoorDash from "./DoorDash";
import Enterprise from "./Enterprise";
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
      <Enterprise />
      <SeatGeek />
      <WhatCan />
    </div>
  );
};

export default Home;
