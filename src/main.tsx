import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from './containers/ErrorPage';
import Login from './containers/Login';
import Dashboard from './containers/Dashboard';
import './App.css'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard/*",
    element: <Dashboard  />,
    errorElement: <ErrorPage />,
  },
])

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
