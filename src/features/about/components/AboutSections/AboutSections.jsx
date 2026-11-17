import { useEffect, useState } from 'react';
import landscape from '@/assets/images/about/feedab-landscape.jpg';
import { aboutSections, onThisPageTitle } from '../../data/aboutSectionsContent';
import AboutSection from './AboutSection';
import OnThisPage from './OnThisPage';
import styles from './AboutSections.module.css';

// Every section in aboutSectionsContent.js is shown, both on the page and in
// the "On This Page" list.
const SECTION_IDS = aboutSections.map((section) => section.id);

/*
 * Tracks which section is being read: the one crossing a thin band about a
 * third of the way down the window. At the very bottom of the page the last
 * section wins, since it may be too short to reach the band.
 */
function useActiveSection(ids) {
  const [activeId, setActiveId] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-32% 0px -64% 0px' },
    );
    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    const onScroll = () => {
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom) setActiveId(ids[ids.length - 1]);
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, [ids]);

  return [activeId, setActiveId];
}

function AboutSections() {
  const [activeId, setActiveId] = useActiveSection(SECTION_IDS);

  return (
    <div className={styles.wrapper}>
      <div className={styles.decor} aria-hidden="true">
        <img className={styles.landscape} src={landscape} alt="" decoding="async" loading="lazy" />
      </div>

      <div className={styles.layout}>
        <OnThisPage
          title={onThisPageTitle}
          items={aboutSections}
          activeId={activeId}
          onSelect={setActiveId}
        />

        <div className={styles.sections}>
          {aboutSections.map((section, index) => (
            <AboutSection key={section.id} section={section} number={String(index + 1).padStart(2, '0')} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutSections;
