import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Timer from "../pages/Timer";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/Blog",
    element: <Blog></Blog>,
  },
  {
    path: "/Timer",
    element: <Timer></Timer>,
  },
]);

export default router;
