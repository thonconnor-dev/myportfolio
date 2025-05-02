import React from 'react';
import './App.css';
import Introduction from "./components/header/Introduction.jsx";
import NavHeader from "./components/nav/NavHeader.jsx";
import Experiences from "./components/experiences/Experiences.jsx";
import AboutMe from "./components/about/AboutMe.jsx";
import Projects from "./components/projects/Projects.jsx";
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/theme/ThemeToggle';

function App() {
    return (
        <ThemeProvider>
            <div>
                <NavHeader />
                <Introduction />
                <AboutMe />
                <Experiences />
                <Projects />
                <ThemeToggle />
            </div>
        </ThemeProvider>
    );
}
export default App;