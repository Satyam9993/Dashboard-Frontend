import React from 'react'
import MainApp from './MainApp';
import Login from './Login';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainApp/>
  },
  {
    path: "/login",
    element: <Login/>
  }
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;