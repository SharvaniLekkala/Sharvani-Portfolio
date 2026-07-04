import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/projects';
import { motion } from 'framer-motion';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <p className="text-gray-500 mb-8">
          The project you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="text-accent hover:underline flex items-center gap-2"
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <main className="pb-24">
      {/* Hero Banner */}
      <div className="w-full h-[40vh] md:h-[50vh] bg-gray-200 dark:bg-gray-900 relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/60 to-transparent"></div>

        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft size={16} /> Back to Portfolio
            </Link>

            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
              {project.title}
            </h1>

            <p className="text-xl text-gray-300 max-w-2xl">
              {project.tagline}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-12 md:mt-16">
        {/* Tech Stack & Links */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-gray-100 dark:border-gray-800 pb-12">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4 shrink-0">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
              >
                <Github size={18} />
                Source Code
              </a>
            )}

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent-light text-white font-medium rounded-lg transition-colors"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Project Content */}
        <div className="space-y-12">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Overview
            </h2>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              {project.overview}
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              The Problem
            </h2>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              {project.problem}
            </p>
          </motion.section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Key Features
              </h2>

              <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Engineering Decisions
              </h2>

              <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
                {project.decisions.map((decision, i) => (
                  <li key={i}>{decision}</li>
                ))}
              </ul>
            </motion.section>
          </div>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Challenges Overcome
            </h2>

            <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
              {project.challenges.map((challenge, i) => (
                <li key={i}>{challenge}</li>
              ))}
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Future Work
            </h2>

            <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
              {project.futureWork.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.section>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetail;