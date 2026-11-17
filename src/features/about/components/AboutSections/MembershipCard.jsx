import LeafMark from './LeafMark';
import styles from './MembershipCard.module.css';

/* The green FEED Membership & Reward Card from the design, drawn in CSS. */
function MembershipCard({ label }) {
  return (
    <div className={styles.card} role="img" aria-label={`FEED MSCS LTD. ${label}`}>
      <div className={styles.brand}>
        <LeafMark className={styles.leaf} outline />
        <div>
          <span className={styles.brandName}>FEED</span>
          <span className={styles.brandSub}>MSCS LTD.</span>
        </div>
      </div>

      <svg className={styles.contactless} viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
        <path d="M7 8.5a5 5 0 0 1 0 7" />
        <path d="M11 6a9 9 0 0 1 0 12" />
        <path d="M15 3.5a13 13 0 0 1 0 17" />
      </svg>

      <span className={styles.chip} aria-hidden="true" />
      <span className={styles.label}>{label}</span>
    </div>
  );
}

export default MembershipCard;
