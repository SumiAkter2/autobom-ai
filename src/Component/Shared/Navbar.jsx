import { HiMenuAlt1 } from "react-icons/hi";

const Navbar = () => {
  const navItem = (
    <>
      <li>
        <a>Products</a>
      </li>
      <li>
        <a>Statups</a>
      </li>
      <li>
        <a>Resources</a>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 text-black font-bold shadow-lg fixed lg:top-0 z-20">
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
              <ul className="menu p-4 w-80 min-h-full bg-base-200 ">
                {/* Sidebar content here */}
                {navItem}
              </ul>
            </div>
          </div>
          <a className="btn btn-ghost font-bold text-xl "> Autobom ai</a>
        </div>

        {/* menu */}

        {/* ens */}
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItem}</ul>
        </div>
        <div className="navbar-end ">
          <button className="btn bg-orange-500 text-white lg:btn-md btn-sm hover:text-black hover:bg-orange-300">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
