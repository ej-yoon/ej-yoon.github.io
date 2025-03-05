import { Outlet } from 'react-router-dom';

import NavigationBar from '../components/NavigationBar';

import styles from '../styles/MainLayout.module.css';

export default function MainLayout() {
    return (
      <>
        <NavigationBar/>
        <div className={styles.pageLayout}>
            <Outlet />
        </div>
      </>
    );
}