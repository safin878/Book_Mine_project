import { NavLink } from "react-router-dom";
import "./NavBar2.css";

const NavBar2 = () => {
  return (
    <>
      {/* <div className="flex gap-2 my-5">
        <NavLink to="/listed">Read Books</NavLink>
        <NavLink to="/listed/wb">WhishList Books</NavLink>
      </div> */}

      <div className="navbar bg-base-100">
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/listed">Read Books</NavLink>
            </li>
            <li>
              <NavLink to="/listed/wb">WhishList Books</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar2;
