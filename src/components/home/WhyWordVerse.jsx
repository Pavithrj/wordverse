import { Link } from 'react-router-dom';

const WhyWordVerse = () => {
    return (
        <section className="px-6 py-16 text-black bg-white">
            <div className="max-w-5xl mx-auto text-center items-center flex flex-col gap-4">
                <h2 className="text-2xl font-bold text-center text-black sm:text-3xl">
                    Why WordVerse?
                </h2>

                <p className="text-md lg:text-lg text-gray-600">
                    WordVerse isn’t just a blog — it’s a canvas for every storyteller, thinker, and creator. Share your experiences, explore new voices, and shape your digital footprint.
                </p>

                <Link to="/wordverse/about" className="inline-block px-5 py-2 text-orange-500 transition border border-orange-500 rounded-full hover:bg-orange-500 hover:text-white w-fit">
                    Learn More
                </Link>
            </div>
        </section>
    )
};

export default WhyWordVerse;
