import React from "react";
import styles from "./layoutStyle.module.css";
import Image from "next/image";
import moduleName from "../../../public/imges/logo-3.png";
import search from "../../../public/logo icon/icons8-search-50 (1).png";
import users from "../../../public/logo icon/icons8-user-48.png";

const Navber = () => {
  return (
    <div className={styles.navbar_main}>
      <div className={styles.menu_bar}>
        <Image
          style={{ borderRadius: "5px" }}
          width={90}
          height={25}
          src={moduleName}
          alt=""
        />
        <ul>
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">DESTINATIONS</a>
            <div className={styles.sub_menu_1}>
              <ul>
                <li>
                  <a href="">DISTINATIONS1</a>
                </li>
                <li>
                  <a href="">DISTINATIONS2</a>
                </li>
                <li>
                  <a href="">DISTINATIONS DETAINS</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#">TOURS</a>
          </li>
          <li>
            <a href="#">PAGES</a>
            <div className={styles.sub_menu_1}>
              <ul>
                <li>
                  <a href="">DISTINATIONS1</a>
                </li>
                <li>
                  <a href="">DISTINATIONS2</a>
                </li>
                <li>
                  <a href="">DISTINATIONS DETAINS</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#">ELEMENTS</a>
            <div className={styles.sub_menu_1}>
              <ul>
                <li>
                  <a href="">DISTINATIONS1</a>
                </li>
                <li>
                  <a href="">DISTINATIONS2</a>
                </li>
                <li>
                  <a href="">DISTINATIONS DETAINS</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#">BLOG</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
        </ul>

        <button className={styles.search_btn}>
          {" "}
          <Image style={{padding:'6px'}} width={35} height={35} src={search} alt="" />
        </button>
        <button className={styles.users_btn}>
          {" "}
          <Image style={{padding:'6px'}} width={35} height={35} src={users} alt="" />
        </button>

        <button className={styles.book_a_tour}>
          Book A Tour
        </button>
      </div>
    </div>
  );
};

export default Navber;
