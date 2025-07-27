import Testimonials from '../../data/Testimonials';

const TestimonialsSection = () => {
    return (
        <section aria-labelledby="testimonials-title" className="px-6 py-16 text-black bg-gray-50">
            <div className="max-w-6xl mx-auto space-y-10 text-center">
                <h2 id="testimonials-title" className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                    What Our Readers Say
                </h2>

                <div className="grid gap-4 md:gap-8 sm:grid-cols-2 md:grid-cols-3">
                    {Testimonials?.length > 0 ?
                        Testimonials.map(({ name, quote, role, image }, index) => (
                            <figure key={index} className="flex flex-col items-center p-6 transition-shadow duration-300 bg-white shadow-md rounded-xl hover:shadow-lg">
                                {image ?
                                    <img src={image} alt={`Photo of ${name}`} className="object-cover w-16 h-16 mb-4 rounded-full" loading="lazy" />
                                    :
                                    <div className="flex items-center justify-center w-16 h-16 mb-4 text-sm text-gray-500 bg-gray-200 rounded-full">
                                        No Image
                                    </div>
                                }

                                <blockquote className="mb-3 text-sm italic text-gray-600">
                                    “{quote?.length > 150 ? quote.slice(0, 147) + '...' : quote}”
                                </blockquote>

                                <figcaption className="text-center">
                                    <h3 className="font-semibold text-orange-500">
                                        {name || 'Anonymous'}
                                    </h3>

                                    <p className="text-sm text-gray-500">
                                        {role || 'Reader'}
                                    </p>
                                </figcaption>
                            </figure>
                        ))
                        :
                        <p className="text-gray-500 col-span-full">
                            No testimonials available.
                        </p>
                    }
                </div>
            </div>
        </section>
    )
};

export default TestimonialsSection;
