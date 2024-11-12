import { JSX } from 'preact';

export default function HeroTwo(): JSX.Element {
    return (
        <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-20 overflow-hidden">
            {/* Animated Background Circles */}
            <div className="absolute inset-0 flex justify-center items-center -z-10">
                <div className="w-72 h-72 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-30 blur-xl animate-pulse" />
                <div className="w-96 h-96 bg-gradient-to-r from-green-500 to-teal-400 rounded-full opacity-20 blur-xl animate-ping" />
            </div>

            <div className="container mx-auto px-6 text-center md:text-left relative z-10">
                <div className="flex flex-col md:flex-row md:items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
                            Jared Rauff
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-light mt-2 animate-fadeIn">
                            Software Engineer
                        </h2>
                        <p className="text-lg md:text-xl mt-4 leading-relaxed animate-fadeIn">
                            I’m a passionate software engineer with a flair for creative problem-solving and a dedication
                            to delivering high-quality solutions. I thrive in challenging environments, and I bring an
                            innovative mindset to every project I work on.
                        </p>

                        {/* Skill Showcase */}
                        <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
                            <SkillBadge skill="React.js" />
                            <SkillBadge skill="Next.js" />
                            <SkillBadge skill="TypeScript" />
                            <SkillBadge skill="Docker" />
                            <SkillBadge skill="Kubernetes" />
                            <SkillBadge skill="GraphQL" />
                        </div>

                        {/* Typewriter Animation */}
                        <div className="mt-6 text-sm font-light animate-typing text-gray-400">
                            Skilled in: Java, Spring Boot, GraphQL, Docker, Kubernetes, Problem-Solving, Code Quality...
                        </div>
                    </div>

                    <div className="md:w-1/2 flex justify-center md:justify-end animate-scaleIn">
                        <img
                            src="/path/to/your-photo.jpg" // Replace with actual image path
                            alt="Jared Rauff"
                            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-2xl transform transition duration-300 hover:scale-105"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

// Component for skill badges with hover and pulse effect
function SkillBadge({ skill }: { skill: string }) {
    return (
        <span className="bg-gray-800 px-4 py-2 rounded-full text-sm font-semibold transform transition duration-300 hover:bg-purple-600 hover:scale-105 hover:text-white">
      {skill}
    </span>
    );
}
