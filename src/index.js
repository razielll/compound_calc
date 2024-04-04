import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App';
import Policy from './Pages/Policy';
import Contact from './Pages/Contact';
// import reportWebVitals from './reportWebVitals';

import './index.css';
import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/policy",
    element: <Policy />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

