import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <motion.section
            id="contact"
            className="mb-5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <h2 className="mb-4">Contact</h2>
            <p>If you’d like to get in touch, send me a message through this form:</p>

            <form
                action="https://formspree.io/f/mzzrqzgl"
                method="POST"
                className="mt-4"
            >
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" name="name" id="name" required className="form-control" />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" name="email" id="email" required className="form-control" />
                </div>

                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea name="message" id="message" rows="5" required className="form-control"></textarea>
                </div>

                <button type="submit" className="btn btn-primary">Send</button>
            </form>

            {/* Email and LinkedIn links */}
            <div className="d-flex flex-column flex-sm-row gap-3 mt-4">
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
        </motion.section>
    );
}

