import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoreBookWish } from "../../utlity2/localstorage2";
import WishCard from "../WishCard/WishCard";

const Whishbooks = () => {
  const wishs = useLoaderData();
  const [wishsbook, setWishbook] = useState([]);
  useEffect(() => {
    const storWishIds = getStoreBookWish();
    if (wishs.length > 0) {
      const booksWish = wishs.filter((wish) =>
        storWishIds.includes(wish.bookId)
      );
      setWishbook(booksWish);
    }
  }, []);
  return (
    <div>
      <div className="grid gap-3">
        {wishsbook.map((wishread) => (
          <WishCard wishread={wishread}></WishCard>
        ))}
      </div>
    </div>
  );
};

export default Whishbooks;
