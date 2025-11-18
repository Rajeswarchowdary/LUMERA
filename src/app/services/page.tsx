"use client";

import React from "react";
import Image from "next/image";
import styles from "./services.module.css";
import { Dancing_Script } from "next/font/google";

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Services = () => {
  return (
    <section className={styles.section}>
      <div className={styles.textBox}>
        <h2 className={`${styles.heading} ${dancing.className}`}>Services</h2>
      </div>

      <div className={styles.maindiv}>
        <div className={styles.smalldiv}>
          <Image
            src="/coffecup.png"
            alt="Coffee Cup"
            width={170}
            height={170}
            className={styles.image}
          />
          <p className={styles.imgtext}>Coffee</p>
        </div>

        <div className={styles.smalldiv}>
          <Image
            src="/takeaway.png"
            alt="Takeaway"
            width={170}
            height={170}
            className={styles.image}
          />
          <p className={styles.imgtext}>Takeaway</p>
        </div>

        <div className={styles.smalldiv}>
          <Image
            src="/desserts_1.png"
            alt="Desserts"
            width={170}
            height={170}
            className={styles.image}
          />
          <p className={styles.imgtext}>Desserts</p>
        </div>

        <div className={styles.smalldiv}>
          <Image
            src="/mocktails.png"
            alt="Mocktails"
            width={170}
            height={170}
            className={styles.image}
          />
          <p className={styles.imgtext}>Mocktails</p>
        </div>

        <div className={styles.smalldiv}>
          <Image
            src="/soups.png"
            alt="Mocktails"
            width={170}
            height={170}
            className={styles.image}
          />
          <p className={styles.imgtext}>Soups</p>
        </div>

        <div className={styles.smalldiv}>
          <Image
            src="/pizza.png"
            alt="Mocktails"
            width={170}
            height={170}
            className={styles.image}
          />
          <p className={styles.imgtext}>Quick Bites</p>
        </div>
        
      </div>
    </section>
  );
};

export default Services;
