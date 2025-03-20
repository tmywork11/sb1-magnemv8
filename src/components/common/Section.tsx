import React from 'react';
import { cn } from '../../utils/cn';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  pattern?: 'washi' | 'ripple' | 'ichimatsu' | 'none';
  darkMode?: boolean;
}

export default function Section({ 
  children, 
  className, 
  pattern = 'washi',
  darkMode = false 
}: SectionProps) {
  return (
    <section className={cn(
      "py-24 relative",
      pattern === 'washi' && "washi-pattern",
      pattern === 'ripple' && "ripple-pattern",
      pattern === 'ichimatsu' && "ichimatsu-pattern",
      darkMode && "text-paper-100",
      "gold-accent",
      className
    )}>
      <div className="relative max-w-7xl mx-auto px-4">
        {children}
      </div>
    </section>
  );
}