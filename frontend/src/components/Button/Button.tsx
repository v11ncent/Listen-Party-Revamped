import { useState, useEffect } from "react";
import { TButton } from "../../../../types/client/index";
import styles from "./Button.module.scss";

const Button = ({ as = "button", text, primary, onClick, type }: TButton) => {
  const [className, setClassName] = useState<string>(styles.primary);
  const Component = as;

  useEffect(() => {
    if (!primary) setClassName(styles.secondary);
  }, []);

  return (
    <Component as={as} onClick={onClick} className={className} type={type}>
      {text}
    </Component>
  );
};

export default Button;
