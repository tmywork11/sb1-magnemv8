import React from 'react';

interface JapaneseBorderProps {
  children: React.ReactNode;
  className?: string;
}

export default function JapaneseBorder({ children, className = '' }: JapaneseBorderProps) {
  return (
    <div className={`japanese-border ${className}`}>
      {children}
    </div>
  );
}