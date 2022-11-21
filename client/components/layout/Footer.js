import Image from "next/image";
import React from "react";
import logo from "../../../public/imges/logo-3.png";
import img1 from "../../../public/imges/footer-gallery-1.jpg";
import img2 from "../../../public/imges/footer-gallery-2.jpg";
import img3 from "../../../public/imges/footer-gallery-4.jpg";
import img4 from "../../../public/imges/footer-gallery-5.jpg";
import img5 from "../../../public/imges/footer-gallery-6.jpg";
import img6 from "../../../public/imges/profile_pic.jpg";
import facebook from "../../../public/logo icon/icons8-facebook-f-60.png";
import linkedin from "../../../public/logo icon/icons8-linkedin-2-48.png";
import twitter from "../../../public/logo icon/icons8-twitter-50.png";
import instargram from "../../../public/logo icon/icons8-instagram-50.png";
import google from "../../../public/logo icon/icons8-google-plus-50.png";
import location from '../../../public/icons8-marker-o-50.png';
import gmail from '../../../public/icons8-envelope-64.png';
import microphone from '../../../public/icons8-microphone-64.png';
import styles from "./layoutStyle.module.css";

const Footer = () => {
  return (
    <div className={styles.footer_main}>
      <div className={styles.footer_info}>
        {/* logo */}
        <div className={styles.footer_logo}>
          <div>
            <h1 style={{ color: "white", fontSize: "23px" }}>Tar</h1>{" "}
            <h1 style={{ color: "orange", fontSize: "23px" }}>Vio.</h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            saepe. Aperiam repellat quidem voluptatibus. Aliquid nihil deserunt
            accusamus tempora officiis beatae praesentium saepe quod ex, iste in
            id, quia facilis!
          </p>

          <span >
          <Image
          className={styles.logo_img}
               
                width={30}
                height={30}
                src={facebook}
                alt=""
              />
          <Image
             className={styles.logo_img}
                width={30}
                height={30}
                src={twitter}
                alt=""
              />
          <Image
        className={styles.logo_img}
                width={30}
                height={30}
                src={instargram}
                alt=""
              />
          <Image
            className={styles.logo_img}
                width={30}
                height={30}
                src={linkedin}
                alt=""
              />
          <Image
          className={styles.logo_img}
                width={30}
                height={30}
                src={google}
                alt=""
              />
         
          </span>
        </div>
        {/* service */}
        <div className={styles.footer_service}>
          <h2>Service</h2>
          <div className={styles.service_link}>
            <a href="">About us</a>
            <a href="">How It Works</a>
            <a href="">Our Blog</a>
            <a href="">Our Services</a>
            <a href="">Contact Us</a>
            <a href="">Listing</a>
          </div>
        </div>

        {/* Gallery */}

        <div className={styles.footer_gallary}>
          <h2>Gallary</h2>
          <div className={styles.gallary_img}>
            <div>
              <Image
                style={{ borderRadius: "5px" }}
                width={90}
                height={90}
                src={img1}
                alt=""
              />
              <Image
                style={{  borderRadius: "5px" }}
                width={90}
                height={90}
                src={img2}
                alt=""
              />
              <Image
                style={{  borderRadius: "5px" }}
                width={90}
                height={90}
                src={img3}
                alt=""
              />
              <Image
                style={{ borderRadius: "5px" }}
                width={90}
                height={90}
                src={img4}
                alt=""
              />
              <Image
                style={{  borderRadius: "5px" }}
                width={90}
                height={90}
                src={img5}
                alt=""
              />
              <Image
                style={{  borderRadius: "5px" }}
                width={90}
                height={90}
                src={img6}
                alt=""
              />
            </div>
          </div>
        </div>
        {/* contact us */}
        <div className={styles.contact_main}>
          <h2>Contacts</h2>
          <li>
            <Image style={{marginRight:'23px'}} height={20} width={20} src={location} alt="" />
            Flat 20, Reynolds Neck, North Helenaville, FV77 8WS
          </li>
          <li>
            <Image style={{marginRight:'23px'}} height={20} width={20} src={microphone} alt="" />
            +2(305) 587-3407
          </li>
          <li>
            <Image style={{marginRight:'23px'}} height={20} width={20} src={gmail} alt="" />
            sabbirahmed@gamil.com
          </li>
         
        </div>
      </div>
    </div>
  );
};

export default Footer;
