import React from 'react';

export default function Contact() {
    return (
        <section id="contact" className="mb-5">
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
        </section>
    );
}
