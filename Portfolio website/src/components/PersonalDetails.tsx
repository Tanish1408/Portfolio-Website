import React from 'react';
import { CalendarDays, MapPin, Languages } from 'lucide-react';

const PersonalDetails: React.FC = () => {
  return (
    <section id="personal-details" className="bg-slate-100 dark:bg-slate-800/50">
      <div className="section-container">
        <h2 className="section-title">Personal Details</h2>
        
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 md:p-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 dark:bg-slate-700 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                  <CalendarDays size={24} className="text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold">Date of Birth</h3>
              </div>
              <p className="text-slate-700 dark:text-slate-300">August 14, 2006</p>
            </div>
            
            <div className="bg-blue-50 dark:bg-slate-700 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                  <MapPin size={24} className="text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold">Permanent Address</h3>
              </div>
              <p className="text-slate-700 dark:text-slate-300">
                Tower No.3, 203, Orford Block, Grand Forte Society, Sigma-4, Greater Noida
              </p>
            </div>
            
            <div className="bg-blue-50 dark:bg-slate-700 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                  <Languages size={24} className="text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold">Languages Spoken</h3>
              </div>
              <p className="text-slate-700 dark:text-slate-300">English, Hindi, Spanish (DELE A2 Certification)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalDetails;