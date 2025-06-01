import React from 'react';
import { GraduationCap, Building, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      institution: 'Birla Institute of Technology and Science, Pilani',
      degree: 'Bachelor of Science in Computer Science',
      period: 'Aug. 2024 – May 2027',
      location: 'Pilani, Rajasthan',
      icon: <GraduationCap size={24} className="text-blue-500" />
    },
    {
      institution: 'Scaler School of Technology',
      degree: 'Bachelor of Science in Computer Science',
      period: 'Aug. 2024 – May 2027',
      location: 'Bengaluru, Karnataka',
      icon: <Building size={24} className="text-blue-500" />
    },
    {
      institution: 'Delhi Public School Greater Noida',
      degree: 'Class XII - 88%',
      period: '2022 - 2024',
      location: 'Greater Noida, Uttar Pradesh',
      icon: <Building size={24} className="text-blue-500" />
    },
    {
      institution: 'Delhi Public School Greater Noida',
      degree: 'Class X - 92%',
      period: '2022',
      location: 'Greater Noida, Uttar Pradesh',
      icon: <Building size={24} className="text-blue-500" />
    }
  ];

  return (
    <section id="education">
      <div className="section-container">
        <h2 className="section-title">Education</h2>
        
        <div className="mt-12 relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-900 transform -translate-x-1/2"></div>
          
          {/* Education Items */}
          <div className="space-y-12">
            {educationData.map((item, index) => (
              <div key={index} className={`md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot for desktop */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 mt-6">
                  <div className="w-6 h-6 bg-blue-500 rounded-full border-4 border-white dark:border-slate-900"></div>
                </div>
                
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-slate-200 dark:border-slate-700">
                    <div className="flex items-start mb-4">
                      <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg mr-4">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{item.institution}</h3>
                        <p className="text-blue-600 dark:text-blue-400">{item.degree}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-sm text-slate-600 dark:text-slate-400 mt-4">
                      <div className="flex items-center mr-4">
                        <MapPin size={16} className="mr-1" />
                        <span>{item.location}</span>
                      </div>
                      <div>{item.period}</div>
                    </div>
                  </div>
                </div>
                
                {/* Empty div for alignment */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;