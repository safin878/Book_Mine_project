import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div className="container mx-auto my-7 work-sans">
      <nav className="flex justify-between">
        <div className="text-2xl font-extrabold">
          <Link> Book Mine </Link>
        </div>
        <div className="flex">
          <ul className="flex gap-5">
            <li className="">
              <NavLink to="/home">
                <button className="btn btn-outline text-primary-color hover:bg-primary-color hover:border-primary-color">
                  Home
                </button>
              </NavLink>
            </li>
            <li className="">
              <NavLink to="/listed">
                <button className="btn btn-outline text-primary-color hover:bg-primary-color hover:border-primary-color">
                  Listed Books
                </button>
              </NavLink>
            </li>
            <li className="">
              <NavLink to="/pages">
                <button className="btn btn-outline text-primary-color hover:bg-primary-color hover:border-primary-color">
                  Pages to Read
                </button>
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="flex gap-2">
          <button className="btn bg-primary-color text-white text-lg">
            Sign In
          </button>
          <button className="btn bg-secondary-color text-white text-lg">
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
