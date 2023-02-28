import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth0ProviderWithNavigate from "./components/Auth0ProviderWithNavigate";
import App from "./routes/App";
import Root from "./routes/Root";
import About from "./routes/About";
import Lobby from "./components/Lobbies/Lobby/Lobby";
import Error from "./routes/Error";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithNavigate>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route path="/app" element={<App />} />
            <Route path="/about" element={<About />} />
            <Route path="/lobby/:lobbyId" element={<Lobby />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Auth0ProviderWithNavigate>
    </BrowserRouter>
  </React.StrictMode>
);
