import Image from "next/image";
import React from "react";
import { destinationsData } from "../../../data/data";
import styles from "./PopularDestinations.module.css";

const PopularDestinations = () => {
  return (
    <div className={styles.popularDestinations}>
      <h1>TOP DESTINATION</h1>
      <h3>POPULAR DESTINATION</h3>
      <div className="container">
        <div className="row">
          {destinationsData?.map((n) => (
            <div className="col-lg-4 col-md-6 col-sm-12 mt-5" key={n?.id}>
              <div className={styles.popularCard}>
                <div className={styles.cardImg}>
                  <Image width="400" height="250" src={n?.img} />
                </div>
                <div className={styles.review}>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <p>{n?.review}</p>
                </div>
                <h2>{n?.title}</h2>
                <h4>
                  {" "}
                  <span>{n?.price}</span> / Per person
                </h4>
                <div className={styles.cardText}>
                  <p>
                    <i class="ri-time-line"></i> {n?.day}{" "}
                  </p>
                  <p>
                    <i class="ri-map-pin-fill"></i> {n?.address}
                  </p>
                </div>
                <p>{n?.text} </p>{" "}
                <button>
                  {n?.more} {"details"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularDestinations;
