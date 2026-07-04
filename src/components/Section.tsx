import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = '' }) => {
  return (
    <section id={id} className={`py-24 md:py-32 relative ${className}`}>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 text-center"
        >
          {subtitle && (
            <p className="text-accent dark:text-gold uppercase tracking-[0.2em] text-xs font-semibold mb-3">
              {subtitle}
            </p>
          )}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 text-gray-900 dark:text-gray-100 tracking-tight">
            {title}
          </h2>
          <div className="divider-court"></div>
        </motion.div>
        <div>{children}</div>
      </div>
    </section>
  );
};

export default Section;
