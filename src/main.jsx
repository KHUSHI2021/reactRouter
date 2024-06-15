import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from "./components/home/Home";
import About from "./components/about/About";

const router = createBrowserRouter([ //we take array same as usestate etc.
  {
    path: "/",
    element:<Layout/>,
    children:[              //bcz we aslo want to add home,contact,header,footer
      {
         path: " ",
         element: <Home/>
      },
      {
        path:"about",
        element:<About/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode> 
   <RouterProvider router={router}/> 
  </React.StrictMode>,
);
