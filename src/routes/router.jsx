import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home"
import About from "../pages/About"
import Redux from "../pages/Redux";


export const router = createBrowserRouter([
  {
    path: "/data",
    element: <Home/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/redux",
    element: <Redux/>,
  },
]);
