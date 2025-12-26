
const stats = [
    { label: "Users", value: "1,200+" },
    { label: "Blogs Published", value: "4,500+" },
    { label: "Writers Joined", value: "300+" }
];

const PlatformStats = () => (
    <section className="py-16 text-gray-900 bg-white">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6 text-3xl font-bold text-orange-600">
                Platform at a Glance
            </h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                {stats.map((item, idx) => (
                    <div key={idx} className="p-4">
                        <p className="text-4xl font-bold text-gray-900">
                            {item.value}
                        </p>

                        <p className="mt-2 text-sm text-gray-500">
                            {item.label}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default PlatformStats;
