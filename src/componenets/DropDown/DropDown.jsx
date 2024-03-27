import { RiArrowDropDownLine } from "react-icons/ri";
const DropDown = () => {
  return (
    <div className="flex justify-center my-10 h-36 ">
      <details className="dropdown ">
        <summary className="m-1 btn bg-primary-color text-white">
          Sort By{" "}
          <span className="text-2xl">
            <RiArrowDropDownLine />
          </span>
        </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li>
            <a>Rating</a>
          </li>
          <li>
            <a>Number of Pages</a>
          </li>
          <li>
            <a>Published year</a>
          </li>
        </ul>
      </details>
    </div>
  );
};

export default DropDown;
