import React from "react";
import styles from "./HeroSec.module.css";

const HeroSec = () => {
  return (
    <div className={styles.heroSec}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-6">
            <h1>Let's </h1>
            <h3>travel the world with us</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
              iste error recusandae voluptatibus? Ab quaerat eos deleniti
              perferendis. Officia, itaque omnis? Nulla autem quia suscipit et
              maiores, aut dignissimos sint.
            </p>
            <form className={styles.heroSecForm}>
              <div className={styles.formItem}>
                <i class="ri-home-4-fill"></i>
                <input
                  type="text"
                  name="last"
                  placeholder="Where To?"
                  required={true}
                />
              </div>
              <div className={styles.formItem}>
                <i class="ri-calendar-fill"></i>
                <input
                  list="datalistOptions"
                  id="exampleDataList"
                  placeholder="When?"
                  required={true}
                />
                <datalist id="datalistOptions" className={styles.label}>
                  <option value="January" />
                  <option value="February" />
                  <option value="March" />
                  <option value="April" />
                  <option value="May" />
                  <option value="June" />
                  <option value="July" />
                  <option value="August" />
                  <option value="September" />
                  <option value="October" />
                  <option value="November" />
                  <option value="December" />
                </datalist>
              </div>              
              <div className={styles.formItem}>
                <i class="ri-user-location-fill"></i>
                <input
                  list="datalistOptions1"
                  id="exampleDataList"
                  placeholder="Travel Type?"
                  required={true}
                />
                <datalist id="datalistOptions1">
                  <option value="San Francisco" />
                  <option value="New York" />
                  <option value="Seattle" />
                  <option value="Los Angeles" />
                  <option value="Chicago" />
                </datalist>
              </div>
              <button>Find More</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSec;
