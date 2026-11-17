/*
 * Small line-icon set (24 x 24, stroke = currentColor), so icons take the
 * text colour of whatever they sit in. Add a new icon by adding an entry to
 * ICONS: a list of [svg element, attributes] pairs.
 */
const ICONS = {
  menu: [
    ['path', { d: 'M4 6h16' }],
    ['path', { d: 'M4 12h16' }],
    ['path', { d: 'M4 18h16' }],
  ],
  arrowRight: [
    ['path', { d: 'M5 12h14' }],
    ['path', { d: 'm12 5 7 7-7 7' }],
  ],
  chevronDown: [['path', { d: 'm6 9 6 6 6-6' }]],
  rocket: [
    ['path', { d: 'M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z' }],
    ['path', { d: 'm12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z' }],
    ['path', { d: 'M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0' }],
    ['path', { d: 'M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5' }],
  ],
  megaphone: [
    ['path', { d: 'm3 11 18-5v12L3 14v-3z' }],
    ['path', { d: 'M11.6 16.8a3 3 0 1 1-5.8-1.6' }],
  ],
  sprout: [
    ['path', { d: 'M7 20h10' }],
    ['path', { d: 'M10 20c5.5-2.5.8-6.4 3-10' }],
    ['path', { d: 'M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z' }],
    ['path', { d: 'M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z' }],
  ],
  shieldCheck: [
    ['path', { d: 'M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z' }],
    ['path', { d: 'm9 12 2 2 4-4' }],
  ],
  ship: [
    ['path', { d: 'M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1' }],
    ['path', { d: 'M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76' }],
    ['path', { d: 'M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6' }],
    ['path', { d: 'M12 10v4' }],
    ['path', { d: 'M12 2v3' }],
  ],
  smartphone: [
    ['rect', { x: 5, y: 2, width: 14, height: 20, rx: 2.5 }],
    ['path', { d: 'M12 18h.01' }],
  ],
  users: [
    ['path', { d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' }],
    ['circle', { cx: 9, cy: 7, r: 4 }],
    ['path', { d: 'M22 21v-2a4 4 0 0 0-3-3.87' }],
    ['path', { d: 'M16 3.13a4 4 0 0 1 0 7.75' }],
  ],
  handshake: [
    ['path', { d: 'm11 17 2 2a1 1 0 1 0 3-3' }],
    ['path', { d: 'm14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4' }],
    ['path', { d: 'm21 3 1 11h-2' }],
    ['path', { d: 'M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3' }],
    ['path', { d: 'M3 4h8' }],
  ],
  mapPin: [
    ['path', { d: 'M20 10c0 4.99-5.54 10.19-7.4 11.8a1 1 0 0 1-1.2 0C9.54 20.19 4 14.99 4 10a8 8 0 0 1 16 0' }],
    ['circle', { cx: 12, cy: 10, r: 3 }],
  ],
  idCard: [
    ['rect', { x: 2, y: 5, width: 20, height: 14, rx: 2 }],
    ['circle', { cx: 8, cy: 11, r: 2 }],
    ['path', { d: 'M5 16c.6-1.2 1.7-2 3-2s2.4.8 3 2' }],
    ['path', { d: 'M14 10h5' }],
    ['path', { d: 'M14 14h3' }],
  ],
  medal: [
    ['path', { d: 'm15.48 12.89 1.51 8.53a.5.5 0 0 1-.81.47l-3.58-2.69a1 1 0 0 0-1.2 0l-3.58 2.69a.5.5 0 0 1-.81-.47l1.51-8.53' }],
    ['circle', { cx: 12, cy: 8, r: 6 }],
  ],
  gem: [
    ['path', { d: 'M6 3h12l4 6-10 13L2 9Z' }],
    ['path', { d: 'M11 3 8 9l4 13 4-13-3-6' }],
    ['path', { d: 'M2 9h20' }],
  ],
  crown: [
    ['path', { d: 'M11.56 3.27a.5.5 0 0 1 .88 0l2.95 5.6a1 1 0 0 0 1.52.3l4.27-3.67a.5.5 0 0 1 .8.52l-2.83 10.25a1 1 0 0 1-.96.73H5.81a1 1 0 0 1-.96-.73L2.02 6.02a.5.5 0 0 1 .8-.52l4.27 3.67a1 1 0 0 0 1.52-.3z' }],
    ['path', { d: 'M5 21h14' }],
  ],
  coins: [
    ['circle', { cx: 8, cy: 8, r: 6 }],
    ['path', { d: 'M18.09 10.37A6 6 0 1 1 10.34 18' }],
    ['path', { d: 'M7 6h1v4' }],
    ['path', { d: 'm16.71 13.88.7.71-2.82 2.82' }],
  ],
  rupee: [
    ['path', { d: 'M6 3h12' }],
    ['path', { d: 'M6 8h12' }],
    ['path', { d: 'm6 13 8.5 8' }],
    ['path', { d: 'M6 13h3' }],
    ['path', { d: 'M9 13c6.67 0 6.67-10 0-10' }],
  ],
  tag: [
    ['path', { d: 'M12.59 2.59A2 2 0 0 0 11.17 2H4a2 2 0 0 0-2 2v7.17a2 2 0 0 0 .59 1.42l8.7 8.7a2.43 2.43 0 0 0 3.42 0l6.58-6.58a2.43 2.43 0 0 0 0-3.42z' }],
    ['circle', { cx: 7.5, cy: 7.5, r: 0.6, fill: 'currentColor' }],
  ],
  clock: [
    ['circle', { cx: 12, cy: 12, r: 10 }],
    ['path', { d: 'M12 6v6l4 2' }],
  ],
  ban: [
    ['circle', { cx: 12, cy: 12, r: 10 }],
    ['path', { d: 'm4.9 4.9 14.2 14.2' }],
  ],
  target: [
    ['circle', { cx: 12, cy: 12, r: 10 }],
    ['circle', { cx: 12, cy: 12, r: 6 }],
    ['circle', { cx: 12, cy: 12, r: 2 }],
  ],
  eye: [
    ['path', { d: 'M2.06 12.35a1 1 0 0 1 0-.7 10.75 10.75 0 0 1 19.88 0 1 1 0 0 1 0 .7 10.75 10.75 0 0 1-19.88 0' }],
    ['circle', { cx: 12, cy: 12, r: 3 }],
  ],
  flag: [
    ['path', { d: 'M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z' }],
    ['path', { d: 'M4 22v-7' }],
  ],
  calendar: [
    ['path', { d: 'M8 2v4' }],
    ['path', { d: 'M16 2v4' }],
    ['rect', { x: 3, y: 4, width: 18, height: 18, rx: 2 }],
    ['path', { d: 'M3 10h18' }],
  ],
  languages: [
    ['path', { d: 'm5 8 6 6' }],
    ['path', { d: 'm4 14 6-6 2-3' }],
    ['path', { d: 'M2 5h12' }],
    ['path', { d: 'M7 2h1' }],
    ['path', { d: 'm22 22-5-10-5 10' }],
    ['path', { d: 'M14 18h6' }],
  ],
  newspaper: [
    ['path', { d: 'M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2' }],
    ['path', { d: 'M18 14h-8' }],
    ['path', { d: 'M15 18h-5' }],
    ['path', { d: 'M10 6h8v4h-8V6Z' }],
  ],
  badgeCheck: [
    ['path', { d: 'M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z' }],
    ['path', { d: 'm9 12 2 2 4-4' }],
  ],
};

function Icon({ name, className = '', strokeWidth = 1.9, ...props }) {
  const parts = ICONS[name];
  if (!parts) return null;

  return (
    <svg
      className={className || undefined}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {parts.map(([Tag, attrs], i) => (
        <Tag key={i} {...attrs} />
      ))}
    </svg>
  );
}

export default Icon;
