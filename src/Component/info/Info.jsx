import { BsFillClockFill } from "react-icons/bs";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { MdFindInPage } from "react-icons/md";
import { MdHighQuality } from "react-icons/md";
import { AiOutlineSafety } from "react-icons/ai";
import { PiChatTextLight } from "react-icons/pi";
import { LiaPuzzlePieceSolid } from "react-icons/lia";
import logo1 from "../../assets/dashboard/app.png";
import logo2 from "../../assets/dashboard/bmw.png";
import logo3 from "../../assets/dashboard/t.png";
import logo4 from "../../assets/dashboard/gm.png";

const safe = <AiOutlineSafety size="35px" />;
const text = <PiChatTextLight size="35px" />;
const puzzle = <LiaPuzzlePieceSolid size="35px" />;
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
export const enterpriseInfo = [
  {
    id: 1,
    img: safe,
    name: "Secure",
    des1: "SOC 2 Certification",
    des2: "PCI DSS Compliant",
    des3: "Multi-factor ID authentication",
    des4: "24/7 global fraud monitoring",
    des5: "Self-serve Security & Privacy Center",
  },
  {
    id: 2,
    img: puzzle,
    name: "Integrated",
    des1: "ERP and accounting",
    des2: "Productivity and HRIS",
    des3: "API automations",
    des4: "Security and dedicated SSO",
    des5: "SSO for Enterprise IdP",
  },
  {
    id: 3,
    img: text,
    name: "Hands-on",
    des1: "Dedicated account specialist",
    des2: "Dedicated customer success manager",
    des3: "Implementation and training support",
    des4: "24/7 customer service",
    des5: "24/7 travel agent support",
  },
];

export const geekInfo = [
  {
    id: 1,
    img: "https://brand.brex.com/transform/b2b42294-a96e-4939-9fa0-7d593a250924/Time_Logo?io=transform:fit,width:1400,height:432&quality=95",
    name: "TIME named Brex to the TIME100 Most Influential Companies list for making an extraordinary impact around the world.",
  },
  {
    id: 2,
    img: "https://brand.brex.com/transform/55dad09c-05d9-41fa-8cbf-2815bac732b5/Bloomberg_Logo?io=transform:fit,width:1400,height:261&quality=95",
    name: "Bloomberg interviews Brex Co-CEO Henrique Dubugras on AI-driven spend management and banking innovation. ",
  },
  {
    id: 3,
    img: "https://brand.brex.com/transform/1d336d33-240f-444d-87ee-38b0569ae177/Fast_Company_logo?io=transform:fit,width:1400,height:199&quality=95",
    name: "Fast Company covers Brex's expansion from corporate cards for startups to enterprise expense management software.",
  },
  {
    id: 4,
    img: "https://brand.brex.com/transform/f1e39cdd-e724-4a14-8b6f-f61958407cfb/CNBC?io=transform:fit,width:1400,height:203&quality=95",
    name: "Brex named #2 on the 2023 top 50 disruptors list of innovative companies advancing breakthrough technology.",
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
