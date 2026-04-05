import React from 'react';
import { Link, useRouteError } from 'react-router';

const ErrorPage = () => {
    const error = useRouteError();
    const status = error?.status || 404;
    const message = error?.statusText || error?.message || 'Page not found';

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="text-center">
                <p className="text-6xl font-bold text-red-500">{status}</p>
                <h1 className="mt-4 text-2xl font-semibold text-gray-800">Oops! Something went wrong</h1>
                <p className="mt-2 text-gray-500 text-sm">{message}</p>

                <div className="mt-8 flex items-center justify-center gap-4">
                    <Link
                        to="/"
                        className="px-5 py-2.5 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600 transition"
                    >
                        Go Home
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="px-5 py-2.5 border border-gray-300 text-gray-600 text-sm rounded-lg hover:bg-gray-100 transition"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
