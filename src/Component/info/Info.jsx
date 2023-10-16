import { BsCreditCardFill } from "react-icons/bs";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { MdCardTravel } from "react-icons/md";
import { MdPayments } from "react-icons/md";
import { AiOutlineSafety } from "react-icons/ai";
import { PiChatTextLight } from "react-icons/pi";
import { LiaPuzzlePieceSolid } from "react-icons/lia";
const safe = <AiOutlineSafety size="35px" />;
const text = <PiChatTextLight size="35px" />;
const puzzle = <LiaPuzzlePieceSolid size="35px" />;
const card = <BsCreditCardFill size="30px" />;
const dollar = <RiMoneyDollarBoxFill size="30px" />;
const travel = <MdCardTravel size="30px" />;
const bill = <MdPayments size="30px" />;
export const manageSpeedInfo = [
  {
    id: 1,
    img: card,
    name: "Global corporate cards",
    des: "",
  },
  {
    id: 2,
    img: dollar,
    name: "Expense management",
  },
  {
    id: 3,
    img: travel,
    name: "Travel",
  },
  {
    id: 4,
    img: bill,
    name: "Bill pay",
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
