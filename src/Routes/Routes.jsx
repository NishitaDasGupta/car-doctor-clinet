import {
  createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Checkout from "../Pages/Checkout/Checkout";
import MyBookings from "../Pages/MyBookings/MyBookings";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "signup",
        element: <Signup></Signup>
      },
      {
        path: "checkout/:id",
        element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
        loader: ({ params }) => fetch(`https://car-doctor-server-three-smoky.vercel.app/services/${params.id}`)
      },
      {
        path: "mybookings",
        element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>,
      },
    ]
  },
]);

export default router;