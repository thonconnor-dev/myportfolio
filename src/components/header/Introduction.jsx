import React from "react";
import { useTheme } from "../../context/ThemeContext";

function Introduction() {
    const { isDark } = useTheme();
    return (
        <div className={`min-h-screen flex flex-col justify-center items-center p-6 ${isDark ? 'bg-gray-900' : 'bg-gradient-to-b from-white to-gray-100'}`}>
            <div className="text-center space-y-4 font-mono">
                <h1 className={`text-4xl md:text-5xl font-bold animate-fade-in ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>
                    $ echo "Hello World"
                </h1>
                <h1 className={`text-3xl md:text-4xl font-semibold ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                    I'm Sethon Setha
                </h1>
                <h2 className={`text-xl md:text-2xl font-medium ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
                    Software Engineer
                </h2>
            </div>
        </div>
    );
}

export default Introduction;
