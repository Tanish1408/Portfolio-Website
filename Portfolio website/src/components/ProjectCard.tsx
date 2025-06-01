import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Calendar, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  period: string;
  description: string;
  techStack: string[];
  keyFeatures?: string[];
}

interface ProjectCardProps {
  project: Project;
  viewMode: 'grid' | 'list';
}

const ProjectModal = ({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) => {
  const getRandomGradient = (id: number) => {
    const gradients = [
      'from-blue-500 to-cyan-400',
      'from-purple-500 to-pink-500',
      'from-green-500 to-teal-400',
      'from-yellow-400 to-orange-500',
      'from-blue-600 to-indigo-600',
    ];
    return gradients[id % gradients.length];
  };

  return createPortal(
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-slate-800 max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl transition-transform duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`h-3 w-full bg-gradient-to-r ${getRandomGradient(project.id)} rounded-t-xl`}></div>
        <div className="p-6">
          <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
            <Calendar size={16} className="mr-2" />
            <span>{project.period}</span>
          </div>

          <h3 className="text-2xl font-bold mt-3 text-slate-900 dark:text-white">{project.title}</h3>

          <p className="mt-4 text-slate-700 dark:text-slate-300">{project.description}</p>

          {project.keyFeatures && (
            <div className="mt-6">
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Key Features:</h4>
              <ul className="list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300">
                {project.keyFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Tech Stack:</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button onClick={onClose} className="btn btn-outline">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, viewMode }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const getRandomGradient = (id: number) => {
    const gradients = [
      'from-blue-500 to-cyan-400',
      'from-purple-500 to-pink-500',
      'from-green-500 to-teal-400',
      'from-yellow-400 to-orange-500',
      'from-blue-600 to-indigo-600',
    ];
    return gradients[id % gradients.length];
  };

  if (viewMode === 'list') {
    return (
      <div className="card hover:border-blue-300 dark:hover:border-blue-600">
        <div className="p-6">
          <div className="flex flex-col md:flex-row md:items-start justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
              <div className="flex items-center text-sm text-slate-600 dark:text-slate-400 mt-2">
                <Calendar size={16} className="mr-2" />
                <span>{project.period}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-3 md:mt-0">
              {project.techStack.slice(0, 3).map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
              {project.techStack.length > 3 && (
                <span className="tech-tag">+{project.techStack.length - 3}</span>
              )}
            </div>
          </div>

          <div className={`mt-4 transition-all duration-300 ${isExpanded ? 'max-h-[500px]' : 'max-h-20 overflow-hidden'}`}>
            <p className="text-slate-700 dark:text-slate-300">{project.description}</p>

            {project.keyFeatures && isExpanded && (
              <div className="mt-4">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Key Features:</h4>
                <ul className="list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300">
                  {project.keyFeatures.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {isExpanded && (
              <div className="mt-4">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button
            onClick={toggleExpand}
            className="mt-4 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center text-sm font-medium"
          >
            {isExpanded ? (
              <>
                Show less <ChevronUp size={16} className="ml-1" />
              </>
            ) : (
              <>
                Show more <ChevronDown size={16} className="ml-1" />
              </>
            )}
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="card h-full flex flex-col transition-transform hover:scale-[1.02]">
        <div className={`h-3 w-full bg-gradient-to-r ${getRandomGradient(project.id)} rounded-t-xl`}></div>
        <div className="p-6 flex flex-col h-full">
          <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
            <Calendar size={16} className="mr-2" />
            <span>{project.period}</span>
          </div>

          <h3 className="text-xl font-bold mt-3 text-slate-900 dark:text-white">{project.title}</h3>

          <p className="mt-4 text-slate-700 dark:text-slate-300 flex-grow line-clamp-4">{project.description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.techStack.slice(0, 4).map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
            {project.techStack.length > 4 && (
              <span className="tech-tag">+{project.techStack.length - 4}</span>
            )}
          </div>

          <button
            onClick={toggleExpand}
            className="mt-4 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center text-sm font-medium"
          >
            View details <ArrowRight size={16} className="ml-1" />
          </button>
        </div>
      </div>

      {isExpanded && <ProjectModal project={project} onClose={toggleExpand} />}
    </>
  );
};

export default ProjectCard;
