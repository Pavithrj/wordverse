import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-69px)] bg-gray-100 px-4">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-800 mb-4">
                    404
                </h1>

                <p className="text-md xl:text-xl text-gray-600 mb-6">
                    Oops! The page you&#39;re looking for doesn&#39;t exist.
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
