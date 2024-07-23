import Home from "../pages/Home";
import HowTo from "../pages/HowTo";
import Timer from "../pages/Timer";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/HowTo",
    element: <HowTo></HowTo>,
  },
  {
    path: "/Timer",
    element: <Timer></Timer>,
  },
]);

export default router;
