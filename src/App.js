import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import Home from "../src/pages/Home/Home"
import FAQ from './pages/FAQ/FAQ';
import Blog from './pages/Blog/Blog';
import Course from "./Layout/Course/Course"
import RightSide from './pages/RightSide/RightSide';
import AllCourse from './pages/AllCourse/AllCourse';
import IndividualCourse from './pages/IndividualCourse/IndividualCourse';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import NotFound from './pages/shared/NotFound/NotFound';
import Checkout from './pages/CheckOut/Checkout';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element:<Home></Home>
        },
        {
          path: "/home",
          element:<Home></Home>
        },
        {
          path: "/course",
          element: <Course></Course>,
          children: [
            {
              path: "/course",
              element: <AllCourse></AllCourse>
            },
            {
              path: "/course/:id",
              element: <RightSide></RightSide>,
              loader: ({params}) => fetch(`https://monster-tech-website-server.vercel.app/course/${params.id}`)
            },
          ]
        },
        {
          path: "/courses/:id",
          element: <IndividualCourse></IndividualCourse>,
          loader: ({params}) => fetch(`https://monster-tech-website-server.vercel.app/courses/${params.id}`)
        },
        
        {
          path: "/faq",
          element:<FAQ></FAQ>
        },
        {
          path: "/blog",
          element:<Blog></Blog>
        },
        {
          path: "/login",
          element:<Login></Login>
        },
        {
          path: "/register",
          element:<Register></Register>
        },
        {
          path: "/checkout/:id",
          element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
          loader: ({params}) => fetch(`https://monster-tech-website-server.vercel.app/checkout/${params.id}`)
        },
      ]
    },
    {
      path: "*",
      element:<NotFound></NotFound>
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
