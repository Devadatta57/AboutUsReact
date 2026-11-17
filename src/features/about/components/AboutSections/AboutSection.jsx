import { useState } from 'react';
import Icon from '@/components/common/Icon';
import DetailBlocks from './DetailBlocks';
import Highlights from './Highlights';
import SectionMedia from './SectionMedia';
import styles from './AboutSection.module.css';

/*
 * One numbered row. 'media' layout: picture left, text right (highlights
 * under the text). 'split' layout: text left, highlights right. The
 * "Read more" panel opens underneath across the full width.
 */
function AboutSection({ section, number }) {
  const [open, setOpen] = useState(false);
  const { id, title, layout, media, tagline, quote, intro, chips, highlights, details } = section;

  const titleId = `${id}-title`;
  const moreId = `${id}-more`;
  const isMedia = layout === 'media';
  // A call-to-action button lines up with the text; everything else spans
  // the text column under the number badge too, as in the design.
  const highlightsClass = highlights?.type === 'cta' ? styles.inText : styles.fullWidth;

  return (
    <section
      id={id}
      className={`${styles.section} ${isMedia ? styles.mediaLayout : styles.splitLayout}`}
      aria-labelledby={titleId}
    >
      {isMedia && <SectionMedia media={media} className={styles.media} />}

      <div className={styles.text}>
        <span className={styles.badge} aria-hidden="true">
          {number}
        </span>

        <div className={styles.copy}>
          <h2 id={titleId} className={styles.title}>
            {title}
          </h2>
          {tagline && <p className={styles.tagline}>{tagline}</p>}
          {quote && (
            <blockquote className={styles.quote}>
              <p>{quote}</p>
            </blockquote>
          )}
          {intro?.map((paragraph) => (
            <p key={paragraph} className={styles.intro}>
              {paragraph}
            </p>
          ))}
          {chips && (
            <ul className={styles.chips}>
              {chips.map((chip) => (
                <li key={chip.label} className={styles.chip}>
                  <Icon name={chip.icon} className={styles.chipIcon} />
                  {chip.label}
                </li>
              ))}
            </ul>
          )}
        </div>

        {isMedia && highlights && <Highlights {...highlights} className={highlightsClass} />}

        {details && (
          <button
            type="button"
            className={styles.readMore}
            aria-expanded={open}
            aria-controls={moreId}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? 'Read less' : 'Read more'}
            <Icon name="chevronDown" className={styles.readMoreIcon} strokeWidth={2.4} />
          </button>
        )}
      </div>

      {!isMedia && highlights && <Highlights {...highlights} className={styles.aside} />}

      {details && (
        <div id={moreId} className={styles.more} data-open={open} inert={!open}>
          <div className={styles.moreInner}>
            <DetailBlocks blocks={details} />
          </div>
        </div>
      )}
    </section>
  );
}

export default AboutSection;
