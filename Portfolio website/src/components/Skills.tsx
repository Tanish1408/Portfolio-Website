import React from 'react';
import { Code, Database, Terminal, Globe, Layout, Server } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code size={24} />,
      skills: ['GOLANG', 'Java', 'Python', 'C/C++', 'JavaScript', 'TypeScript', 'HTML/CSS']
    },
    {
      title: 'Databases',
      icon: <Database size={24} />,
      skills: ['MySQL', 'MongoDB']
    },
    {
      title: 'Frameworks & Libraries',
      icon: <Layout size={24} />,
      skills: ['React', 'Node.js', 'Express', 'Material-UI', 'Fast-API']
    },
    {
      title: 'Developer Tools',
      icon: <Terminal size={24} />,
      skills: ['Vite', 'Git', 'Docker', 'Google Cloud Platform', 'VS Code', 'Visual Studio', 'Warp', 'XCode']
    },
    {
      title: 'AI & Prompt Engineering',
      icon: <Globe size={24} />,
      skills: ['ChatGPT', 'Grok', 'Deepseek', 'Gemini', 'Llama', 'Claude']
    },
    {
      title: 'Backend & Services',
      icon: <Server size={24} />,
      skills: ['Node.js', 'Express', 'RESTful APIs', 'JWT Authentication']
    }
  ];

  return (
    <section id="skills">
      <div className="section-container">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {skillCategories.map((category, index) => (
            <div key={index} className="card hover:border-blue-300 dark:hover:border-blue-600">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-lg mr-3">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="tech-tag"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Skills Proficiency</h3>
          
          <div className="grid gap-6">
            {['Front-end Development', 'Back-end Development', 'Database Design', 'Cloud Services', 'Problem Solving'].map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span>{skill}</span>
                  <span>{70 + (index * 5)}%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2.5">
                  <div 
                    className="bg-white h-2.5 rounded-full"
                    style={{ width: `${70 + (index * 5)}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;