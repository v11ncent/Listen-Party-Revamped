import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const NavBar = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <nav>
      <ul>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</ul>
    </nav>
  );
};

export default NavBar;
