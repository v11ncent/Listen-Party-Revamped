import { Outlet } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import NavBar from "../components/NavBar";

const Root = () => {
  return (
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: import.meta.env.VITE_AUTH0_CALLBACK_URL,
      }}
    >
      <NavBar />
      <Outlet />
    </Auth0Provider>
  );
};

export default Root;
