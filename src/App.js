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

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
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
              loader: ({params}) => fetch(`http://localhost:5000/course/${params.id}`)
            },
          ]
        },
        {
          path: "/courses/:id",
          element: <IndividualCourse></IndividualCourse>,
          loader: ({params}) => fetch(`http://localhost:5000/courses/${params.id}`)
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
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
