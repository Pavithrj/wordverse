import Testimonials from '../../data/Testimonials';

const TestimonialsSection = () => {
    return (
        <section className="px-6 py-16 text-black bg-gray-50">
            <div className="max-w-5xl mx-auto text-center flex flex-col gap-4">
                <h2 className="text-2xl font-bold text-center text-black sm:text-3xl">
                    What Our Readers Say
                </h2>

                <div className="grid gap-4 md:gap-8 sm:grid-cols-2 md:grid-cols-3">
                    {Testimonials.map(({ name, quote, role, image }, index) => (
                        <div key={index} className="p-6 transition duration-300 bg-white shadow-md rounded-xl hover:shadow-lg">
                            {image &&
                                <img src={image} alt={name} className="object-cover w-16 h-16 mx-auto mb-4 rounded-full" />
                            }

                            <p className="mb-3 italic text-gray-600">
                                “{quote}”
                            </p>

                            <h3 className="font-semibold text-orange-500">
                                {name}
                            </h3>

                            <p className="text-sm text-gray-500">
                                {role}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
};

export default TestimonialsSection;
