import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './componets/Root/Root';


import Home from './componets/Home/Home';
import AppliedJobs from './componets/AppliedJobs/AppliedJobs';
import ErrorPage from './componets/ErrorPage/ErrorPage';
import JobDetalis from './componets/JobDetalis/JobDetalis';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/applied',
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch('../jobs.json') //warning: only load the data you need. do not load all the data
      },
      {
        path: '/job/:id',
        element:<JobDetalis></JobDetalis>,
        loader: () => fetch('../jobs.json') //do not load all data .load only what you need
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
