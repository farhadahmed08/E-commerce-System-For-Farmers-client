import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Product from "../Pages/Product/Product/Product";
import Order from "../Pages/Order/Order/Order";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "product",
        element: <Product />,
      },
      {
        path: "order/:category",
        element: <Order />,
      },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },

  {
    path:'dashboard',
    element:<PrivateRoute><Dashboard/></PrivateRoute>,
    children:[
      // normal user routes
      {
        path:'userHome',
        element:<UserHome/>
      },
      {
        path:'cart',
        element:<Cart/>
      },
      {
        path:'payment',
        element:<Payment/>
      },
      {
        path:'paymentHistory',
        element:<PaymentHistory/>
      },
      // admin only routes

      // {
      //   path:'adminHome',
      //   element:<AdminRoute><AdminHome/></AdminRoute>
        
      // },
      // {
      //   path:'addItems',
      //   element:<AdminRoute><AddItems/></AdminRoute>
        
      // },
      // {
      //   path:'manageItems',
      //   element:<AdminRoute><ManageItems/></AdminRoute>
        
      // },
      // {
      //   path:'updateItem/:id',
      //   element:<AdminRoute><UpdateItem/></AdminRoute>,
      //   loader: ({params})=> fetch(`http://localhost:5000/menu/${params.id}`)
  
      // },
      // {
      //   path:'users',
      //   element:<AdminRoute><AllUsers/></AdminRoute>
      // },
    ]
  }
]);
