import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import Home from "../src/pages/Home/Home"
import Course from './pages/Course/Course';
import FAQ from './pages/FAQ/FAQ';
import Blog from './pages/Blog/Blog';

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
          element:<Course></Course>
        },
        {
          path: "/faq",
          element:<FAQ></FAQ>
        },
        {
          path: "/blog",
          element:<Blog></Blog>
        },
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
