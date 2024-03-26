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
      <div className="grid grid-cols-3 mx-10 gap-5">
        {books.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
