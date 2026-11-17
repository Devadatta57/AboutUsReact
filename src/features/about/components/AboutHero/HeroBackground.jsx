import styles from './HeroBackground.module.css';

/*
 * Background layer: faint green line bundles (traced from the design) and the
 * farmland horizon strip along the bottom. Coordinates are design pixels.
 */

const range = (count) => Array.from({ length: count }, (_, i) => i / (count - 1));

const LINE_BUNDLES = [
  // Top-right fan, pinched near the top of the collage.
  ...range(14).map(
    (t) =>
      `M 1180 ${97 + t * 6} C 1360 ${98 + t * 4}, 1470 ${100 + (-40 + t * 220 - 100) * 0.15}, 1690 ${-40 + t * 220}`,
  ),
  // Left edge, beside the eyebrow.
  ...range(8).map((t) => `M -10 ${225 + t * 50} C 25 ${250 + t * 56}, 45 ${290 + t * 40}, 80 ${340 + t * 20}`),
  // Lower-left sweep under the quote (moved down 60 with the fields when the
  // artboard grew to make room for the logo).
  ...range(12).map(
    (t) => `M -10 ${658 + t * 55} C 120 ${700 + t * 55}, 260 ${750 + t * 28}, 520 ${764 + t * 11}`,
  ),
  // Lower-right sweep beside the collage, down 60 likewise.
  ...range(10).map(
    (t) =>
      `M 1690 ${620 + t * 80} C 1600 ${700 + t * 55}, 1520 ${750 + t * 27}, 1420 ${780 + t * 10}`,
  ),
];

function HeroBackground({ landscape }) {
  return (
    <div className={styles.background} aria-hidden="true">
      <svg
        className={styles.lines}
        viewBox="0 30 1670 900"
        preserveAspectRatio="xMidYMin slice"
        focusable="false"
      >
        <g fill="none" stroke="#9ed873" strokeWidth="0.9" opacity="0.32">
          {LINE_BUNDLES.map((d) => (
            <path key={d} d={d} />
          ))}
        </g>
      </svg>
      <img className={styles.landscape} src={landscape} alt="" decoding="async" />
    </div>
  );
}

export default HeroBackground;
