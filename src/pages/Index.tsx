
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import CRTEffect from '@/components/CRTEffect';

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 5;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-retro-background p-4">
        <div className="max-w-md w-full">
          <h1 className="font-vt323 text-4xl text-center mb-6 neon-text-cyan">RETRO RESUME</h1>
          <div className="text-white font-vt323 text-xl mb-4 text-center">
            LOADING SYSTEM... {progress}%
          </div>
          <div className="h-4 bg-retro-dark-purple border-2 border-retro-neon-cyan mb-4">
            <div 
              className="h-full bg-gradient-to-r from-retro-neon-pink via-retro-neon-blue to-retro-neon-cyan"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="text-retro-neon-pink font-vt323 text-center">
            {progress < 30 && "INITIALIZING..."}
            {progress >= 30 && progress < 60 && "LOADING ASSETS..."}
            {progress >= 60 && progress < 90 && "RENDERING COMPONENTS..."}
            {progress >= 90 && "FINALIZING SETUP..."}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-retro-background">
      <CRTEffect className="min-h-screen">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Header />
          
          <main className="pt-4 pb-16">
            <Skills />
            <Experience />
            <Education />
            <Contact />
          </main>
          
          <footer className="border-t border-retro-grid pt-6 text-center">
            <p className="font-vt323 text-retro-neon-blue text-lg mb-2">
              &copy; {new Date().getFullYear()} John Doe
            </p>
            <p className="font-pixel text-xs text-gray-400">
              &lt;/&gt; with 💾 and 🕹️ - Retro 80s Style
            </p>
          </footer>
        </div>
      </CRTEffect>
    </div>
  );
};

export default Index;
