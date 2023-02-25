import { useAuth0 } from "@auth0/auth0-react";
import styles from "./LoginButton.module.scss";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <a onClick={() => loginWithRedirect()} className={styles.cta}>
      Log in
    </a>
  );
};

export default LoginButton;
