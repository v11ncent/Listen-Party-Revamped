import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import LoginButton from "../Login Buttons/LoginButton";
import LogoutButton from "../Login Buttons/LogoutButton";
import type { Links } from "../../../../types/client/index";
import styles from "./Navbar.module.scss";

const Navbar = ({ links }: { links: Links }) => {
  const { isAuthenticated } = useAuth0();

  return (
    <nav className={styles.nav}>
      <h2>Listen Party</h2>
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
