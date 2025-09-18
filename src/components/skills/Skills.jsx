import React from "react";
import { useTheme } from "../../context/ThemeContext";

function Skills() {
  const { isDark } = useTheme();
  const skills = [
    {
      category: "Langage",
      items: ["Java", "Python"],
    },
    {
      category: "Frontend",
      items: ["React", "Vue.js", "HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
    },
    {
      category: "Frameworks",
      items: ["Spring Boot", "ReactJS"],
    },
    {
      category: "APIs Design",
      items: ["RESTful", "GraphQL", "gRpc"],
    },
    {
      category: "Database",
      items: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
    },
    {
      category: "DevOps",
      items: ["Docker", "Kubernetes", "AWS", "CI/CD", "Git"],
    },
    {
      category: "Testing Frameworks",
      items: ["Junit", "Mockito", "Karate", "Gatling", "Jest", "Playwright"],
    },
  ];

  return (
    <section
      id="skill"
      className={`min-h-screen py-20 ${isDark ? "bg-gray-900" : "bg-gray-50"}`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2
          className={`text-3xl font-bold mb-12 text-center font-mono ${
            isDark ? "text-gray-300" : "text-gray-800"
          }`}
        >
          $ ls ~/technical-skills
        </h2>

        {/* Skills Section */}
        <div className="mb-16">
          <h3
            className={`text-2xl font-semibold mb-6 font-mono ${
              isDark ? "text-gray-400" : "text-gray-700"
            }`}
          >
            $ cat technical-skills.json
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillSet, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg shadow-md ${
                  isDark ? "bg-gray-800" : "bg-white"
                }`}
              >
                <h4
                  className={`text-xl font-medium mb-4 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {skillSet.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillSet.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-1 rounded-full text-sm ${
                        isDark
                          ? "bg-gray-700 text-gray-300"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
