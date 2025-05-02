import React from "react";
import { useTheme } from "../../context/ThemeContext";
import ThemeToggle from "../theme/ThemeToggle";

function NavHeader() {
    const { isDark } = useTheme();
    const handleClick = (e) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <nav className={`fixed top-0 right-0 p-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            <div className="flex items-center space-x-6">
            <ul className="flex space-x-6">
                <li>
                    <a href="#about" onClick={handleClick} className={`${isDark ? 'text-gray-300 hover:text-white hover:border-white' : 'text-gray-700 hover:text-gray-900 hover:border-gray-900'} border-b-2 border-transparent transition-all duration-300`}>About Me</a>
                </li>
                <li>
                    <a href="#experience" onClick={handleClick} className={`${isDark ? 'text-gray-300 hover:text-white hover:border-white' : 'text-gray-700 hover:text-gray-900 hover:border-gray-900'} border-b-2 border-transparent transition-all duration-300`}>Professional Experience</a>
                </li>
                <li>
                    <a href="#projects" onClick={handleClick} className={`${isDark ? 'text-gray-300 hover:text-white hover:border-white' : 'text-gray-700 hover:text-gray-900 hover:border-gray-900'} border-b-2 border-transparent transition-all duration-300`}>Projects</a>
                </li>
            </ul>
            <ThemeToggle />
            </div>
        </nav>
    );
}
export default NavHeader;