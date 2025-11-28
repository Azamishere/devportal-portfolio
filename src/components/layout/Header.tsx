'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { motion } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`sticky top-0 z-40 border-b transition-colors ${
        isScrolled
          ? 'bg-discord-darkest/90 backdrop-blur-md border-discord-muted/30'
          : 'bg-discord-darkest border-discord-muted/10'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex h-14 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="text-discord-accent">
              <i className="fab fa-discord text-xl"></i>
            </div>
            <span className="font-bold text-lg text-white">DevPortal</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {[
              { href: '/', label: 'Dashboard' },
              { href: '/projects', label: 'Projects' },
              { href: '/docs', label: 'Docs' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-discord-text-secondary hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
}
