import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-3 mt-5">
      <div className="container text-center">
        <small>
          © {new Date().getFullYear()} Aboubacar Sylla. All rights reserved.
        </small>
      </div>
    </footer>
  );
}
