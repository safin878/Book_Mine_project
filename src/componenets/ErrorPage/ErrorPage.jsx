import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center  flex-col align-bottom">
      <h1 className="text-6xl text-center">Opps!!404!!</h1>
      <Link className="btn bg-cyan-500 my-10" to="/">
        Go Back
      </Link>
    </div>
  );
};

export default ErrorPage;
