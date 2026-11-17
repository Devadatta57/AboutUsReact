import { useEffect, useRef } from 'react';
import Icon from '@/components/common/Icon';
import styles from './OnThisPage.module.css';

/*
 * "On This Page" index. Desktop: a sticky card beside the sections.
 * Phones/tablets: a sticky bar of chips across the top that scrolls sideways.
 */
function OnThisPage({ title, items, activeId, onSelect }) {
  const listRef = useRef(null);

  // In the sideways chip bar, keep the active chip in view. Only the bar is
  // scrolled (never the page), so a smooth page scroll is not interrupted.
  useEffect(() => {
    const list = listRef.current;
    if (!list || list.scrollWidth <= list.clientWidth) return;
    const link = list.querySelector(`a[href="#${activeId}"]`);
    if (!link) return;
    const left = link.offsetLeft - (list.clientWidth - link.offsetWidth) / 2;
    list.scrollTo({ left, behavior: 'smooth' });
  }, [activeId]);

  return (
    <nav className={styles.nav} aria-label={title}>
      <p className={styles.heading}>
        <Icon name="menu" className={styles.headingIcon} strokeWidth={2.4} />
        {title}
      </p>

      <ol ref={listRef} className={styles.list}>
        {items.map((item, index) => {
          const active = item.id === activeId;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={active ? `${styles.link} ${styles.active}` : styles.link}
                aria-current={active ? 'location' : undefined}
                onClick={() => onSelect(item.id)}
              >
                <span className={styles.number}>{String(index + 1).padStart(2, '0')}</span>
                <span className={styles.label}>{item.navLabel}</span>
              </a>
            </li>
          );
        })}
      </ol>

      <svg className={styles.swoosh} viewBox="0 0 240 70" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <path d="M0 70 C 70 62, 150 40, 240 0 L 240 70 Z" fill="#f6a21a" />
        <path d="M0 70 C 80 64, 160 46, 240 16 L 240 70 Z" fill="#7cc832" />
        <path d="M0 70 C 90 66, 170 56, 240 36 L 240 70 Z" fill="#3a9a22" />
      </svg>
    </nav>
  );
}

export default OnThisPage;
