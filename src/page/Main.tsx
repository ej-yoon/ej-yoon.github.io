import { useRef } from 'react';
import NavigationBar from '../components/NavigationBar';
// pages
import About from '../sections/About'
import Career from '../sections/Career'
import Education from '../sections/Education'
// style
import styles from '../styles/Page.module.css';

export default function MainLayout() {
    const about = useRef<HTMLInputElement | null>(null);
    const career = useRef<HTMLInputElement | null>(null);
    const education = useRef<HTMLInputElement | null>(null);

    return (
      <>
        <NavigationBar aboutSectionRef={about} careerSectionRef={career} educationSectionRef={education} />
        <div className={styles.pageLayout}>
          <About refProps={about}/>
          <Career refProps={career}/>
          <Education refProps={education}/>
        </div>
      </>
    );
}