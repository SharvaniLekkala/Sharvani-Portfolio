import React, { useState } from 'react';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import { skills } from '../data/skills';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Home: React.FC = () => {
  // Experience Data Placeholder
  const experiences = [
  {
    id: "exp-1",
    company: "MeitY Funded Research Project",
    role: "Software Engineering Intern — Backend & NLP Systems",
    duration: "Dec 2025 – Mar 2026",
    description:
      "Designed and optimized multilingual NLP data pipelines, implemented word-alignment algorithms achieving 81% alignment accuracy, built modular Python utilities for corpus processing, and co-authored a research paper on the developed pipeline.",
    techStack: [
      "Python",
      "NLP",
      "Word Alignment",
      "Data Pipelines",
      "Corpus Processing"
    ]
  },
  {
    id: "exp-2",
    company: "IIIT Kottayam",
    role: "Software Engineering Intern — ML Systems & Data Engineering",
    duration: "May 2025 – Jul 2025",
    description:
      "Engineered Python-based data pipelines for IMU sensor time-series datasets, implemented preprocessing and feature extraction workflows, and developed reusable analysis modules with visualizations for clinical ML research.",
    techStack: [
      "Python",
      "Machine Learning",
      "Time-Series",
      "Pandas",
      "Data Engineering"
    ]
  }
];

  return (
    <main className="bento-court min-h-screen">
      <Hero />
      
      {/* ── COURT LINE DIVIDER ── */}
      <div className="court-divider"></div>

      {/* ── ABOUT SECTION ── */}
      <section id="about" className="py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="editorial-title text-4xl md:text-5xl text-gray-900 dark:text-white mb-6">
              Philosophy
            </h2>
            <p className="font-sans uppercase tracking-[0.2em] text-xs font-semibold text-optic-green">
              Engineering Principles
            </p>
          </div>
          <div className="md:col-span-8 text-lg text-gray-600 dark:text-gray-400 font-light leading-relaxed">
            <p className="mb-6">
              I believe great engineering is about solving meaningful problems through <span className="text-gray-900 dark:text-white font-medium">clean architecture</span>, <span className="text-gray-900 dark:text-white font-medium">scalable systems</span>, and thoughtful design. As a final-year engineering student, I enjoy building software that is reliable, maintainable, and designed to create real-world impact.
            </p>
            <p>
              My projects span <span className="text-gray-900 dark:text-white font-medium">full-stack development</span>, <span className="text-gray-900 dark:text-white font-medium">backend systems</span>, <span className="text-gray-900 dark:text-white font-medium">AI & Machine Learning</span>, and developer tools, reflecting my passion for building versatile, end-to-end solutions while continuously learning modern software engineering practices.
            </p>
          </div>
        </div>
      </section>

      <div className="court-divider"></div>

      {/* ── PROJECTS SECTION (BENTO GRID) ── */}
      <section id="projects" className="py-24 md:py-32 bg-gray-50/50 dark:bg-onyx-light/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <h2 className="editorial-title text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">
                Selected Works
              </h2>
              <p className="font-sans uppercase tracking-[0.2em] text-xs font-semibold text-optic-green">
                Portfolio
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <div className="court-divider"></div>

      {/* ── EXPERIENCE SECTION (BENTO GRID) ── */}
      <section id="experience" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="editorial-title text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">
              Experience
            </h2>
            <p className="font-sans uppercase tracking-[0.2em] text-xs font-semibold text-optic-green">
              Professional Journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.map(exp => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group flex flex-col bg-white dark:bg-onyx-light/20 border border-gray-200 dark:border-onyx-light hover:border-optic-green dark:hover:border-optic-green transition-all duration-500 overflow-hidden relative min-h-[300px]"
              >
                <div className="p-8 flex flex-col flex-grow relative z-10">
                  <div className="mb-6">
                    <p className="text-xs font-sans uppercase tracking-widest text-optic-green font-semibold mb-2">{exp.duration}</p>
                    <h3 className="text-2xl font-bold font-sans text-gray-900 dark:text-white mb-1 group-hover:text-optic-green transition-colors">{exp.role}</h3>
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400">{exp.company}</h4>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 font-light text-sm leading-relaxed mb-8 flex-grow">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-100 dark:border-onyx-light/50">
                    {exp.techStack.map(tech => (
                      <span key={tech} className="text-[10px] font-sans uppercase tracking-widest text-gray-500 dark:text-gray-400 font-semibold">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="court-divider"></div>

      {/* ── SKILLS, LEADERSHIP & ACHIEVEMENTS ── */}
      <section id="skills" className="py-24 md:py-32 relative">
        <div className="max-w-4xl mx-auto px-6 flex flex-col gap-24">
          
          {/* Skills Column */}
          <div>
            <h2 className="editorial-title text-3xl md:text-4xl text-gray-900 dark:text-white mb-12">
              Technical Arsenal
            </h2>
            <div className="space-y-12">
              {skills.map((category, idx) => (
                <motion.div 
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                >
                  <h3 className="font-sans font-semibold text-sm uppercase tracking-widest text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-onyx-light pb-2">
                    {category.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map(skill => (
                      <span 
                        key={skill} 
                        className="px-3 py-1 bg-gray-50 dark:bg-onyx-light border border-gray-200 dark:border-onyx-light text-gray-700 dark:text-gray-300 text-xs font-medium rounded-none hover:border-optic-green transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Leadership & Milestones Column */}
          <div id="leadership">
            <h2 className="editorial-title text-3xl md:text-4xl text-gray-900 dark:text-white mb-12">
              Milestones
            </h2>
            <div className="relative border-l border-gray-200 dark:border-onyx-light pl-8 space-y-12">
              {[
                {
                  role: "Sports Secretary",
                  org: "University Sports Council",
                  desc: "Sports Secretary (2025–Present), organizing university sporting events and managing athletic initiatives."
                },
                {
                  role: "Badminton Team Captain",
                  org: "University Team",
                  desc: "Captain (2024–25), leading the university badminton team in inter-university tournaments."
                },
                {
                  role: "Head, Checkmate Chess Club",
                  org: "University Club",
                  desc: "Leading the university chess club by organizing tournaments, workshops, and community events."
                },
                {
                  role: "State-Level Badminton Player",
                  org: "District & University",
                  desc: "Represented the district and won at state-level team championships and competed at the university level."
                },
                {
                  role: "Google Cloud Data Analytics",
                  org: "Google Cloud",
                  desc: "Certified in data analytics, visualization, and cloud-based data processing."
                }

              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute -left-[37px] top-1.5 w-3 h-3 bg-gray-200 dark:bg-onyx-light rounded-full group-hover:bg-optic-green transition-colors duration-300" />
                  <h4 className="text-lg font-bold font-sans text-gray-900 dark:text-white group-hover:text-optic-green transition-colors">{item.role}</h4>
                  <h5 className="text-xs text-optic-green uppercase tracking-widest font-semibold mb-2 mt-1">{item.org}</h5>
                  <p className="text-gray-600 dark:text-gray-400 font-light text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div id="achievements">
            <h2 className="editorial-title text-3xl md:text-4xl text-gray-900 dark:text-white mb-12">
              Achievements & Recognition
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "3rd Place – GDG Hackathon",
                  desc: "Awarded 3rd place for CarbonTwin, an AI-powered carbon emission forecasting platform."
                },
                {
                  title: "Badminton",
                  desc: "Contributed to multiple team championship victories and secured wins in inter-university badminton tournaments."
                },
                {
                  title: "Best Volunteer – NSO (2023–24)",
                  desc: "Recognized for exceptional commitment and contribution to National Service Organization activities."
                },
                {
                  title: "Special Mention (NSO 2024–25)",
                  desc: "Received Special Mention for outstanding dedication and leadership in NSO initiatives."
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 bg-white dark:bg-onyx-light/20 border border-gray-200 dark:border-onyx-light hover:border-optic-green transition-colors duration-300 group"
                >
                  <h4 className="text-lg font-bold font-sans text-gray-900 dark:text-white group-hover:text-optic-green transition-colors mb-2">{item.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 font-light text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <div className="court-divider"></div>

      {/* ── FORMAL CONTACT SECTION ── */}
      <section id="contact" className="py-32 md:py-48 text-center bg-gray-50 dark:bg-onyx-light/10">
        <div className="max-w-3xl mx-auto px-6">
          <p className="font-sans uppercase tracking-[0.2em] text-xs font-semibold text-optic-green mb-6">
            Get in touch
          </p>

          <h2 className="editorial-title text-5xl md:text-7xl text-gray-900 dark:text-white mb-16">
            Let's connect.
          </h2>
          
          <div className="flex flex-col items-center gap-6">
            <a 
              href="mailto:your.email@example.com"
              className="text-2xl md:text-3xl font-sans font-light text-gray-600 dark:text-gray-300 hover:text-optic-green dark:hover:text-optic-green transition-colors flex items-center gap-3"
            >
              lsharvani17@gmail.com <ArrowUpRight size={24} className="opacity-50" />
            </a>
            <a 
              href="tel:+91 7780663686"
              className="text-xl font-sans font-light text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              +91 7780663686
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
