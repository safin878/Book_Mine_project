const getStoreBookRead = () => {
  const StoreBookRead = localStorage.getItem("book-read");
  if (StoreBookRead) {
    return JSON.parse(StoreBookRead);
  }
  return [];
};

const saveBookRead = (id) => {
  const StoreBookRead = getStoreBookRead();
  const exists = StoreBookRead.find((bookId) => bookId === id);
  if (!exists) {
    StoreBookRead.push(id);
    localStorage.setItem("book-read", JSON.stringify(StoreBookRead));
  }
};

export { getStoreBookRead, saveBookRead };
