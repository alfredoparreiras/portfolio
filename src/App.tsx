import { createBrowserRouter,RouterProvider,} from "react-router-dom";

import Index from "./pages/Index";
import TaskTrace from "./pages/Projects/TaskTrace";
import React from "react";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Index/>
  }, 
  {
    path: "/project/tasktrace",
    element: <TaskTrace/>
  },
  {
    path: "/project/foodninjaapidocumentation",
    element: <TaskTrace/>
  },
  {
    path: "/project/foodninjaapi",
    element: <TaskTrace/>
  },
    {
    path: "/project/moshify",
    element: <TaskTrace/>
  },
  {
    path: "/project/pokedex",
    element: <TaskTrace/>
  }
])


function App() {

  return (
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  );
}

export default App
