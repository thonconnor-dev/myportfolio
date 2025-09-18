import React from "react";
import { useTheme } from "../../context/ThemeContext";

function Projects() {
  const { isDark } = useTheme();
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform with real-time inventory management",
      technologies: ["React", "Node.js", "MongoDB", "WebSocket"],
      githubUrl: "https://github.com/username/ecommerce-platform",
      demoUrl: "https://demo-ecommerce.example.com",
      stars: 128,
      forks: 45,
    },
    {
      title: "Task Management System",
      description: "Collaborative task management tool with real-time updates",
      technologies: ["Vue.js", "Express", "PostgreSQL", "Socket.io"],
      githubUrl: "https://github.com/username/task-manager",
      demoUrl: "https://task-manager-demo.example.com",
      stars: 89,
      forks: 23,
    },
    {
      title: "AI Image Generator",
      description: "Web application that generates images using AI models",
      technologies: ["React", "Python", "TensorFlow", "Flask"],
      githubUrl: "https://github.com/username/ai-image-gen",
      demoUrl: "https://ai-image-demo.example.com",
      stars: 256,
      forks: 78,
    },
  ];

  return (
    <section
      id="profprojects"
      className={`min-h-screen py-20 ${
        isDark ? "bg-gray-900 text-gray-300" : "bg-gray-100 text-gray-600"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center font-mono">
          $ ls ~/projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg border transition-colors duration-300 ${
                isDark
                  ? "bg-gray-800 border-gray-600 hover:border-gray-500"
                  : "bg-white border-gray-300 hover:border-gray-400"
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-mono font-semibold">
                  {project.title}
                </h3>
                <div className="flex items-center space-x-3 text-sm">
                  <span className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {project.stars}
                  </span>
                  <span className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {project.forks}
                  </span>
                </div>
              </div>

              <p
                className={`mb-4 font-mono text-sm ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {project.description}
              </p>

              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-2 py-1 rounded text-xs font-mono ${
                        isDark
                          ? "bg-gray-700 text-gray-300"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4 font-mono text-sm">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-colors duration-300 ${
                    isDark
                      ? "text-gray-300 hover:text-gray-400"
                      : "text-gray-600 hover:text-gray-700"
                  }`}
                >
                  $ git clone
                </a>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-colors duration-300 ${
                    isDark
                      ? "text-gray-300 hover:text-gray-400"
                      : "text-gray-600 hover:text-gray-700"
                  }`}
                >
                  $ npm run demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
