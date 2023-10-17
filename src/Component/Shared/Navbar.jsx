import { HiMenuAlt1 } from "react-icons/hi";
import { Link } from "react-router-dom";
import logo from "../../assets/dashboard/Frame 230.png";
const Navbar = () => {
  const navItem = (
    <>
      <li>
        <Link to="/">
          <div className="dropdown">
            <label tabIndex={0} className=" m-1">
              Products
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu  shadow bg-slate-300 rounded-box w-52 text-black"
            >
              <li>
                <a>BOM Optimization</a>
              </li>
              <li>
                <a>Part Selection</a>
              </li>
              <li>
                <a>Gantt Chart</a>
              </li>
            </ul>
          </div>
        </Link>
      </li>
      <li>
        <Link to="/">Statups</Link>
      </li>
      <li>
        <Link to="/">Resources</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-slate-400 text-black font-bold shadow-lg fixed lg:top-0 z-20">
        <div className="navbar-start">
          {/* menu drawer */}
          <div className="drawer  lg:hidden ">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label
                htmlFor="my-drawer"
                className="btn btn-ghost drawer-button"
              >
                <HiMenuAlt1 size="30px" />
              </label>
            </div>
            <div className="drawer-side z-50 ">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 w-80 min-h-full bg-slate-300 text-black">
                {/* Sidebar content here */}
                {navItem}
              </ul>
            </div>
          </div>
          <Link to="/" className="px-4 font-bold text-xl ">
            <img src={logo} alt="logo" className="w-16" />
          </Link>
        </div>

        {/* menu */}

        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItem}</ul>
        </div>
        <div className="navbar-end ">
          <a href="mailto:hariish@autobom.ai ">
            <button className="btn bg-orange-500 border-0 text-white lg:btn-md btn-sm hover:text-black hover:bg-orange-300">
              Contact Sales
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
