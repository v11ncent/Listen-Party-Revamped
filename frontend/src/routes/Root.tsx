import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <h1>Hello world!</h1>
      <Outlet />
    </>
  );
};

export default Root;
