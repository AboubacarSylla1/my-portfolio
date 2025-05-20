import React from 'react';

export default function About() {
    return (
        <section id="projects" className="mb-5">
            <h2 className="mb-4">Projects</h2>

            <div className="row">
                {/* Projet 1 */}
                <div className="col-md-6 mb-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">GitHub Portfolio</h5>
                            <p className="card-text">
                                A personal site to showcase my coding projects and GitHub repositories.
                                Built with HTML, CSS, and hosted via GitHub Pages.
                            </p>
                            <a href="https://github.com/AboubacarSylla1/AboubacarSylla1.github.io" target="_blank" rel="noreferrer" className="btn btn-primary">
                                View on GitHub
                            </a>
                        </div>
                    </div>
                </div>

                {/* Projet 2 */}
                <div className="col-md-6 mb-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Coming Soon</h5>
                            <p className="card-text">
                                Another project will be added here soon. Stay tuned!
                            </p>
                            <a href="#" className="btn btn-secondary disabled">
                                Not available
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}