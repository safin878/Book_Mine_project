import { NavLink } from "react-router-dom";
import "./NavBar2.css";

const NavBar2 = () => {
  return (
    <div className="flex gap-2 my-5">
      <NavLink to="/listed">Read Books</NavLink>
      <NavLink to="/listed/wb">WhishList Books</NavLink>
    </div>
  );
};

export default NavBar2;
