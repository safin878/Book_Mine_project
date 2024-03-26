import { NavLink } from "react-router-dom";
import "./Book.css";

const Book = ({ book }) => {
  const { image, tags, bookName, author, category, rating, bookId } = book;
  return (
    <div>
      <NavLink to={`./book/${bookId}`}>
        <div className="card w-96 bg-base-100 shadow-xl ">
          <figure>
            <img src={image} alt="" />
          </figure>
          <div className="card-body">
            <div className="card-actions ">
              <div className="flex gap-5 text-primary-color font-medium ">
                <p className="border rounded-lg p-1">{tags[0]}</p>
                <p className="border rounded-lg p-1">{tags[1]}</p>
              </div>
            </div>
            <h2 className="card-title">{bookName}</h2>
            <p className="playfair-display font-thin">By : {author}</p>
          </div>

          <div className="flex justify-between p-4">
            <p>{category}</p>
            <div className="flex gap-2">
              <p>{rating}</p>
              <img src="./star.jpg" alt="" />
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default Book;
