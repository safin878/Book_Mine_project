import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div className="container mx-auto bg-op-color py-20 p-5  border  rounded-3xl flex justify-around items-center">
      <div>
        <h1 className="text-6xl playfair-display">
          Books to freshen up <br />
          your bookshelf
        </h1>
        <button className="btn bg-primary-color my-10 text-white">
          <NavLink to="/listed">View The List</NavLink>
        </button>
      </div>
      <div>
        <img src="./bannerpic.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
