import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      className="bg-dark text-light py-3 mt-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container text-center">
        <small>
          © {new Date().getFullYear()} Aboubacar Sylla. All rights reserved.
        </small>
      </div>
    </motion.footer>
  );
}

