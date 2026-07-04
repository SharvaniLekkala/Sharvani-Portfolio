import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center border-t border-gray-100 dark:border-gray-900 mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Sharvani Lekkala. 
        </p>
      </div>
    </footer>
  );
};

export default Footer;
