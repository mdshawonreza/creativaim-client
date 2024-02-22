import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Root from './layouts/Root';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
         <RouterProvider router={router} />
  </React.StrictMode>,
)