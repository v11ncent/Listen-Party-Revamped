import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth0ProviderWithNavigate from "./components/Auth0ProviderWithNavigate";
import Root from "./routes/Root";
import Error from "./routes/Error";
import App from "./routes/App";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithNavigate>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route path="/app" element={<App />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Auth0ProviderWithNavigate>
    </BrowserRouter>
  </React.StrictMode>
);
