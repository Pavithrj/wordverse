
const MeetTheCreator = () => (
    <section className="px-6 py-16 bg-gray-50">
        <h2 className="mb-10 text-3xl font-bold text-center">
            Meet the Creator
        </h2>

        <div className="flex flex-col items-center max-w-3xl mx-auto text-center">
            <img src="/path/to/your-avatar.jpg" alt="Creator" className="object-cover w-32 h-32 mb-4 rounded-full" />

            <h3 className="text-xl font-semibold">
                Pavithr Jain
            </h3>

            <p className="mb-4 text-sm text-gray-600">
                MERN Stack Developer & Creator of WordVerse
            </p>

            <p className="text-gray-700">
                I'm passionate about building web experiences that empower people. WordVerse is a personal project that grew into something meaningful — thank you for being part of the journey!
            </p>
        </div>
    </section>
);

export default MeetTheCreator;
