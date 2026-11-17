import collage from '@/assets/images/about/feedab-collage.webp';
import landscape from '@/assets/images/about/feedab-landscape.jpg';
import logo from '@/assets/images/about/feed-logo.jpg';

/*
 * Copy and imagery for the About hero. Keeping content out of the component
 * makes it easy to edit text, swap images, or later load this from a CMS/API.
 *
 * Both images are exported from the design mockup (1670 x 942):
 *  - collage:   the leaf-shaped photo collage, x 660-1670 / y 90-770 of the mockup
 *  - landscape: the farmland strip along the bottom edge
 * The logo (shown under "About Us", above the quote) is the FEED brand mark,
 * trimmed to its artwork and resized to 640 px wide.
 */
export const aboutHeroContent = {
  eyebrow: 'About Us',
  logo: {
    src: logo,
    alt: 'FEED logo: a globe surrounded by farming, export, cooperative, training, processing and finance tiles, with the motto “कृषि एव जयते”',
    width: 640,
    height: 786,
  },
  // One entry per desktop line (4 short lines so the large quote fits beside
  // the collage); strings are plain text, { emphasis } segments are
  // highlighted. Lines wrap freely on small screens.
  quoteLines: [
    ['There may be boundaries to the land'],
    ['a farmer cultivates, but there should be'],
    [{ emphasis: 'no boundaries to the markets' }, ' where'],
    ['that farmer can sell what they grow.'],
  ],
  collage: {
    src: collage,
    alt: 'Collage of a smiling Indian farmer in a field, a container ship and aircraft at a port, mangoes on the tree, and bowls of grains, spices and red chillies',
    width: 1010,
    height: 680,
  },
  landscape,
};
