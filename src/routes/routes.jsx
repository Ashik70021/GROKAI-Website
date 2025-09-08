import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/pages/Home";
import WhitePaper from "../components/pages/WhitePaper";
import About from "../components/pages/About";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/whitepaper",
          element: <WhitePaper></WhitePaper>,
        },
        {
          path: "/about",
          element: <About></About>,
        },
      ],
  }
]);