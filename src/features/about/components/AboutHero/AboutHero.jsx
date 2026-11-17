import SectionEyebrow from '@/components/common/SectionEyebrow';
import { aboutHeroContent } from '../../data/aboutHeroContent';
import HeroBackground from './HeroBackground';
import HeroCollage from './HeroCollage';
import styles from './AboutHero.module.css';

function AboutHero() {
  const { eyebrow, logo, quoteLines, collage, landscape } = aboutHeroContent;

  return (
    <section className={styles.hero} aria-labelledby="about-hero-title">
      <HeroBackground landscape={landscape} />

      <div className={styles.stage}>
        <SectionEyebrow as="h1" id="about-hero-title" className={styles.eyebrow}>
          {eyebrow}
        </SectionEyebrow>

        <div className={styles.content}>
          <img
            className={styles.logo}
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            decoding="async"
          />

          <blockquote className={styles.quote}>
            <span className={styles.quoteMark} aria-hidden="true">
              {'“'}
            </span>
            <p>
              {quoteLines.map((line, lineIndex) => (
                <span key={lineIndex} className={styles.quoteLine}>
                  {line.map((segment, i) =>
                    typeof segment === 'string' ? segment : <strong key={i}>{segment.emphasis}</strong>,
                  )}
                  {lineIndex === quoteLines.length - 1 ? (
                    <span className={styles.quoteMarkClose} aria-hidden="true" />
                  ) : (
                    ' '
                  )}
                </span>
              ))}
            </p>
          </blockquote>
        </div>

        <HeroCollage image={collage} className={styles.media} />
      </div>
    </section>
  );
}

export default AboutHero;
