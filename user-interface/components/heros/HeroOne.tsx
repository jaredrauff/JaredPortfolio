import { JSX } from 'preact';

export default function HeroOne(): JSX.Element {
    return (
        <section className="bg-gray-900 text-white py-20">
            <div className="container mx-auto px-6 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h1 className="text-4xl md:text-6xl font-bold">Jared Rauff</h1>
                        <h2 className="text-xl md:text-2xl font-light mt-2">Software Engineer</h2>
                        <p className="text-lg md:text-xl mt-4">
                            Passionate software engineer with a proven track record in delivering high-quality solutions,
                            adept at frontend development, backend integration, and problem-solving in high-pressure environments.
                        </p>
                        <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
              <span className="bg-gray-800 px-4 py-2 rounded-full text-sm font-semibold">
                React.js
              </span>
                            <span className="bg-gray-800 px-4 py-2 rounded-full text-sm font-semibold">
                Next.js
              </span>
                            <span className="bg-gray-800 px-4 py-2 rounded-full text-sm font-semibold">
                TypeScript
              </span>
                            <span className="bg-gray-800 px-4 py-2 rounded-full text-sm font-semibold">
                Docker
              </span>
                            <span className="bg-gray-800 px-4 py-2 rounded-full text-sm font-semibold">
                Kubernetes
              </span>
                            <span className="bg-gray-800 px-4 py-2 rounded-full text-sm font-semibold">
                GraphQL
              </span>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center md:justify-end">
                        <img
                            src="/path/to/your-photo.jpg" // Replace with actual image path
                            alt="Jared Rauff"
                            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
