import React from 'react';

export default function About() {
    return (
        <section id="skills" className="mb-5">
            <h2 className="mb-4">Skills</h2>

            <div className="row">
                <div className="col-md-3 col-6 mb-3">
                    <span className="badge bg-primary p-2 w-100">HTML</span>
                </div>
                <div className="col-md-3 col-6 mb-3">
                    <span className="badge bg-success p-2 w-100">CSS</span>
                </div>
                <div className="col-md-3 col-6 mb-3">
                    <span className="badge bg-warning text-dark p-2 w-100">JavaScript</span>
                </div>
                <div className="col-md-3 col-6 mb-3">
                    <span className="badge bg-info text-dark p-2 w-100">React</span>
                </div>
                <div className="col-md-3 col-6 mb-3">
                    <span className="badge bg-secondary p-2 w-100">Bootstrap</span>
                </div>
                <div className="col-md-3 col-6 mb-3">
                    <span className="badge bg-dark p-2 w-100">Git & GitHub</span>
                </div>
                {/* Ajoute d'autres compétences ici */}
            </div>
        </section>
    );
}