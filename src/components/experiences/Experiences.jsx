import React from "react";
import { useTheme } from "../../context/ThemeContext";

function Experiences() {
  const { isDark } = useTheme();

  const experiences = [
    {
      company: "Intuit Inc.",
      position: "Software Engineer II",
      period: "October 2019 – May 2025",
      responsibilities: [
        "Led development of AWS Lambda-based services to extract and convert sales documents into markdown for RAG-based CoPilot features, improving recommendation accuracy by 30%.",
        "Designed and implemented Graphql APIs for client lifecycle management in the QuickBooks ecosystem.",
        "Collaborated cross-functionally with UX teams to launch a client interaction dashboard, reducing product expert response time by 20%.",
        "Integrated Numaflow for high-throughput data pipelines, resolving consumer lag and enhancing processing scalability for large volumes up to 50M messages daily during peak.",
        "Participated in Agile ceremonies, contributing to sprint planning, estimation, and cross-team coordination.",
      ],
    },
    {
      company: "Kforce (Client: Intuit Inc.)",
      position: "Software Engineer",
      period: "March 2019 – September 2019",
      responsibilities: [
        "Delivered microservice POCs with Spring Boot and GraphQL for new QuickBooks features.",
        "Implemented gRPC-based service integrations with Protobuf, improving inter-service communication latency by 15%.",
        "Ensured high code reliability through automated testing and detailed documentation.",
      ],
    },
    {
      company: "Collabera (Client: Amdocs)",
      position: "Software Engineer",
      period: "March 2016 – March 2019",
      responsibilities: [
        "Migrated legacy systems to RESTful APIs, reducing onboarding time for new developers by 40%.",
        "Improved SQL performance by optimizing queries, reducing execution time on high-volume reports from minutes to seconds.",
        "Created Linux automation scripts for ETL batch jobs, saving 5+ hours/week in manual intervention.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className={`min-h-screen py-20 ${isDark ? "bg-gray-900" : "bg-gray-50"}`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2
          className={`text-3xl font-bold mb-12 text-center font-mono ${
            isDark ? "text-gray-300" : "text-gray-800"
          }`}
        >
          $ ls ~/experiences
        </h2>

        {/* Experience Section */}
        <div>
          <h3
            className={`text-2xl font-semibold mb-6 font-mono ${
              isDark ? "text-gray-400" : "text-gray-700"
            }`}
          >
            $ cat work-experience.md
          </h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg shadow-md ${
                  isDark ? "bg-gray-800" : "bg-white"
                }`}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <div>
                    <h4
                      className={`text-xl font-medium ${
                        isDark ? "text-gray-300" : "text-gray-800"
                      }`}
                    >
                      {exp.company}
                    </h4>
                    <p
                      className={`text-lg ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {exp.position}
                    </p>
                  </div>
                  <p
                    className={`font-mono ${
                      isDark ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {exp.period}
                  </p>
                </div>
                <ul
                  className={`list-disc list-inside space-y-2 ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
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
