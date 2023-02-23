import styles from "./Button.module.scss";

type Button = {
  as: React.ElementType;
  text: string;
  primary: Boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: string;
};

const Button = ({ as = "button", text, primary, onClick, type }: Button) => {
  const Component = as;
  let classNames = "" as string;
  // button has 2 styles: primary or secondary
  primary ? (classNames = styles.primary) : (classNames = styles.secondary);

  return (
    <Component as={as} onClick={onClick} className={classNames} type={type}>
      {text}
    </Component>
  );
};

export default Button;
