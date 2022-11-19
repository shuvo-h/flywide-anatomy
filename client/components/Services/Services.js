import Image from "next/image";
import React from "react";
import { servicesData } from "../../../data/data";
import styles from "./Services.module.css";
const Services = () => {
  return (
    <div className={styles.services}>
      <h2>TRAVIO SPECIALS</h2>
      <h3>top services</h3>     
      <div className="container">
        <div className="row">
          <div className={styles.servicesItem}>
            {servicesData?.map((n) => (
              <div className={styles.servicesCard} key={n?.id}>
                <div className={styles.cardImg}>
                  <Image width="300" height="200" src={n?.img} />
                </div>
                <div className={styles.cardLogo}>
                  <Image width="40" height="40" src={n?.logoImg} />
                </div>
                <div className={styles.cardText}>
                  <h3>{n?.title}</h3>
                  <p>{n?.text} </p>
                  <button>
                    {n?.title} {"details"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
