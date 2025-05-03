import { createBrowserRouter, Router } from "react-router";
import App from "../App";
import favourites from "../favourites";
import Home from "../pages/home";
import MainLayouts from "../layouts/MainLayouts";
import About from "../pages/About";
import PhonesContainer from "../components/PhonesContainer";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
      path:'/',
      Component: MainLayouts,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        // default route browser
        {
          path:'/',
          element:<Home></Home>
  
        },
        {
        path:'/favourites',
        Component: favourites,
      },
      {
        path: "/about",
      element: <About></About>,
      },
      {
        path: "/PhonesContainer",
      element: <PhonesContainer></PhonesContainer>,
      }
    ]
    },
  ])


export default router