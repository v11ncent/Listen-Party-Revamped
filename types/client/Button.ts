export type Button = {
  as: React.ElementType;
  text: string;
  primary: Boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: string;
};
