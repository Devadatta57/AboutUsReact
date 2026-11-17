import MembershipCard from './MembershipCard';
import styles from './SectionMedia.module.css';

/*
 * Picture for a 'media' row:
 *  - photo: cut from the design on a white backdrop, blended into the page
 *  - picture: a full-bleed photo (e.g. feedfarm) in a rounded frame
 *  - logo:  the FEED brand mark, centred and blended into the page
 *  - map:   the India map alone (cut out of the content document's picture)
 *  - cardImage: the FEED Membership & Reward Card picture (feedcard.webp)
 *  - card:  the same card drawn in CSS (not used now; kept as a fallback)
 */
function SectionMedia({ media, className = '' }) {
  if (media.type === 'card') {
    return (
      <div className={`${styles.cardWrap} ${className}`.trim()}>
        <MembershipCard label={media.label} />
      </div>
    );
  }

  return (
    <figure className={`${styles.figure} ${className}`.trim()}>
      <img
        className={styles[media.type] ?? styles.photo}
        src={media.src}
        alt={media.alt}
        width={media.width}
        height={media.height}
        loading="lazy"
        decoding="async"
      />
    </figure>
  );
}

export default SectionMedia;
