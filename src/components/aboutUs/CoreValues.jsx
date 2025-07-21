
const values = [
    { title: "Creativity", description: "We celebrate unique voices and fresh perspectives." },
    { title: "Community", description: "We believe in learning and growing together." },
    { title: "Simplicity", description: "Writing should be easy and beautiful." },
    { title: "Privacy", description: "Your data and words are safe with us." }
];

const CoreValues = () => (
    <section className="max-w-6xl px-6 py-16 mx-auto">
        <h2 className="mb-10 text-3xl font-bold text-center">Our Core Values</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            {values.map((val, idx) => (
                <div key={idx} className="p-6 text-center bg-white rounded-lg shadow">
                    <h3 className="mb-2 text-xl font-semibold">{val.title}</h3>
                    <p className="text-sm text-gray-600">{val.description}</p>
                </div>
            ))}
        </div>
    </section>
);

export default CoreValues;
