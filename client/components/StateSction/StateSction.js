import React, { useState } from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
import styles from "./StateSction.module.css";

const StateSction = () => {
  const data = [
    { id: 1, title: "2000", tag: "+", text: "Awesome Hikers" },
    { id: 2, title: "70", tag: "+", text: "Stunning Places" },
    { id: 3, title: "1200", tag: "+", text: "Miles to Hike" },
    { id: 4, title: "15", tag: "+", text: "Years in Service" },
  ];
  const [countStart, setCountStart] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCountStart(true);
    }
  };
  return (
      <div className="container">
        <div className="row">
        <div className={styles.statePart}>
    <ReactVisibilitySensor
      offset={{ top: 10 }}
      delayedCall={true}
      onChange={onVisibilityChange}
    >
      <div className={styles.StateSction}>
        {data.slice(0, 4).map((n) => (
          <div className={styles.Card} key={n?.id}>
           
            <h2>
              <CountUp duration={5} start={0} end={countStart ? n?.title : 0} />{" "}
              {n?.tag}
            </h2>
            <p> {n?.text}</p>
          </div>
        ))}
      </div>
    </ReactVisibilitySensor>
    </div>
    </div>
    </div>
  );
};

export default StateSction;
