import { useRouteError } from "react-router-dom";

type ErrorObject = {
  statusText: String;
  message: String;
};

const Error = () => {
  //   const error = useRouteError() as ErrorObject;
  //   console.error(error);

  return (
    <>
      <h1>Oops! 🤖</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      {/* <p>
        <i>{error.statusText || error.message}</i>
      </p> */}
    </>
  );
};

export default Error;
