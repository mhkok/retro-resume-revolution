
import React from 'react';
import { Briefcase, ExternalLink } from 'lucide-react';
import ResumeSection from './ResumeSection';

interface JobProps {
  period: string;
  company: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

const Job = ({ period, company, title, description, technologies, link }: JobProps) => {
  return (
    <div className="mb-8 last:mb-0 bg-retro-dark-purple/70 rounded p-4 border border-gray-700 transition-all duration-300 hover:shadow-[0_0_10px_rgba(50,50,255,0.3)]">
      <div className="font-pixel text-xs text-retro-neon-blue mb-2">{period}</div>
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl text-white">{title}</h3>
        <div className="flex items-center">
          <span className="text-retro-neon-pink mr-2">{company}</span>
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-retro-neon-blue hover:text-retro-neon-cyan transition-colors">
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span key={index} className="text-xs bg-retro-grid px-2 py-1 rounded text-retro-neon-cyan border border-retro-neon-cyan/50">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

const Experience = () => {
  const jobs = [
    {
      period: "2021 - PRESENT",
      company: "TechCorp Inc.",
      title: "Senior Frontend Developer",
      description: "Led the development of the company's flagship product, implementing modern React patterns and optimizing performance. Collaborated with designers to create an award-winning user interface.",
      technologies: ["React", "TypeScript", "Redux", "Tailwind"],
      link: "https://example.com"
    },
    {
      period: "2018 - 2021",
      company: "WebWizards LLC",
      title: "Frontend Developer",
      description: "Developed responsive web applications using React and worked on improving the user experience. Implemented state management solutions and optimized rendering performance.",
      technologies: ["React", "JavaScript", "SCSS", "RESTful APIs"],
      link: "https://example.com"
    },
    {
      period: "2016 - 2018",
      company: "PixelPerfect Studios",
      title: "UI Developer",
      description: "Created pixel-perfect interfaces from design mockups and collaborated with backend developers to integrate APIs. Improved site performance and accessibility.",
      technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
      link: "https://example.com"
    }
  ];

  return (
    <ResumeSection 
      title="WORK.EXP" 
      icon={<Briefcase className="w-5 h-5 text-retro-neon-pink" />} 
      color="pink"
      delay={600}
    >
      <div className="space-y-6">
        {jobs.map((job, index) => (
          <Job
            key={index}
            period={job.period}
            company={job.company}
            title={job.title}
            description={job.description}
            technologies={job.technologies}
            link={job.link}
          />
        ))}
      </div>
    </ResumeSection>
  );
};

export default Experience;
