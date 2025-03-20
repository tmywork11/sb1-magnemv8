import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  darkMode?: boolean;
}

export default function SectionHeader({ title, subtitle, darkMode }: SectionHeaderProps) {
  return (
    <div className="text-center mb-12">
      <div className="inline-block mb-4">
        <h2 className={`text-3xl font-bold relative ${
          darkMode ? 'text-white' : 'text-primary-800'
        }`}>
          {title}
          <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-secondary-300 via-secondary-400 to-secondary-300 rounded-full"></span>
        </h2>
      </div>
      <p className={`max-w-2xl mx-auto mt-4 ${
        darkMode ? 'text-white/90' : 'text-primary-600'
      }`}>
        {subtitle}
      </p>
    </div>
  );
}