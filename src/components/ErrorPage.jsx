import React from "react";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-800">404</h1>
        <p className="text-2xl font-semibold text-gray-600 mb-4">
          Oops! Page not found
        </p>
        <p className="text-gray-500 mb-8">
          The page you are looking for doesn't exist or an other error occurred.
        </p>
        <a
          href="/"
          className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-full"
        >
          Go to Homepage
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
