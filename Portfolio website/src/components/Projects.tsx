import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { Filter, Grid, List } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  period: string;
  description: string;
  techStack: string[];
  keyFeatures?: string[];
}

const Projects: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'Event Tracker',
      period: 'April 2025 – Present',
      description: 'A modern event management platform built with React, featuring Context API, Tailwind CSS, JWT authentication, and Supabase. It includes protected routes, real-time event tracking, QR code ticketing, and a responsive UI. The modular architecture supports a comprehensive dashboard, advanced search, and secure, scalable data handling with RLS policies.',
      techStack: ['React', 'Context API', 'Tailwind CSS', 'JWT', 'Supabase']
    },
    {
      id: 2,
      title: 'Travel Itinerary Builder',
      period: 'January 2025 – February 2025',
      description: 'A Travel Itinerary Builder built with React and TypeScript, using Zustand for state management and local storage persistence. It features drag-and-drop activity reordering, Tailwind CSS with dark mode, date-fns for date handling, and Lucide icons. Vite ensures fast builds, with ESLint and TypeScript maintaining code quality and safety.',
      techStack: ['React', 'TypeScript', 'Zustand', 'Tailwind CSS', 'Vite']
    },
    {
      id: 3,
      title: 'StudyWatch: Daily Study Tracker',
      period: 'May 2025 – Present',
      description: 'StudyWatch is a React-based study tracking application that helps parents monitor their children\'s academic progress. Built with React, TypeScript, and Tailwind CSS, it features real-time task management, study time tracking, messaging between parent and student, and comprehensive progress analytics through an intuitive dashboard interface.',
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Context API', 'Vite'],
      keyFeatures: [
        'Real-time task management',
        'Study time tracking',
        'Messaging between parent and student',
        'Progress analytics'
      ]
    },
    {
      id: 4,
      title: 'MakeMyTrip API Clone',
      period: 'May 2025 – Present',
      description: 'I built a scalable travel booking API inspired by MakeMyTrip using TypeScript with Node.js and Express for robust, type-safe backend development. The API enables users to search, book, and manage flights, hotels, and itineraries. It features MongoDB for document-based data storage, JWT authentication for secure user sessions, and integrates Redis (or alternatives) for caching and session management to boost performance.',
      techStack: ['TypeScript', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Redis']
    },
    {
      id: 5,
      title: 'Nirvana: Full Stack Signature Project',
      period: 'May 2025 – Present',
      description: 'Building Nirvana, a feature-rich travel booking web application inspired by MakeMyTrip, using the MERN stack with TypeScript. The platform enables users to search, compare, and book flights, hotels, and holiday packages with real-time availability and secure user management.',
      techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Redux Toolkit'],
      keyFeatures: [
        'Advanced filtering and search',
        'JWT authentication and authorization',
        'Payment processing with Razorpay/Stripe',
        'Location services with Google Maps API',
        'Admin dashboard',
        'QR code-based ticketing'
      ]
    }
  ];

  return (
    <section id="projects" className="bg-slate-100 dark:bg-slate-800/50">
      <div className="section-container">
        <div className="flex justify-between items-center">
          <h2 className="section-title">Projects</h2>
          
          <div className="flex space-x-2">
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md ${viewMode === 'grid' 
                ? 'bg-blue-500 text-white' 
                : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200'}`}
              aria-label="Grid view"
            >
              <Grid size={20} />
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md ${viewMode === 'list' 
                ? 'bg-blue-500 text-white' 
                : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200'}`}
              aria-label="List view"
            >
              <List size={20} />
            </button>
          </div>
        </div>
        
        <div className={`mt-10 ${
          viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
            : 'space-y-8'
        }`}>
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              viewMode={viewMode} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;