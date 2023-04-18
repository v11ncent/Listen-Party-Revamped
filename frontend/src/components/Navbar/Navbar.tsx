import { Link } from "react-router-dom";
import { TLinks } from "../../../../types/client/index";
import LoginButton from "../Login Buttons/LoginButton";
import LogoutButton from "../Login Buttons/LogoutButton";
import styles from "./Navbar.module.scss";

const Navbar = ({ links }: { links: TLinks }) => {
  return (
    <nav className={styles.nav}>
      <p className={styles.logo}>Listen Party</p>
      <ul>
        {links &&
          links.map((link, index) => (
            <li key={index}>
              <Link to={link.to}>{link.text}</Link>
            </li>
          ))}
        {/* <li className={styles.cta}>
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
