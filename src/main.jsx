import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import { Router } from "./09-useContext/Router";
 
import './index.css'
 
const router = Router();
 
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  //  </React.StrictMode> 
)