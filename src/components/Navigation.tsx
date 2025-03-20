import React from 'react';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

interface NavigationProps {
  isScrolled: boolean;
}

const menuItems = [
  { href: '#about', label: '初めての方へ' },
  { href: '#services', label: 'サービス' },
  { href: '#careers', label: '採用情報' },
  { href: '#access', label: 'アクセス' }
];

export default function Navigation({ isScrolled }: NavigationProps) {
  const { scrollToSection } = useSmoothScroll();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId.replace('#', ''));
  };

  return (
    <nav>
      <ul className="flex items-center space-x-8">
        {menuItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={`transition-colors duration-200 py-2 px-1 text-base font-medium ${
                isScrolled 
                  ? 'text-primary-600 hover:text-primary-800' 
                  : 'text-white hover:text-paper-100'
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}