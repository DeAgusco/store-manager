import { useRouteError } from "react-router-dom";

interface RouteError {
    statusText?: string;
    message?: string;
  }

const ErrorPage = () => {
    const error = useRouteError() as RouteError;

  return (
    <div className="h-full max-h-screen">
      <div className="flex flex-col justify-center items-center mt-24 pb-24 font-Regular h-full max-h-screen">
        <h1 className="font-Bold text-6xl">Oops!</h1>
        <p className="text-xl text-slate-600 py-8 text-center">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="text-amber-500 underline px-12 pt-0 pb-3 rounded-xl text-xl text-center self-center">
          <i>{error?.statusText || error?.message}</i>
        </p>

        <div className="mt-10">
          <button
            onClick={() => window.history.back()}
          >Go Back</button>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage