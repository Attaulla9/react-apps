import { createBrowserRouter, Form } from "react-router-dom";
import Home from "../pages/Home"
import About from "../pages/About"
import Redux from "../pages/Redux";
import Contact from "../pages/Contact";
import Form from "../pages/Form";


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
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/form",
    element: <Form/>,
  },
]);
