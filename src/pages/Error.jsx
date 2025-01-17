import { useRouteError, Link } from "react-router-dom";
import Landing from "./Landing";

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {

    return (
      <main className="grid min-h-screen place-items-center px-8">
        <div className="text-center">
          <p className="text-9xl font-semibold text-primary">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">page not found</h1>
          <p className="mt-6 text-lg leading-7">Sorry, we couldn’t find the page you’re looking for.</p>
          <div className="mt-10">
            <Link to="/" className="btn btn-secondary">GO BACK HOME</Link>
          </div>
        </div>
      </main>
    )
  }
  return (
    <main className="flex flex-col justify-center items-center h-screen w-screen">
      <p className="mt-6 text-5xl font-semibold leading-7">there was an error...</p>
      <div className="mt-10">
            <Link to="/" className="btn btn-secondary">GO BACK HOME</Link>
          </div>
    </main>
  )

};

export default Error;