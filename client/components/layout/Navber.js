import React, { useState } from "react";
import styles from "./layoutStyle.module.css";
import Image from "next/image";
import moduleName from "../../../public/imges/logo-3.png";
import search from "../../../public/logo icon/icons8-search-50 (1).png";
import users from "../../../public/logo icon/icons8-user-48.png";

const Navber = () => {

  const [navber, setNavber] = useState(true)


  return (
    <div className={styles.navbar_main}>
      <header className={styles.navber_header}>
        <a href="" className={styles.logo}>
          LOGO
        </a>

        <input type="checkbox" id={styles.manu_bar} />
        <label htmlFor="" onClick={ () =>  setNavber(!navber)}>menu</label>

       <nav className={styles.navber}>
       { navber ?  <ul>
            <li>
              {" "}
              <a href="">HOME</a>{" "}
            </li>
            <li>
              {" "}
              <a href="">DESTINATIONS</a>{" "}
            </li>
            <li>
              {" "}
              <a href="">TOURS + </a>
              <ul>
                <li>
                  <a href="">blog</a>
                </li>
                <li>
                  <a href="">blog +</a>
                  <ul>
                    <li>
                      <a href="">html</a>
                    </li>
                    <li>
                      <a href="">css</a>
                    </li>
                    <li>
                      <a href="">java</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              {" "}
              <a href="">PAGES</a>{" "}
            </li>
            <li>
              {" "}
              <a href="">ELEMENTS</a>{" "}
            </li>
            <li>
              {" "}
              <a href="">BLOG</a>{" "}
            </li>
            <li>
              {" "}
              <a href="">CONTACT</a>{" "}
            </li>
          </ul>
          : ""

        }
        </nav> 
        <button className={styles.search_btn}>
          {" "}
          <Image
            style={{ padding: "6px" }}
            width={35}
            height={35}
            src={search}
            alt=""
          />
        </button>
        <button className={styles.users_btn}>
          {" "}
          <Image
            style={{ padding: "6px" }}
            width={35}
            height={35}
            src={users}
            alt=""
          />
        </button>

        <button className={styles.book_a_tour}>Book A Tour</button>
      </header>
    </div>
  );
};

export default Navber;
