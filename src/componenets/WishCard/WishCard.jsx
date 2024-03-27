import { GoPeople } from "react-icons/go";
import { VscBook } from "react-icons/vsc";
import { MdOutlineLocationOn } from "react-icons/md";
const WishCard = ({ wishread }) => {
  const {
    img,
    bookName,
    author,
    category,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = wishread;
  return (
    <div>
      <div className="hero  bg-base-200 grid justify-start ">
        <div className="hero-content flex-col lg:flex-row ">
          <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="mx-12">
            <h1 className="text-5xl font-bold">{bookName}</h1>
            <p className="py-6">By : {author}</p>

            <div className="flex items-center justify-between">
              <p className="flex gap-2">
                <span className="font-bold">Tag </span>
                <span className="text-primary-color border rounded-lg p-1">
                  {" "}
                  #{tags[0]}
                </span>
                <span className="text-primary-color border rounded-lg p-1">
                  {" "}
                  #{tags[1]}
                </span>
              </p>

              <div className="flex gap-1 items-center">
                <MdOutlineLocationOn />
                <p>
                  Year of Publishing:<span>{yearOfPublishing}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center  justify-between my-3">
              <div className="flex items-center gap-1">
                <GoPeople />
                <p>
                  Publisher:<span className="mx-2">{publisher}</span>
                </p>
              </div>
              <div className="flex items-center gap-1">
                <VscBook />
                <p>
                  Page:<span className="mx-2">{totalPages}</span>
                </p>
              </div>
            </div>
            <hr className="my-3" />
            <div className="flex gap-5">
              <p className="bg-bt-color border rounded-lg p-1 text-bt2-color">
                Catagory:<span className="mx-2">{category}</span>
              </p>
              <p className="bg-bt3-color border rounded-lg p-1 text-bt4-color">
                Rating:<span className="mx-2">{rating}</span>
              </p>
              <button className="bg-primary-color border rounded-lg p-1 text-white">
                View Detailes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishCard;
