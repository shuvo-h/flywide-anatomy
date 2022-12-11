import Image from "next/image";
import React from "react";
import Styles from "./SpeicalPakage.module.css";
// import  './SpeicalPakage.css';
import PakeageImg from '../../../public/img9.jpg'
import PakeageImg2 from '../../../public/img8.jpg'

const SpeicalPakage = () => {
  return (
    <div>
        <div>
        <h1 style={{textAlign:'center' , fontSize:'40px' , fontWeight:800}}>OUR SPECIAL PACKAGES</h1>
        <p style={{textAlign:'center' , marginBottom:"33px"}}>Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. Vestibulum cumque laudantium. Sit ornare mollitia tenetur, aptent.</p>
      </div>
    <div className={Styles.pakeage_main}>
    
      <div className={Styles.wrapper}>
        <div className={Styles.card}>
        <Image
            className={Styles.pakeage_Img}
            width={500}
            height={500}
            src={PakeageImg}
            alt=""
          />
          <div className={Styles.card_info}>
            <h1>TOUR TO SATORINI</h1>
            <p>Fusce hic augue velit wisi ips quibus dam pariatur, iusto. </p>
            <h3>price: $1300 $1105</h3>
            <a href="#" className={Styles.btn}> Read More</a>
          </div>

        </div>

      </div>
        <div className={Styles.card}>
        <Image
             className={Styles.pakeage_Img}
            width={500}
            height={500}
            src={PakeageImg2}
            alt=""
          />
          <div className={Styles.card_info}>
            <h1>WEEKEND TO PARIS</h1>
            <p>Fusce hic augue velit wisi ips quibus dam pariatur, iusto. </p>
            <h3>price: $1300 $1105</h3>
            <a href="#" className={Styles.btn}> Read More</a>
          </div>

        </div>

      
    </div>
    </div>
  );
};

export default SpeicalPakage;
