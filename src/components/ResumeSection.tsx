
import React, { ReactNode, useState, useEffect } from 'react';

interface ResumeSectionProps {
  title: string;
  icon: ReactNode;
  color: 'pink' | 'blue' | 'cyan' | 'green' | 'purple';
  children: ReactNode;
  delay?: number;
}

const ResumeSection = ({ title, icon, color, children, delay = 0 }: ResumeSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);

  const colorMap = {
    pink: {
      border: "neon-border-pink",
      text: "text-retro-neon-pink",
      bg: "bg-retro-neon-pink/10"
    },
    blue: {
      border: "neon-border-blue",
      text: "text-retro-neon-blue",
      bg: "bg-retro-neon-blue/10"
    },
    cyan: {
      border: "neon-border-cyan",
      text: "text-retro-neon-cyan",
      bg: "bg-retro-neon-cyan/10"
    },
    green: {
      border: "neon-border-green",
      text: "text-retro-neon-green",
      bg: "bg-retro-neon-green/10"
    },
    purple: {
      border: "border-retro-neon-purple",
      text: "text-retro-neon-purple",
      bg: "bg-retro-neon-purple/10"
    },
  };

  const styles = colorMap[color];

  return (
    <section className={`mb-10 transform transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className={`${styles.border} rounded-lg pixel-corners p-6 backdrop-blur-sm relative overflow-hidden bg-retro-dark-purple/80`}>
        <div className={`absolute top-0 left-0 w-full h-1 ${styles.bg}`}></div>
        <div className="flex items-center mb-6">
          <div className={`${styles.bg} p-2 rounded-full mr-3`}>
            {icon}
          </div>
          <h2 className={`font-press-start ${styles.text} text-xl`}>
            {title}
          </h2>
        </div>
        <div className="font-vt323 text-lg">
          {children}
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
