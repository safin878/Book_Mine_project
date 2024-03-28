import DropDown from "../DropDown/DropDown";
import NavBar2 from "../NavBar2/NavBar2";
// import ReadBooks from "../ReadBooks/ReadBooks";
import { Outlet } from "react-router-dom";

const ListedBooks = () => {
  return (
    <div className="container mx-auto">
      <div className="bg-opp-color text-center border rounded-lg h-24 flex items-center justify-center text-3xl">
        <h1 className="font-bold ">Books</h1>
      </div>

      <DropDown></DropDown>
      <NavBar2></NavBar2>
      <Outlet></Outlet>
    </div>
  );
};

export default ListedBooks;
