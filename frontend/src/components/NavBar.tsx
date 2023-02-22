import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import styles from "./Navbar.module.scss";

const Navbar = ({ links }: { links: Array<String> }) => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <nav className={styles.nav}>
      <ul>
        {links && links.map((link, index) => <li key={index}>{link}</li>)}
        <li className={styles.cta}>
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
