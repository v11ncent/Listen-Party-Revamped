import { useRouteError } from "react-router-dom";

type ErrorObject = {
  statusText: String;
  message: String;
};

const Error = () => {
  return (
    <>
      <h1>Oops! 🤖</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </>
  );
};

export default Error;
