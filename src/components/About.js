import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <motion.section
            id="about"
            className="mb-5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <h2 className="mb-3">About Me</h2>
            <p>
                I'm Aboubacar Sylla, a passionate Computer Science student eager to build real-world applications and deepen my skills in web development.
                I enjoy learning new technologies, solving problems, and contributing to open-source projects.
            </p>
            <p>
                I'm currently looking for internships or collaborations to apply my skills in frontend development, especially with React, JavaScript, and modern frameworks.
            </p>
        </motion.section>
    );
}

