"use client";

import React from "react";
import Image from "next/image";
import styles from "./about.module.css";
import { Dancing_Script } from "next/font/google";

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const About = () => {
  return (
    <div className={styles.maindiv}>
      <div className={styles.container}>
        <div className={styles.image}>
          <Image
            src="/mec.png"
            alt="Coffee Art Face"
            width={250}
            height={250}
          />
        </div>

        <div className={styles.textBox}>
          <h2 className={`${styles.heading} ${dancing.className}`}>Our Story</h2>

          <p className={styles.text}>
            At Lumera Café, we believe great coffee is more than just a drink — it’s an experience. Every bean is carefully selected, freshly ground, and brewed to perfection, ensuring every sip brings comfort and joy. With zero surge pricing, we keep things simple and honest because your happiness shouldn’t come at a premium. Pair your coffee with our handcrafted cakes, rich desserts, and cozy atmosphere designed to make you feel at home. Whether it’s your morning boost, an afternoon break, or a place to unwind, Lumera Café welcomes you with warmth, flavor, and heart.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
