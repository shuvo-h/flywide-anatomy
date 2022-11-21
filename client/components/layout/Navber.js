import React from 'react';
import styles from './layoutStyle.module.css';

const Navber = () => {
    return (
        <div className={styles.navbar_main }>
            <div className={styles.menu_bar}>
          <ul>
            <li>HOME</li>
            <li>DESTINATIONS</li>
            <li>TOURS</li>
            <li>PAGES</li>
            <li>ELEMENTS</li>
            <li>BLOG</li>
            <li>CONTACT</li>
          </ul>
          </div>
        </div>
    );
};

export default Navber;