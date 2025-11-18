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
            width={170}
            height={170}
            alt="Coffee Cup"
            className={styles.image}
          />
          <p className={styles.imgtext}>Coffee</p>
        </div>

        <div className={styles.smalldiv}>
          <Image
            src="/takeaway.png"
            width={170}
            height={170}
            alt="Takeaway"
            className={styles.image}
          />
          <p className={styles.imgtext}>Takeaway</p>
        </div>

        <div className={styles.smalldiv}>
          <Image
            src="/desserts_1.png"
            width={170}
            height={170}
            alt="Desserts"
            className={styles.image}
          />
          <p className={styles.imgtext}>Desserts</p>
        </div>

        <div className={styles.smalldiv}>
          <Image
            src="/mocktails.png"
            width={170}
            height={170}
            alt="Mocktails"
            className={styles.image}
          />
          <p className={styles.imgtext}>Mocktails</p>
        </div>

        <div className={styles.smalldiv}>
          <Image
            src="/soups.png"
            width={170}
            height={170}
            alt="Soups"
            className={styles.image}
          />
          <p className={styles.imgtext}>Soups</p>
        </div>

        <div className={styles.smalldiv}>
          <Image
            src="/pizza.png"
            width={170}
            height={170}
            alt="Quick Bites"
            className={styles.image}
          />
          <p className={styles.imgtext}>Quick Bites</p>
        </div>

      </div>
    </section>
  );
};

export default Services;
