// import React from 'react';
// import ReactDOM from 'react-dom/client';
import App from './App';
import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,  
  Link,
} from "react-router-dom";

import Features from "./FeaturesPage/Features";
import DownloadPage from "./DownloadPage/DownloadPage";
import AboutPage from './AboutPage/AboutPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App/>
    ),
  },
  {
    path: "features",
    element: <Features/>,
  },

  {
    path: "download",
    element: <DownloadPage/>,
  },
  {
    path: "about",
    element: <AboutPage/>,
  },

]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

