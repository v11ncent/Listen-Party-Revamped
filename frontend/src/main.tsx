import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth0ProviderWithNavigate from "./components/Auth0ProviderWithNavigate";
import App from "./routes/App";
import Root from "./routes/Root";
import About from "./routes/About";
import Lobby from "./components/Lobbies/Lobby/Lobby";
import Error from "./routes/Error";
import "./index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/app",
        element: <App />,
      },
      {
        path: "/lobby/:lobbyId",
        element: <Lobby />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
