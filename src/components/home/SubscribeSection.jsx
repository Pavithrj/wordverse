
const SubscribeSection = () => {
    return (
        <section className="px-6 py-16 text-black bg-orange-50">
            <div className="max-w-xl mx-auto text-center">
                <h2 className="text-2xl font-bold">
                    Stay Inspired
                </h2>

                <p className="mt-2 text-gray-700">
                    Get fresh blogs and insights delivered straight to your inbox.
                </p>

                <form className="flex flex-col justify-center gap-3 mt-6 sm:flex-row">
                    <input type="email" required pattern="[^@\s]+@[^@\s]+\.[^@\s]+" placeholder="Enter your email" className="w-full px-4 py-2 border border-gray-300 rounded-md sm:w-auto focus:outline-none" />

                    <button type="submit" className="px-4 py-2 text-white transition bg-orange-500 rounded-md hover:bg-orange-600">
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    )
};

export default SubscribeSection;
