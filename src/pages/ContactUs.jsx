import { useState } from 'react';

const ContactUs = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert('Thank you for reaching out!');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 to-orange-200 p-6">
            <div className="bg-white shadow-2xl rounded-2xl max-w-3xl w-full flex flex-col md:flex-row overflow-hidden">
                <div className="hidden md:flex md:w-1/2 bg-orange-500 items-center justify-center p-6">
                    <img src="https://cdn-icons-png.flaticon.com/512/9068/9068640.png" alt="Contact" className="w-64" />
                </div>

                <div className="w-full md:w-1/2 p-8">
                    <h2 className="text-3xl font-bold text-orange-600 mb-4 text-center">
                        Get in Touch
                    </h2>

                    <p className="text-gray-600 text-sm mb-6 text-center">
                        We'd love to hear from you! Fill out the form and we’ll get back to you shortly.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label htmlFor="name" className="block text-sm text-gray-700 font-medium mb-1">
                                Your Name
                            </label>

                            <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none" />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm text-gray-700 font-medium mb-1">
                                Email Address
                            </label>

                            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none" />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm text-gray-700 font-medium mb-1">
                                Your Message
                            </label>

                            <textarea name="message" id="message" rows="4" value={formData.message} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none resize-none"></textarea>
                        </div>

                        <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 rounded-md transition duration-200">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
};

export default ContactUs;
