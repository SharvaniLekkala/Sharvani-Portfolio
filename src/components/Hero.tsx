import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowDownRight } from 'lucide-react';
import profile from '../assets/profile.jpeg';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-20 pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-optic-green/10 via-transparent to-transparent pointer-events-none dark:opacity-30" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">

        {/* ── Left: Text block ── */}
        <div className="w-full lg:max-w-2xl text-center lg:text-left flex flex-col items-center lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-full"
          >
            <p className="font-sans uppercase tracking-[0.2em] text-xs font-semibold text-gray-500 dark:text-gray-400 mb-6">
              Portfolio &mdash; {new Date().getFullYear()}
            </p>

            <h1 className="text-5xl md:text-7xl lg:text-8xl editorial-title text-gray-900 dark:text-white leading-[1.1] mb-6">
              Learn. Build.{' '}
              <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-optic-green to-emerald-400 font-sans font-bold italic pr-4">
                Repeat.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-light max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10">
              I am{' '}
              <span className="font-medium text-gray-900 dark:text-white">Sharvani Lekkala</span>
              , a final-year undergraduate passionate about building software that solves real-world problems.
            </p>

            {/* CTA + Social icons in one row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group flex items-center gap-2 pb-1 border-b border-gray-900 dark:border-white text-gray-900 dark:text-white font-sans uppercase tracking-widest text-sm font-semibold hover:text-optic-green hover:border-optic-green transition-all"
              >
                Selected Works
                <ArrowDownRight
                  size={16}
                  className="transform group-hover:translate-x-1 group-hover:translate-y-1 transition-transform"
                />
              </a>

              {/* Divider */}
              <span className="hidden sm:block w-px h-5 bg-gray-300 dark:bg-gray-600" />

              {/* Social icons – sit between text and image */}
              <div className="flex items-center gap-5">
                <a
                  href="https://github.com/SharvaniLekkala"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-500 dark:text-gray-400 hover:text-optic-green transition-colors"
                  aria-label="GitHub"
                >
                  <Github strokeWidth={1.5} size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/lekkala-sharvani/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-500 dark:text-gray-400 hover:text-optic-green transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin strokeWidth={1.5} size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Right: Profile image (square) ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center items-center w-full lg:w-auto shrink-0 z-20"
        >
          <div className="w-64 md:w-80 lg:w-96 aspect-square overflow-hidden rounded-2xl border border-gray-200 dark:border-onyx-light bg-gray-100 dark:bg-onyx-light/30 relative group shadow-2xl">
            <div className="absolute inset-0 bg-optic-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
            <img
              src={profile}
              alt="Sharvani Lekkala"
              className="w-full h-full object-cover object-top grayscale brightness-90 contrast-110 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
