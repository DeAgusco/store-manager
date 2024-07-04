import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from './containers/ErrorPage';
import Login from './containers/Login';
import Dashboard from './containers/Dashboard';
import './App.css'
import './index.css'
import AllProducts from './containers/AllProducts';
import EditProduct from './containers/EditProduct';
import AddProduct from './containers/AddProducts';
import PrivateRoute from './HOC/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard/allproduct",
    element: (
      <PrivateRoute>
        <AllProducts />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard/edit/product/:id",
    element: (
      <PrivateRoute>
        <EditProduct />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard/add/product",
    element: (
      <PrivateRoute>
        <AddProduct />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
  },
])

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
