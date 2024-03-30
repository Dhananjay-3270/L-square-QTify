import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(

//     <App />

// );

// ReactDOM.render(
// <React.StrictMode>
// <App />
// </React.StrictMode> ,
// document.getElementById('root')
// )

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index:true ,
        element: <Homepage />,
       
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
