import { useLoaderData } from "react-router-dom";
import BarChart from "../BarChart/BarChart";
import { getStoreBookRead } from "../../utility/localstorage";
import { useEffect } from "react";
import { useState } from "react";
const PagesToRead = () => {
  const reads = useLoaderData();

  const [booksread, setbookread] = useState([]);

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
      <BarChart reads={reads}></BarChart>
    </div>
  );
};

export default PagesToRead;
