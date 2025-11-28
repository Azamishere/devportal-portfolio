'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'Dashboard', icon: 'fa-home' },
  { href: '/projects', label: 'Projects', icon: 'fa-layer-group' },
  { href: '/docs', label: 'Code Samples', icon: 'fa-code' },
  { href: '#', label: 'API Docs', icon: 'fa-book', disabled: true },
];

const resources = [
  { href: 'https://github.com/alexrivera', label: 'GitHub', icon: 'fa-github' },
  { href: 'https://linkedin.com/in/alexrivera', label: 'LinkedIn', icon: 'fa-linkedin-in' },
  { href: '/#discord', label: 'Discord', icon: 'fa-discord' },
];

export default function Sidebar({ className }: { className?: string }) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={`${className} bg-discord-darker border-r border-discord-muted/20 flex flex-col w-64 flex-shrink-0`}
    >
      <div className="p-5">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-discord-accent flex items-center justify-center text-white font-bold">
            AR
          </div>
          {!isCollapsed && (
            <div>
              <div className="font-semibold text-white">Alex Rivera</div>
              <div className="flex items-center gap-1 text-xs text-discord-success">
                <span className="w-2 h-2 bg-discord-success rounded-full"></span>
                Available
              </div>
            </div>
          )}
        </div>

        <nav className="space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors ${
                pathname === item.href
                  ? 'bg-discord-accent/15 text-white'
                  : 'text-discord-text-secondary hover:bg-discord-muted/20 hover:text-white'
              } ${item.disabled ? 'cursor-not-allowed opacity-50' : ''}`}
              aria-disabled={item.disabled}
            >
              <i className={`fas ${item.icon} w-4 text-center`}></i>
              {!isCollapsed && <span>{item.label}</span>}
            </Link>
          ))}
        </nav>

        <div className="mt-8 pt-4 border-t border-discord-muted/20">
          <div className="text-xs font-semibold text-discord-text-muted uppercase tracking-wider px-3 pb-2">
            Connect
          </div>
          <nav className="space-y-1">
            {resources.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-3 py-2 text-sm rounded-md text-discord-text-secondary hover:bg-discord-muted/20 hover:text-white transition-colors"
              >
                <i className={`fab ${item.icon} w-4 text-center`}></i>
                {!isCollapsed && <span>{item.label}</span>}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  );
}
