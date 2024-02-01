import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Docs from "../Pages/Docs/Docs";
import Blocks from "../Pages/Blocks/Blocks";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/docs",
        element: (
          <PrivateRoute>
            <Docs></Docs>
          </PrivateRoute>
        ),
      },
      {
        path: "/blocks",
        element: <Blocks></Blocks>,
      },
    ],
  },
]);

export default Route;
