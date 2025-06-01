import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Tanish Tyagi</h2>
            <p className="text-slate-300 mb-6 max-w-md">
              A passionate and detail-oriented computer science student with a strong foundation in 
              software development and modern web technologies.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Tanish1408"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/tanish-tyagi-942533328"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:tanishtyagi1408@gmail.com"
                className="text-slate-300 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
              <a
                href="tel:+918368054401"
                className="text-slate-300 hover:text-white transition-colors"
                aria-label="Phone"
              >
                <Phone size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-slate-300 hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#education" className="text-slate-300 hover:text-white transition-colors">Education</a>
              </li>
              <li>
                <a href="#projects" className="text-slate-300 hover:text-white transition-colors">Projects</a>
              </li>
              <li>
                <a href="#skills" className="text-slate-300 hover:text-white transition-colors">Skills</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-0.5" />
                <div>
                  <p className="text-slate-300">+91 8368054401</p>
                  <p className="text-slate-300">+91 9108527540</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-0.5" />
                <p className="text-slate-300">tanishtyagi1408@gmail.com</p>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-0.5" />
                <p className="text-slate-300">Greater Noida, Uttar Pradesh</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} Tanish Tyagi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;