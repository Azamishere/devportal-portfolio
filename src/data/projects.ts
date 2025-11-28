export type Project = {
  id: string;
  name: string;
  description: string;
  status: 'live' | 'wip' | 'archived';
  tags: string[];
  links: { label: string; href: string; icon: string }[];
  tech: string[];
};

export const projects: Project[] = [
  {
    id: 'syncmeet',
    name: 'SyncMeet',
    description:
      'End-to-end encrypted real-time video conferencing with shared whiteboard, screen sharing, and breakout rooms. Used by 5K+ remote teams.',
    status: 'live',
    tags: ['WebRTC', 'Real-time', 'Security'],
    tech: ['React', 'WebRTC', 'Socket.io', 'Node.js', 'AWS'],
    links: [
      { label: 'Live Demo', href: '#', icon: 'fa-external-link-alt' },
      { label: 'GitHub', href: '#', icon: 'fa-github' },
      { label: 'Docs', href: '#', icon: 'fa-book' },
    ],
  },
  {
    id: 'authguard',
    name: 'AuthGuard',
    description:
      'Drop-in authentication API with OAuth 2.0, MFA (TOTP, WebAuthn), audit logging, and rate limiting. 99.99% uptime SLA.',
    status: 'live',
    tags: ['Security', 'API', 'Auth'],
    tech: ['NestJS', 'PostgreSQL', 'Redis', 'JWT', 'TypeScript'],
    links: [
      { label: 'API Docs', href: '#', icon: 'fa-book' },
      { label: 'GitHub', href: '#', icon: 'fa-github' },
    ],
  },
  {
    id: 'devportal-ui',
    name: 'DevPortal UI Kit',
    description:
      'Open-source React component library matching Discord Developer Portal aesthetics — for devs who value consistency and speed.',
    status: 'wip',
    tags: ['UI/UX', 'Open Source', 'Design System'],
    tech: ['TypeScript', 'Tailwind CSS', 'Storybook', 'Figma'],
    links: [
      { label: 'Preview', href: '#', icon: 'fa-palette' },
      { label: 'GitHub', href: '#', icon: 'fa-github' },
    ],
  },
];
