
import React from 'react';
import { Code, Palette, Cpu, Database, Rocket } from 'lucide-react';
import ResumeSection from './ResumeSection';

const SkillBar = ({ skill, level }: { skill: string; level: number }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-white">{skill}</span>
        <span className="text-retro-neon-pink">{level}%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-progress" style={{ width: `${level}%` }}></div>
      </div>
    </div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code className="w-5 h-5 text-retro-neon-pink" />,
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "HTML/CSS", level: 95 },
      ]
    },
    {
      title: "Design",
      icon: <Palette className="w-5 h-5 text-retro-neon-blue" />,
      skills: [
        { name: "UI/UX", level: 75 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Responsive Design", level: 90 },
      ]
    },
    {
      title: "Backend",
      icon: <Database className="w-5 h-5 text-retro-neon-cyan" />,
      skills: [
        { name: "Node.js", level: 70 },
        { name: "GraphQL", level: 65 },
        { name: "REST APIs", level: 80 },
      ]
    },
  ];

  return (
    <ResumeSection 
      title="SKILLS.EXE" 
      icon={<Cpu className="w-5 h-5 text-retro-neon-cyan" />} 
      color="cyan"
      delay={300}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-retro-dark-purple/70 rounded p-4 border border-gray-700">
            <div className="flex items-center mb-4">
              <div className="mr-2">{category.icon}</div>
              <h3 className="text-xl">{category.title}</h3>
            </div>
            <div>
              {category.skills.map((skill, skillIndex) => (
                <SkillBar key={skillIndex} skill={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 bg-retro-dark-purple/70 rounded p-4 border border-gray-700">
        <div className="flex items-center mb-4">
          <Rocket className="w-5 h-5 text-retro-neon-green mr-2" />
          <h3 className="text-xl">Languages</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-2 border border-retro-neon-green rounded transition-all hover:bg-retro-neon-green/20 duration-300">
            <span className="font-press-start text-xs text-retro-neon-green">ENG</span>
            <div className="text-white">Native</div>
          </div>
          <div className="text-center p-2 border border-retro-neon-blue rounded transition-all hover:bg-retro-neon-blue/20 duration-300">
            <span className="font-press-start text-xs text-retro-neon-blue">FRA</span>
            <div className="text-white">Fluent</div>
          </div>
          <div className="text-center p-2 border border-retro-neon-pink rounded transition-all hover:bg-retro-neon-pink/20 duration-300">
            <span className="font-press-start text-xs text-retro-neon-pink">ESP</span>
            <div className="text-white">Intermediate</div>
          </div>
          <div className="text-center p-2 border border-retro-neon-purple rounded transition-all hover:bg-retro-neon-purple/20 duration-300">
            <span className="font-press-start text-xs text-retro-neon-purple">DEU</span>
            <div className="text-white">Basic</div>
          </div>
        </div>
      </div>
    </ResumeSection>
  );
};

export default Skills;
