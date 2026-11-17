/* Three-leaf FEED mark used on the membership card and the magazine covers. */
function LeafMark({ className = '', outline = false }) {
  const stroke = outline ? { stroke: '#ffffff', strokeWidth: 1.6, strokeLinejoin: 'round' } : {};

  return (
    <svg className={className || undefined} viewBox="0 0 40 40" aria-hidden="true" focusable="false">
      <path d="M18.5 35 C 9.5 34, 3.5 26.5, 4.5 17 C 12.5 18.5, 18 25.5, 18.5 35 Z" fill="#6cc22a" {...stroke} />
      <path d="M21.5 35 C 30.5 34, 36.5 26.5, 35.5 17 C 27.5 18.5, 22 25.5, 21.5 35 Z" fill="#6cc22a" {...stroke} />
      <path d="M20 35 C 12 27, 12.5 13, 20 4 C 27.5 13, 28 27, 20 35 Z" fill="#8fd63e" {...stroke} />
    </svg>
  );
}

export default LeafMark;
