
import React from 'react';
import { Zap, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  return (
    <header className="py-10 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center md:items-start mb-6">
          <div className="inline-block mb-2 px-2 py-1 bg-retro-dark-purple border-2 border-retro-neon-blue rounded">
            <span className="font-vt323 text-retro-neon-blue text-sm tracking-widest">RESUME.SYS</span>
          </div>
          <h1 className="font-press-start text-3xl md:text-5xl text-white mb-4 animate-neon-pulse text-center md:text-left">
            John Doe
          </h1>
          <h2 className="font-vt323 text-xl md:text-2xl text-retro-neon-pink mb-6 text-center md:text-left">
            &lt; Frontend Developer /&gt;
          </h2>
          
          <p className="font-vt323 text-lg md:text-xl text-white max-w-2xl mb-6 text-center md:text-left">
            Creating pixel-perfect experiences with code. Specializing in React, 
            TypeScript, and animations that bring interfaces to life.
          </p>
          
          <div className="flex space-x-4">
            <a href="#contact" className="retro-btn">
              <Zap className="inline-block w-4 h-4 mr-1" /> Contact
            </a>
            <div className="flex space-x-3">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                className="bg-retro-dark-purple p-2 rounded border-2 border-retro-neon-cyan hover:bg-retro-grid transition-all duration-300">
                <Github className="w-5 h-5 text-retro-neon-cyan" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                className="bg-retro-dark-purple p-2 rounded border-2 border-retro-neon-blue hover:bg-retro-grid transition-all duration-300">
                <Linkedin className="w-5 h-5 text-retro-neon-blue" />
              </a>
              <a href="mailto:example@example.com" 
                className="bg-retro-dark-purple p-2 rounded border-2 border-retro-neon-pink hover:bg-retro-grid transition-all duration-300">
                <Mail className="w-5 h-5 text-retro-neon-pink" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
