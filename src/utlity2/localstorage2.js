const getStoreBookWish = () => {
  const StoreBookWish = localStorage.getItem("Wish-read");
  if (StoreBookWish) {
    return JSON.parse(StoreBookWish);
  }
  return [];
};

const saveBookWish = (id) => {
  const StoreBookWish = getStoreBookWish();
  const exists = StoreBookWish.find((bookId) => bookId === id);
  if (!exists) {
    StoreBookWish.push(id);
    localStorage.setItem("Wish-read", JSON.stringify(StoreBookWish));
  }
};

export { getStoreBookWish, saveBookWish };
