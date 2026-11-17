import Icon from '@/components/common/Icon';
import LeafMark from './LeafMark';
import styles from './Highlights.module.css';

/*
 * The visual summary of a section, picked by `type`:
 * tiles, stats, pins, covers, tiers, comingSoon or cta.
 */
function Highlights({ type, className = '', ...props }) {
  const Variant = VARIANTS[type];
  if (!Variant) return null;
  return (
    <div className={`${styles.highlights} ${className}`.trim()}>
      <Variant {...props} />
    </div>
  );
}

function Tiles({ items }) {
  return (
    <ul className={styles.tiles}>
      {items.map((item) => (
        <li key={item.label} className={`${styles.tile} ${styles[item.tone] ?? ''}`}>
          <Icon name={item.icon} className={styles.tileIcon} strokeWidth={1.8} />
          <span className={styles.tileLabel}>{item.label}</span>
          <span className={styles.tileCaption}>{item.caption}</span>
        </li>
      ))}
    </ul>
  );
}

function Stats({ items }) {
  return (
    <ul className={styles.stats}>
      {items.map((item) => (
        <li key={item.label} className={`${styles.stat} ${styles[item.tone] ?? ''}`}>
          <Icon name={item.icon} className={styles.statIcon} strokeWidth={1.8} />
          <span className={styles.statValue}>{item.value}</span>
          <span className={styles.statLabel}>{item.label}</span>
        </li>
      ))}
    </ul>
  );
}

function Pins({ items }) {
  return (
    <ul className={styles.pins}>
      {items.map((item) => (
        <li key={item} className={styles.pin}>
          <svg className={styles.pinIcon} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M12 2a8 8 0 0 0-8 8c0 5.4 6.2 10.9 7.4 11.8a1 1 0 0 0 1.2 0C13.8 20.9 20 15.4 20 10a8 8 0 0 0-8-8Z" />
            <circle cx="12" cy="10" r="3" fill="#ffffff" />
          </svg>
          {item}
        </li>
      ))}
    </ul>
  );
}

function Covers({ masthead, items }) {
  return (
    <ul className={styles.covers}>
      {items.map((item) => (
        <li key={item.title} className={styles.cover}>
          <span className={styles.coverMast}>
            <LeafMark className={styles.coverLeaf} />
            {masthead}
          </span>
          <span className={styles.coverTitle}>{item.title}</span>
          <img className={styles.coverImage} src={item.image} alt="" loading="lazy" decoding="async" />
        </li>
      ))}
    </ul>
  );
}

function Tiers({ items }) {
  return (
    <ul className={styles.tiers}>
      {items.map((item) => (
        <li key={item.label} className={styles.tier}>
          <Icon name={item.icon} className={styles.tierIcon} strokeWidth={1.8} />
          <span className={styles.tierLabel}>{item.label}</span>
          <span className={styles.tierCaption}>{item.caption}</span>
        </li>
      ))}
    </ul>
  );
}

function ComingSoon({ icon, title, text }) {
  return (
    <div className={styles.soon}>
      <span className={styles.soonIcon}>
        <Icon name={icon} strokeWidth={1.8} />
      </span>
      <div>
        <p className={styles.soonTitle}>{title}</p>
        <p className={styles.soonText}>{text}</p>
      </div>
    </div>
  );
}

function Cta({ label, href }) {
  return (
    <a className={styles.cta} href={href}>
      {label}
      <Icon name="arrowRight" className={styles.ctaIcon} strokeWidth={2.4} />
    </a>
  );
}

const VARIANTS = {
  tiles: Tiles,
  stats: Stats,
  pins: Pins,
  covers: Covers,
  tiers: Tiers,
  comingSoon: ComingSoon,
  cta: Cta,
};

export default Highlights;
