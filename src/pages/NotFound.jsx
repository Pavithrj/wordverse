import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex items-center justify-center min-h-[70vh] bg-gray-100 px-4">
            <div className="text-center animate-fadeIn">
                <h1 className="mb-4 text-6xl font-bold text-gray-800">
                    404
                </h1>

                <p className="mb-6 text-gray-600 text-md xl:text-xl">
                    Oops! The page you're looking for doesn't exist.
                </p>

                <Link to="/wordverse">
                    <button className="px-6 py-3 text-white transition duration-300 bg-orange-500 shadow w-fit rounded-xl hover:bg-orange-600">
                        Go Back Home
                    </button>
                </Link>
            </div>
        </div>
    )
};

export default NotFound;
