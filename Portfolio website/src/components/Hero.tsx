import React, { useEffect, useRef } from 'react';
import { Cpu, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = `rgba(59, 130, 246, ${Math.random() * 0.5 + 0.2})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particleArray: Particle[] = [];
    const particleCount = Math.min(100, window.innerWidth / 20);

    for (let i = 0; i < particleCount; i++) {
      particleArray.push(new Particle());
    }

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].update();
        particleArray[i].draw();
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0 opacity-40 dark:opacity-20"
      ></canvas>
      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3">
            <div className="inline-block mb-4 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 font-medium animate-fadeIn">
              <Cpu size={16} className="inline-block mr-2" />
              Computer Science Student
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fadeInUp">
              <span className="text-blue-600 dark:text-blue-400">Tanish</span> Tyagi
            </h1>
            <p className="text-xl text-slate-700 dark:text-slate-300 mb-8 max-w-2xl animate-fadeInUp animation-delay-100">
              A passionate and detail-oriented computer science student with a strong foundation in software development and modern web technologies.
            </p>

            <div className="flex flex-wrap gap-4 mb-8 animate-fadeInUp animation-delay-200">
              <a
                href="mailto:tanishtyagi1408@gmail.com"
                className="btn btn-primary flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="mr-2" size={18} />
                Contact Me
              </a>
              <a
                href="https://github.com/Tanish1408"
                className="btn btn-outline flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2" size={18} />
                GitHub
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-slate-700 dark:text-slate-300 animate-fadeInUp animation-delay-300">
              <a
                href="tel:+918368054401"
                className="flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Phone size={18} className="mr-2" />
                +91 8368054401
              </a>
              <span className="hidden sm:inline">|</span>
              <a
                href="mailto:tanishtyagi1408@gmail.com"
                className="flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Mail size={18} className="mr-2" />
                tanishtyagi1408@gmail.com
              </a>
              <span className="hidden sm:inline">|</span>
              <a
                href="https://www.linkedin.com/in/tanish-tyagi-942533328"
                className="flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={18} className="mr-2" />
                LinkedIn
              </a>
            </div>
          </div>
          <div className="md:w-1/3 mt-12 md:mt-0 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <img
                src="/WhatsApp Image 2025-05-10 at 21.13.59.jpeg"
                alt="Tanish Tyagi"
                className="rounded-full w-full h-full object-cover border-4 border-blue-500 dark:border-blue-400"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;