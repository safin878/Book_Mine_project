import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoreBookRead } from "../../utility/localstorage";
import ReadCard from "../ReadCrad/ReadCard";

const ReadBooks = () => {
  const reads = useLoaderData();
  const [booksread, setbookread] = useState([]);
  console.log(reads);
  useEffect(() => {
    const storReadIds = getStoreBookRead();
    if (reads?.length > 0) {
      const readbook = reads.filter((read) =>
        storReadIds.includes(read.bookId)
      );
      setbookread(readbook);
    }
  }, []);
  return (
    <div>
      <div className="grid gap-3">
        {booksread.map((bookread) => (
          <ReadCard bookread={bookread}></ReadCard>
        ))}
      </div>
    </div>
  );
};

export default ReadBooks;
