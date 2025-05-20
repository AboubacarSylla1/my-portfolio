import React from 'react';
import { motion } from 'framer-motion';

export default function Projects() {
    return (
        <motion.section
            id="projects"
            className="mb-5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <h2 className="mb-4">Projects</h2>

            <div className="row">
                {/* Projet 1 : GitHub Portfolio (HTML/CSS) */}
                <div className="col-md-6 mb-4">
                    <div className="card h-100 shadow-sm">
                        <img
                            src="/public/assets/logos/html5.svg"
                            alt="HTML5 logo"
                            className="card-img-top p-4"
                            style={{ height: '150px', objectFit: 'contain' }}
                        />
                        <div className="card-body">
                            <h5 className="card-title">GitHub Portfolio</h5>
                            <p className="card-text">
                                A simple portfolio site built with HTML & CSS, hosted on GitHub Pages. It was my first step into web development.
                            </p>
                            <a
                                href="https://github.com/AboubacarSylla1/AboubacarSylla1.github.io"
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-primary"
                            >
                                View on GitHub
                            </a>
                        </div>
                    </div>
                </div>

                {/* Projet 2 : React Portfolio */}
                <div className="col-md-6 mb-4">
                    <div className="card h-100 shadow-sm">
                        <img
                            src="/public/assets/logos/react.svg"
                            alt="React logo"
                            className="card-img-top p-4"
                            style={{ height: '150px', objectFit: 'contain' }}
                        />
                        <div className="card-body">
                            <h5 className="card-title">React Portfolio</h5>
                            <p className="card-text">
                                This portfolio was built with React and Bootstrap. It includes dark mode, smooth animations and a responsive layout.
                            </p>
                            <a
                                href="https://github.com/AboubacarSylla1/my-portfolio"
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-primary"
                            >
                                View on GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
