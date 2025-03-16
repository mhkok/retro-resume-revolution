
import React, { ReactNode } from 'react';

interface CRTEffectProps {
  children: ReactNode;
  className?: string;
}

const CRTEffect = ({ children, className = "" }: CRTEffectProps) => {
  return (
    <div className={`relative crt overflow-hidden ${className}`}>
      <div className="scan-line"></div>
      {children}
    </div>
  );
};

export default CRTEffect;
