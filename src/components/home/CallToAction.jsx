import { Link } from 'react-router-dom';

const CallToAction = () => {
    return (
        <section className="px-6 py-16 text-center text-white bg-black">
            <h2 className="text-2xl font-bold text-center sm:text-3xl">
                Ready to Dive into Stories that Matter?
            </h2>

            <Link to="/wordverse/blogs" className="inline-block px-6 py-3 mt-4 text-white transition bg-orange-500 rounded-xl hover:bg-orange-600">
                Start Reading →
            </Link>
        </section>
    )
};

export default CallToAction;
