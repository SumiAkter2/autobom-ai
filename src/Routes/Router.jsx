import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Component/Home/Home";
import ErrorPage from "../ErrorPage";
import Dashboard from "../Component/Dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);
