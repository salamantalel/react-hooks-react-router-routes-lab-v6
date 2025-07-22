 import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Directors from "./components/Directors";
import Actors from "./components/Actors";
import Movie from "./components/Movie";
import ErrorPage from "./components/ErrorPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/directors",
    element: <Directors />,
  },
  {
    path: "/actors",
    element: <Actors />,
  },
  {
    path: "/movie/:id",
    element: <Movie />,
  },
]);

export default routes;