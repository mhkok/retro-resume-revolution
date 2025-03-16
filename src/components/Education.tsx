
import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import ResumeSection from './ResumeSection';

interface EducationItemProps {
  period: string;
  degree: string;
  institution: string;
  description?: string;
}

const EducationItem = ({ period, degree, institution, description }: EducationItemProps) => {
  return (
    <div className="mb-6 last:mb-0 bg-retro-dark-purple/70 rounded p-4 border border-gray-700 transition-all duration-300 hover:shadow-[0_0_10px_rgba(0,255,255,0.3)]">
      <div className="font-pixel text-xs text-retro-neon-blue mb-2">{period}</div>
      <h3 className="text-xl text-white mb-1">{degree}</h3>
      <div className="text-retro-neon-cyan mb-2">{institution}</div>
      {description && <p className="text-gray-300">{description}</p>}
    </div>
  );
};

interface CertificationProps {
  title: string;
  issuer: string;
  year: string;
}

const Certification = ({ title, issuer, year }: CertificationProps) => {
  return (
    <div className="bg-retro-grid p-3 border border-retro-neon-blue/50 rounded transition-all duration-300 hover:bg-retro-grid/50 hover:border-retro-neon-blue">
      <div className="text-white font-pixel">{title}</div>
      <div className="flex justify-between items-center">
        <span className="text-retro-neon-pink text-sm">{issuer}</span>
        <span className="text-retro-neon-blue text-xs">{year}</span>
      </div>
    </div>
  );
};

const Education = () => {
  const educationItems = [
    {
      period: "2014 - 2016",
      degree: "M.S. Computer Science",
      institution: "Tech University",
      description: "Specialized in Human-Computer Interaction and Frontend Engineering. Thesis on reactive UI patterns for complex web applications."
    },
    {
      period: "2010 - 2014",
      degree: "B.S. Computer Science",
      institution: "State University",
      description: "Graduated with honors. Active member of the Web Development Club and participated in multiple hackathons."
    }
  ];

  const certifications = [
    {
      title: "Advanced React Patterns",
      issuer: "Frontend Masters",
      year: "2022"
    },
    {
      title: "TypeScript Professional",
      issuer: "TypeScript Academy",
      year: "2021"
    },
    {
      title: "UI/UX Design Fundamentals",
      issuer: "Design School",
      year: "2020"
    },
    {
      title: "Web Performance Optimization",
      issuer: "Google Developers",
      year: "2019"
    }
  ];

  return (
    <ResumeSection 
      title="EDU.DAT" 
      icon={<GraduationCap className="w-5 h-5 text-retro-neon-blue" />} 
      color="blue"
      delay={900}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          {educationItems.map((item, index) => (
            <EducationItem
              key={index}
              period={item.period}
              degree={item.degree}
              institution={item.institution}
              description={item.description}
            />
          ))}
        </div>
        
        <div>
          <div className="mb-4 flex items-center">
            <Award className="w-5 h-5 text-retro-neon-blue mr-2" />
            <h3 className="text-xl text-retro-neon-blue font-vt323">Certifications</h3>
          </div>
          <div className="space-y-3">
            {certifications.map((cert, index) => (
              <Certification
                key={index}
                title={cert.title}
                issuer={cert.issuer}
                year={cert.year}
              />
            ))}
          </div>
        </div>
      </div>
    </ResumeSection>
  );
};

export default Education;
