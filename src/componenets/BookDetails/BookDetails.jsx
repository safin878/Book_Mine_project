import { useLoaderData, useParams } from "react-router-dom";
const BookDetails = () => {
  const book = useLoaderData();
  const { bookId } = useParams();

  const boo = book.find((book) => book.bookId === parseInt(bookId));
  console.log(boo);

  return (
    <div className="container mx-auto">
      <div className="flex justify-between gap-5">
        <img className="w-1/3 rounded-xl" src={boo.img} alt="" />
        <div>
          <h1 className="playfair-display text-5xl font-bold">
            {boo.bookName}
          </h1>
          <p className="my-2">By :{boo.author}</p>
          <hr className="my-2" />
          <p>{boo.category}</p>
          <hr className="my-3" />
          <p>
            <span className="font-bold">Review : </span>
            {boo.review}
          </p>
          <br />
          <div>
            <p className="flex gap-2">
              <span className="font-bold">Tag : </span>
              <span className="text-primary-color border rounded-lg p-1">
                {" "}
                #{boo.tags[0]}
              </span>
              <span className="text-primary-color border rounded-lg p-1">
                {" "}
                #{boo.tags[1]}
              </span>
            </p>
            <hr className="my-3" />
            <div>
              <p className="flex gap-10">
                <span>Number of Pages:</span>
                <span className="font-bold ">{boo.totalPages}</span>
              </p>
              <p className="flex gap-24">
                <span>Publisher:</span>
                <span className="font-bold ">{boo.publisher}</span>
              </p>
              <p className="flex gap-8">
                <span> Year of Publishing:</span>

                <span className="font-bold">{boo.yearOfPublishing}</span>
              </p>
              <p className="flex gap-28">
                <span>Rating:</span>
                <span className="font-bold">{boo.rating}</span>
              </p>
            </div>
          </div>
          <div className="flex gap-3 my-3">
            <button className="btn bg-white border rounded-lg">Read</button>
            <button className="btn bg-secondary-color">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
