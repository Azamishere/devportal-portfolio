'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export default function DiscordWidget() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid SSR mismatch
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const theme = resolvedTheme === 'dark' ? 'dark' : 'light';
  const SERVER_ID = '1311858099413323847'; // 🔁 GANTI DENGAN SERVER ID KAMU

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-2 text-discord-success">
        <span className="w-3 h-3 bg-discord-success rounded-full"></span>
        <span>Online — 42 members</span>
      </div>
      <iframe
        src={`https://discord.com/widget?id=${SERVER_ID}&theme=${theme}`}
        width="100%"
        height="200"
        allowTransparency
        frameBorder="0"
        className="rounded-lg max-w-2xl w-full"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        title="Discord Server Widget"
      />
      <a
        href={`https://discord.gg/YOUR_INVITE_CODE`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-5 py-2 bg-discord-accent hover:bg-discord-accent/90 text-white rounded font-medium transition-colors flex items-center gap-2"
      >
        <i className="fab fa-discord"></i>
        Join Server
      </a>
    </div>
  );
}
