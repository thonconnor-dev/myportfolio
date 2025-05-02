import React from 'react';
import { useTheme } from '../../context/ThemeContext';

function AboutMe() {
    const { isDark } = useTheme();
    return (
        <section id="about" className={`min-h-screen flex items-center justify-center p-8 ${isDark ? 'bg-gray-900' : 'bg-gray-100'}`}>
            <div className={`max-w-4xl w-full rounded-lg shadow-lg p-8 font-mono ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
                <h2 className={`text-3xl font-bold mb-6 pb-2 border-b-2 ${isDark ? 'text-gray-300 border-gray-600' : 'text-gray-800 border-gray-200'}`}>$ cat about.md</h2>
                <div className={`space-y-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <p className="leading-relaxed">
                        Hello! I'm a passionate developer with a keen interest in building innovative solutions.
                        My journey in tech has equipped me with a diverse skill set in both frontend and backend development.
                    </p>
                    <p className="leading-relaxed">
                        I specialize in modern web technologies and love creating responsive, user-friendly applications
                        that solve real-world problems.
                    </p>
                    
                </div>
            </div>
        </section>
    );
}

export default AboutMe;