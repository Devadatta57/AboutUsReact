import styles from './HeroCollage.module.css';

/*
 * Photo collage exported from the design mockup as a transparent WebP
 * (leaf-shaped frame, decorative leaves and swooshes included), so it matches
 * the design exactly.
 */
function HeroCollage({ image, className = '' }) {
  return (
    <figure className={`${styles.collage} ${className}`.trim()}>
      <img
        className={styles.image}
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        fetchPriority="high"
      />
    </figure>
  );
}

export default HeroCollage;
