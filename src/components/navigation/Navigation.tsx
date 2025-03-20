import React, { useState, useEffect } from 'react';
import NavigationItem from './NavigationItem';

const menuItems = [
  { href: '#services', label: 'サービス' },
  { href: '#features', label: '特長' },
  { href: '#pricing', label: '料金' },
  { href: '#careers', label: '採用情報' },
  { href: '#access', label: 'アクセス' },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-50% 0px',
        threshold: 0
      }
    );

    menuItems.forEach(({ href }) => {
      const element = document.getElementById(href.replace('#', ''));
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="hidden lg:flex ml-auto">
      <ul className="flex items-center space-x-8">
        {menuItems.map((item) => (
          <NavigationItem
            key={item.href}
            {...item}
            isActive={activeSection === item.href.replace('#', '')}
          />
        ))}
      </ul>
    </nav>
  );
}