import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import store from "../store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./pages/Register.tsx";
import Login from "./pages/Login.tsx";
import FlightForm from "./pages/FlightForm.tsx";
import FlightDetails from "./pages/FlightDetails.tsx";
import ErrorPage from "./components/general/ErrorPage.tsx";
import Root from "./Root.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <App /> },
      { path: "/", element: <App /> },
      { path: "/add-flight", element: <FlightForm /> },
      { path: "/view-flight/:id", element: <FlightDetails /> },
      { path: "/edit-flight/:id", element: <FlightForm /> },
    ],
  },
  { path: "register", element: <Register /> },
  { path: "login", element: <Login /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
