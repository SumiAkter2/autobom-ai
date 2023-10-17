import { BsFillClockFill } from "react-icons/bs";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { MdFindInPage } from "react-icons/md";
import { MdHighQuality } from "react-icons/md";

import logo1 from "../../assets/dashboard/app.png";
import logo2 from "../../assets/dashboard/bmw.png";
import logo3 from "../../assets/dashboard/t.png";
import logo4 from "../../assets/dashboard/gm.png";

const clock = <BsFillClockFill size="30px" />;
const dollar = <RiMoneyDollarBoxFill size="30px" />;
const travel = <MdFindInPage size="30px" />;
const quality = <MdHighQuality size="30px" />;
export const manageSpeedInfo = [
  {
    id: 1,
    img: clock,
    name: "Cut Lead Times",
    des: "Component IQ doesn't just find alternatives; it optimizes your BOM for cost- efficiency  and faster lead times. It's like having an entire team of experts who know the electronic component market inside out.",
  },
  {
    id: 2,
    img: dollar,
    name: " Slash component costs",
    des: "Once the analysis is complete, you'll receive a detailed report. It outlines the cost savings achieved, how much you can save per component, and the overall impact on your project's budget.",
  },
  {
    id: 3,
    img: travel,
    name: " Find 1:1 alternatives",
    des: "The magic happens here. Component IQ, our AI engine, carefully matches each of your components with 1:1 alternatives that perfectly align with datasheet specifications.",
  },
  {
    id: 4,
    img: quality,
    name: "Ensure higher quality",
    des: "Don't worry; we never compromises on quality. Component IQ ensures that every alternative component it suggests meets the highest quality and specification standards.",
  },
];

export const dashboardInfo = [
  {
    id: 1,
    name: "WSL25122L000FED",
    time: "3 Weeks",
    SupName: "Panasonic",
    des: "Resistors- SMDWSL-2...",
    status: "Completed",
    quantity: "43,514",
  },
  {
    id: 2,
    name: "TNPW060353K6B",
    time: "2 Weeks",
    SupName: "Ohmite",
    des: "Thin Film Resistors-...",
    status: "Completed",
    quantity: "99,930",
  },
  {
    id: 3,
    name: "M24256E-FMH6TG",
    time: "5 Weeks",
    SupName: "Vishay",
    des: "EEPROM 256-Kbit se...",
    status: "Completed",
    quantity: "50,962",
  },
  {
    id: 4,
    name: "WSL2512R0430FEA",
    time: "1 Weeks",
    SupName: "Panasonic",
    des: "FPGA-Configurati...",
    status: "Completed",
    quantity: "59,962",
  },
  {
    id: 5,
    name: "WSL2512R0100FEC",
    time: "2 Weeks",
    SupName: "Panasonic",
    des: "FPGA-Configurati.",
    status: "Completed",
    quantity: "59,962",
  },
];
export const dashboardInfo2 = [
  {
    id: 1,
    img: logo1,
    name: "Gear Shift Acuator",
    des: "550 Components",
  },
  {
    id: 2,
    img: logo2,
    name: "LED Lighting Moudle",
    des: "220 Components",
  },
  {
    id: 3,
    img: logo3,
    name: "MacBook Pro Sensor",
    des: "90 Components",
  },
  {
    id: 4,
    img: logo4,
    name: "LED Lighting Moudle",
    des: "120 Components",
  },
];
