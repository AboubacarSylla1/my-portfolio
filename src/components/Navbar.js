import React, { useEffect, useState } from 'react';

export default function Navbar() {
    const [theme, setTheme] = useState('light');

    // Appliquer le thème au body quand il change
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <nav className={`navbar navbar-expand-lg ${theme === 'light' ? 'navbar-light bg-light' : 'navbar-dark bg-dark'}`}>
            <div className="container">
                <a className="navbar-brand" href="#home">Aboubacar Sylla</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                        <li className="nav-item">
                            <button onClick={toggleTheme} className="btn btn-sm btn-outline-secondary ms-3">
                                {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
