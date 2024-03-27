import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./componenets/Home/Home";
import ListedBooks from "./componenets/ListedBooks/ListedBooks";
import PagesToRead from "./componenets/PagesToRead/PagesToRead";
import Root from "./componenets/Root/Root";
import BookDetails from "./componenets/BookDetails/BookDetails";
import ReadBooks from "./componenets/ReadBooks/ReadBooks";
import Whishbooks from "./componenets/Whishbooks/Whishbooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        loader: () => fetch("/books.json"),
        element: <Home></Home>,
      },
      {
        path: "/listed",
        element: <ListedBooks></ListedBooks>,
        children: [
          {
            path: "/listed",
            loader: () => fetch("/books.json"),
            element: <ReadBooks></ReadBooks>,
          },
          {
            path: "/listed/wb",
            element: <Whishbooks></Whishbooks>,
          },
        ],
      },
      {
        path: "/pages",
        element: <PagesToRead></PagesToRead>,
      },
      {
        path: "/book/:bookId",
        loader: () => fetch("/books.json"),
        element: <BookDetails></BookDetails>,
      },
      // {
      //   path: "/read",
      //   loader: () => fetch("./books.json"),
      //   element: <ReadBooks></ReadBooks>,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
