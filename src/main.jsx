import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./componenets/Home/Home";
import ListedBooks from "./componenets/ListedBooks/ListedBooks";
import PagesToRead from "./componenets/PagesToRead/PagesToRead";
import Root from "./componenets/Root/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/listed",
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: "/pages",
        element: <PagesToRead></PagesToRead>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
