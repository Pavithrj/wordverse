import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <header className="flex flex-col items-center justify-center min-h-screen gap-4 px-6 py-16 mx-auto text-center max-w-7xl">
            <h1 className="text-2xl font-bold leading-tight sm:text-4xl md:text-6xl">
                Welcome to Word<span className="text-orange-500">Verse</span>
            </h1>

            <p className="max-w-2xl mx-auto text-sm text-gray-700 md:text-lg">
                Dive into thoughts, ideas, and stories crafted by curious minds like yours. Explore, express, and experience the world of blogging.
            </p>

            <Link to="/wordverse/blogs" className="px-6 py-3 text-white transition duration-300 bg-orange-500 shadow w-fit rounded-xl hover:bg-orange-600">
                Explore Blogs
            </Link>
        </header>
    )
};

export default HeroSection;
