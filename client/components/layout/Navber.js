import Image from 'next/image';
import React from 'react';
import logo from "../../../public/logo/travele-logo.png";
import styles from './layoutStyle.module.css';

const Navber = () => {
    return (
        <div className="container">
            <div className={styles.menu_bar}>
            <div className={styles.menu_logo}>
             <Image width="150" height="60" src={logo}/>
            </div>
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