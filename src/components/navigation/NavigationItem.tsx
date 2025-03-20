import React from 'react';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import { cn } from '../../utils/cn';

interface NavigationItemProps {
  href: string;
  label: string;
  isActive?: boolean;
}

export default function NavigationItem({ href, label, isActive }: NavigationItemProps) {
  const { scrollToSection } = useSmoothScroll();
  const sectionId = href.replace('#', '');

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <li>
      <a
        href={href}
        onClick={handleClick}
        className={cn(
          "text-sm font-medium transition-colors duration-200",
          "hover:text-blue-600",
          isActive ? "text-blue-600" : "text-gray-700"
        )}
      >
        {label}
      </a>
    </li>
  );
}