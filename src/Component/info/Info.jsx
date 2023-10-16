import { BsCreditCardFill } from "react-icons/bs";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { MdCardTravel } from "react-icons/md";
import { MdPayments } from "react-icons/md";
const card = <BsCreditCardFill />;
const dollar = <RiMoneyDollarBoxFill />;
const travel = <MdCardTravel />;
const bill = <MdPayments />;
export const manageSpeedInfo = [
  {
    id: 1,
    img: "BsCreditCardFill",
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
