import { NavLink } from "react-router-dom";

const NavBar2 = () => {
  return (
    <div className="flex gap-2">
      <NavLink to="/listed">Read book</NavLink>
      <NavLink to="/listed/wb">Whish book</NavLink>
    </div>
  );
};

export default NavBar2;
