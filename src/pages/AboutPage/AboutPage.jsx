import { AboutHero, AboutSections } from '@/features/about';

function AboutPage() {
  return (
    <main>
      {/* Header section (aboutHeroContent.js). */}
      <AboutHero />
      {/* Sections 01-08 with the "On This Page" index (aboutSectionsContent.js). */}
      <AboutSections />
      {/* Further About-page sections go here. */}
    </main>
  );
}

export default AboutPage;
