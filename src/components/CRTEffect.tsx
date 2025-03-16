
import React, { ReactNode } from 'react';

interface CRTEffectProps {
  children: ReactNode;
  className?: string;
}

const CRTEffect = ({ children, className = "" }: CRTEffectProps) => {
  return (
    <div className={`relative crt overflow-hidden ${className}`}>
      <div className="scan-line"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-retro-black/40 pointer-events-none z-[1]"></div>
      {children}
    </div>
  );
};

export default CRTEffect;
