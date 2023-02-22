import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import styles from "./Navbar.module.scss";

type Links = {
  text: String;
  to: any;
}[];

const Navbar = ({ links }: { links: Links }) => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <nav className={styles.nav}>
      <ul>
        {links &&
          links.map((link, index) => (
            <li key={index}>
              <Link to={link.to}>{link.text}</Link>
            </li>
          ))}
        <li className={styles.cta}>
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
