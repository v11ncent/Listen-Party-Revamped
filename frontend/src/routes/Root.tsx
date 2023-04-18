import { Outlet } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import Navbar from "../components/Navbar/Navbar";

const Root = () => {
  return (
    <>
      <Navbar links={[{ text: "about", to: "/about" }]} />
      <Outlet />
    </>
  );
};

export default Root;
