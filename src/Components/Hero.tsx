'use client';
import React, { useState } from 'react';

const Hero = () => {
  const [darkMode, setDarkMode] = useState(true);

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? 'bg-[#0f0c29]' : 'bg-white'} relative min-h-screen overflow-hidden`}>
      {/* Simple Particle Background with CSS */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
      </div>

      {/* Hero Section Content */}
      <section
  className={`relative z-10 w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 text-${darkMode ? 'white' : 'black'}`}
>
  {/* Left Content */}
  <div className="flex-1 space-y-6 text-center md:text-left">
    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
      Hi, I&rsquo;m <span className="text-[#00FFFF]">Wazeema Amir</span>
    </h1>

    <p className={`max-w-xl mx-auto md:mx-0 text-base leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
      A Frontend Developer crafting modern, high-performance web experiences. <br />
      Specialized in building dynamic and scalable applications with <strong>Next.js</strong>, <strong>TypeScript</strong>, and <strong>Sanity CMS</strong>.<br />
      I focus on clean code, performance, and exceptional user experience. <br />
      🚀 Let&rsquo;s build something amazing together.
    </p>

    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
      <a
        href="/CV.rtf"
        download="/CV.rtf"
        className="bg-[#00FFFF] text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
      >
        Download CV
      </a>
    </div>

    {/* Social Icons */}
    <div className="flex gap-6 mt-6 justify-center md:justify-start">
      <a href="https://www.linkedin.com/in/wazeema-amir-5335bb2ba/" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
        LinkedIn
      </a>
      <a href="https://github.com/WazeemaAamir" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
        GitHub
      </a>
      <a href="https://x.com/A54154Amir" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
        Twitter
      </a>
    </div>
  </div>

  {/* Right Image */}
  <div className="flex-1 mt-10 md:mt-0 flex justify-center md:justify-end">
    <img
      src="/Portfolio.jpg"
      alt="Developer"
      className="w-72 h-72 md:w-[350px] md:h-[350px] object-cover rounded-full shadow-2xl border-4 border-[#00FFFF]"
    />
  </div>
</section>

      <style jsx>{`
        .particle {
          position: absolute;
          width: 20px;
          height: 15px;
          background: ${darkMode ? '#00FFFF' : '#007BFF'};
          border-radius: 50%;
          animation: moveParticle 10s linear infinite;
          opacity: 0.7;
        }
        .particle:nth-child(1) {
          top: 20%;
          left: 15%;
          animation-delay: 0s;
        }
        .particle:nth-child(2) {
          top: 40%;
          left: 70%;
          animation-delay: 3s;
        }
        .particle:nth-child(3) {
          top: 60%;
          left: 40%;
          animation-delay: 6s;
        }
        .particle:nth-child(4) {
          top: 80%;
          left: 80%;
          animation-delay: 9s;
        }
        .particle:nth-child(5) {
          top: 50%;
          left: 20%;
          animation-delay: 12s;
        }
        @keyframes moveParticle {
          0% { transform: translate(0, 0); }
          50% { transform: translate(30px, 30px); }
          100% { transform: translate(0, 0); }
        }
      `}</style>
    </div>
  );
};

export default Hero;