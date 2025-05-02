
import React from "react";
import { useTheme } from "../../context/ThemeContext";

function Experiences() {
    const { isDark } = useTheme();
    const skills = [
        { category: "Frontend", items: ["React", "Vue.js", "HTML5", "CSS3", "JavaScript", "Tailwind CSS"] },
        { category: "Backend", items: ["Node.js", "Python", "Java", "Spring Boot", "RESTful APIs"] },
        { category: "Database", items: ["MongoDB", "PostgreSQL", "MySQL", "Redis"] },
        { category: "DevOps", items: ["Docker", "Kubernetes", "AWS", "CI/CD", "Git"] }
    ];

    const experiences = [
        {
            company: "Tech Solutions Inc.",
            position: "Senior Software Engineer",
            period: "2021 - Present",
            responsibilities: [
                "Led development of microservices architecture using Node.js and Spring Boot",
                "Implemented CI/CD pipelines reducing deployment time by 60%",
                "Mentored junior developers and conducted code reviews"
            ]
        },
        {
            company: "Digital Innovations Corp",
            position: "Software Developer",
            period: "2019 - 2021",
            responsibilities: [
                "Developed responsive web applications using React and Vue.js",
                "Optimized database queries improving application performance by 40%",
                "Collaborated with UX team to implement modern user interfaces"
            ]
        }
    ];

    return (
        <section id="experience" className={`min-h-screen py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
            <div className="max-w-6xl mx-auto px-4">
                <h2 className={`text-3xl font-bold mb-12 text-center font-mono ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>$ ls ~/skills-and-experience</h2>
                
                {/* Skills Section */}
                <div className="mb-16">
                    <h3 className={`text-2xl font-semibold mb-6 font-mono ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>$ cat technical-skills.json</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {skills.map((skillSet, index) => (
                            <div key={index} className={`p-6 rounded-lg shadow-md ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
                                <h4 className={`text-xl font-medium mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{skillSet.category}</h4>
                                <div className="flex flex-wrap gap-2">
                                    {skillSet.items.map((skill, skillIndex) => (
                                        <span
                                            key={skillIndex}
                                            className={`px-3 py-1 rounded-full text-sm ${isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Experience Section */}
                <div>
                    <h3 className={`text-2xl font-semibold mb-6 font-mono ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>$ cat work-experience.md</h3>
                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <div key={index} className={`p-6 rounded-lg shadow-md ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
                                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                                    <div>
                                        <h4 className={`text-xl font-medium ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>{exp.company}</h4>
                                        <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{exp.position}</p>
                                    </div>
                                    <p className={`font-mono ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{exp.period}</p>
                                </div>
                                <ul className={`list-disc list-inside space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                    {exp.responsibilities.map((resp, respIndex) => (
                                        <li key={respIndex}>{resp}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experiences;