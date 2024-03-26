const Book = ({ book }) => {
  const { image, tags, bookName, author, category, rating } = book;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl ">
        <figure>
          <img src={image} alt="" />
        </figure>
        <div className="card-body">
          <div className="card-actions ">
            <div className="flex gap-5">
              <p>{tags}</p>
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
    </div>
  );
};

export default Book;
