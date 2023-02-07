import React from "react";
import { createBrowserRouter } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Root from "./Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [{}],
    errorElement: <NotFound />,
  },
]);
