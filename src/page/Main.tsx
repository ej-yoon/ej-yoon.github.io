import { useRef } from 'react';
import NavigationBar from '../components/NavigationBar';
// pages
import About from '../sections/About'
import Career from '../sections/Career'
import Education from '../sections/Education'
// style
import styles from '../styles/Page.module.css';

export default function MainLayout() {
    const refAbout = useRef<HTMLInputElement | null>(null);
    const refCareer = useRef<HTMLInputElement | null>(null);
    const refEducation = useRef<HTMLInputElement | null>(null);

    return (
      <>
        <NavigationBar aboutSectionRef={refAbout} careerSectionRef={refCareer} educationSectionRef={refEducation} />
        <div className={styles.pageLayout}>
          <About refProps={refAbout}/>
          <Career refProps={refCareer}/>
          <Education refProps={refEducation}/>
        </div>
      </>
    );
}