import React from 'react';
import { BookOpen, Code, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-slate-100 dark:bg-slate-800/50">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 md:p-8 mt-8">
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
            A passionate and detail-oriented computer science student with a strong foundation in software 
            development and modern web technologies. Seeking opportunities to apply technical and 
            problem-solving skills in a dynamic environment to contribute to impactful projects and 
            continuous learning.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-blue-50 dark:bg-slate-700 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-500 dark:bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Code className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Software Development</h3>
              <p className="text-slate-700 dark:text-slate-300">
                Proficient in multiple programming languages and frameworks with a focus on creating 
                efficient, scalable solutions.
              </p>
            </div>
            
            <div className="bg-blue-50 dark:bg-slate-700 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-500 dark:bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Continuous Learning</h3>
              <p className="text-slate-700 dark:text-slate-300">
                Committed to staying updated with the latest technologies and best practices in the rapidly evolving tech landscape.
              </p>
            </div>
            
            <div className="bg-blue-50 dark:bg-slate-700 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-500 dark:bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Globe className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Language Skills</h3>
              <p className="text-slate-700 dark:text-slate-300">
                Fluent in English and Hindi, with DELE A2 Certification in Spanish, enabling effective communication across diverse environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;