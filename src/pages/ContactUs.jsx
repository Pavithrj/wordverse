import { useState } from 'react';

const ContactUs = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for reaching out!");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section className="flex items-center justify-center min-h-screen p-6 bg-gradient-to-br from-orange-100 to-orange-200">
            <div className="flex flex-col w-full max-w-3xl overflow-hidden bg-white shadow-2xl rounded-2xl md:flex-row">
                <div className="items-center justify-center hidden p-6 bg-orange-500 md:flex md:w-1/2">
                    <img src="https://cdn-icons-png.flaticon.com/512/9068/9068640.png" alt="Contact" className="w-64" />
                </div>

                <div className="w-full p-8 md:w-1/2">
                    <h2 className="mb-4 text-3xl font-bold text-center text-orange-600">
                        Get in Touch
                    </h2>

                    <p className="mb-6 text-sm text-center text-gray-600">
                        We&#39;d love to hear from you! Fill out the form and we’ll get back to you shortly.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">
                                Your Name
                            </label>

                            <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none" />
                        </div>

                        <div>
                            <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
                                Email Address
                            </label>

                            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none" />
                        </div>

                        <div>
                            <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-700">
                                Your Message
                            </label>

                            <textarea name="message" id="message" rows="4" value={formData.message} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-orange-400 focus:outline-none"></textarea>
                        </div>

                        <button type="submit" className="w-full py-3 font-medium text-white transition duration-200 bg-orange-500 rounded-md hover:bg-orange-600">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
};

export default ContactUs;
