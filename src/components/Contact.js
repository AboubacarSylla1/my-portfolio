import React from 'react';

export default function About() {
    return (
        <section id="contact" className="mb-5">
            <h2 className="mb-4">Contact</h2>
            <p>If you’d like to get in touch, feel free to send me an email or connect on LinkedIn:</p>

            <div className="d-flex flex-column flex-sm-row gap-3">
                <a href="mailto:syllaaboubacar2055@gmail.com" className="btn btn-outline-primary">
                    syllaaboubacar2055@gmail.com
                </a>
                <a
                    href="https://www.linkedin.com/in/aboubacar-sidiki-sylla-4a9780335/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-secondary"
                >
                    Visit my LinkedIn
                </a>
            </div>
        </section>
    );
}