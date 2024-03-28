import { useLoaderData } from "react-router-dom";
import Book from "../Book/Book";
const Books = () => {
  //   const { books, setBooks } = useState([]);
  //   useEffect(() => {
  //     fetch("./books.json")
  //       .then((res) => res.json())
  //       .then((data) => setBooks(data));
  //   }, []);

  const books = useLoaderData();
  return (
    <div className="">
      <h1 className="text-5xl text-center my-5 playfair-display font-bold">
        Books
      </h1>
      <div className="lg:grid grid-cols-3 lg:mx-10 lg:gap-5 flex flex-col gap-2 ">
        {books.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
