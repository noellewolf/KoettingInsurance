import type { ReactNode } from 'react';
export default function Icon({ name }: { name: string }) {
  const paths: Record<string, ReactNode> = {
    home: (
      <>
        <path d="m3 11 9-8 9 8M5 10v11h14V10M10 21v-7h4v7" />
      </>
    ),
    business: (
      <>
        <rect x="4" y="8" width="16" height="13" rx="1" />
        <path d="M8 8V4h8v4M4 13h16M10 13v3h4v-3" />
      </>
    ),
    heart: <path d="M12 21S2 15 2 8a5 5 0 0 1 10-1 5 5 0 0 1 10 1c0 7-10 13-10 13Z" />,
    umbrella: (
      <>
        <path d="M2 12a10 10 0 0 1 20 0H2ZM12 2v18a2 2 0 0 0 4 0" />
      </>
    ),
    arrow: <path d="M4 12h16m-6-6 6 6-6 6" />,
    phone: (
      <path d="m6 3 4 5-3 3a15 15 0 0 0 6 6l3-3 5 4c-1 5-5 4-8 2C7 17 4 13 3 8 2 5 3 3 6 3Z" />
    ),
    check: <path d="m5 12 4 4L19 6" />,
  };
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] ?? paths.arrow}
    </svg>
  );
}
