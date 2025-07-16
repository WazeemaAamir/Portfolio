"use client";

import React from "react";

const Footer = () => {
    return (
      <footer className="bg-[#0f172a] text-white py-10 px-4 md:px-20 border-t border-gray-700">
        <div className="container text-center">
          <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Wazeema Amir. All rights reserved.
        </p>
          <div className="mt-4">
            <a href="https://www.linkedin.com/in/wazeema-amir-5335bb2ba/" target="_blank" rel="noopener noreferrer" className="text-white mx-4">
              LinkedIn
            </a>
            <a href="https://github.com/WazeemaAamir" target="_blank" rel="noopener noreferrer" className="text-white mx-4">
              GitHub
            </a>
            <a href="https://x.com/A54154Amir" target="_blank" rel="noopener noreferre" className="text-white mx-4">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  