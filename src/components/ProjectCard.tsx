import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Project } from '../data/projects';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col glass-card rounded-2xl overflow-hidden transition-all duration-500 relative"
    >
      {/* Glow effect behind the card content */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-gray-800">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover origin-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          loading="lazy"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md text-xs font-display uppercase tracking-widest text-gray-900 dark:text-gold-light rounded shadow-sm">
            {project.category}
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-grow p-8 relative z-10">
        <h3 className="text-2xl font-display font-bold mb-1 text-gray-900 dark:text-white group-hover:text-accent dark:group-hover:text-gold-light transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-sm text-accent dark:text-accent-light mb-4 font-medium uppercase tracking-wide">
          {project.tagline}
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-8 flex-grow line-clamp-3 leading-relaxed font-light">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[11px] uppercase tracking-widest font-semibold px-2.5 py-1 bg-gray-100 dark:bg-gray-800/50 text-gray-600 dark:text-gray-300 rounded-sm border border-gray-200 dark:border-gray-700/50"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="text-[11px] uppercase tracking-widest font-semibold px-2.5 py-1 bg-gray-100 dark:bg-gray-800/50 text-gray-600 dark:text-gray-300 rounded-sm border border-gray-200 dark:border-gray-700/50">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        <Link
          to={`/projects/${project.id}`}
          className="mt-auto inline-flex items-center gap-2 text-sm font-display uppercase tracking-widest font-semibold text-gray-900 dark:text-white group-hover:text-accent dark:group-hover:text-gold transition-colors duration-300"
        >
          View Case Study
          <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
