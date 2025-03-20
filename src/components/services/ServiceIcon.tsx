import React from 'react';
import { ServiceIconProps } from '../../types/services';
import '../../styles/animations.css';

const iconComponents = {
  bath: (
    <svg className="h-10 w-10 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="animate-float" d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z" stroke="currentColor" strokeWidth="2"/>
      <circle className="animate-ripple" cx="12" cy="12" r="1" fill="currentColor"/>
      <path d="M15 7c0-1.1.9-2 2-2s2 .9 2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  activity: (
    <svg className="h-10 w-10 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle className="animate-pulse" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
      <circle cx="12" cy="12" r="2" fill="currentColor"/>
    </svg>
  ),
  clock: (
    <svg className="h-10 w-10 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
      <path className="animate-float" d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle className="animate-ripple" cx="12" cy="12" r="1" fill="currentColor"/>
    </svg>
  )
};

export default function ServiceIcon({ type, className = '' }: ServiceIconProps) {
  return (
    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 ${className}`}>
      {iconComponents[type]}
    </div>
  );
}