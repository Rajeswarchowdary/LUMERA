import React from "react";
import styles from "./review.module.css";
import Image from "next/image";
import { Dancing_Script } from "next/font/google";

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Submit = () => {
  alert("Review Submitted");
};


const Review = () => {
  return (
    <>
      <h1 className={`${styles.heading} ${dancing.className}`}>Review</h1>


      <div className={styles.maindiv}>
        <div className={styles.leftimgdiv}>
          <Image
            src="/Image-ourstory.png"
            // src="/ReserveImg.png"
            alt="Cafe Image"
            width={400}
            height={450}
            className={styles.reviewimg}
          />
        </div>


        <div className={styles.rightformdiv}>
          <div className={styles.formdiv}>

            <label className={`${styles.labeloption} ${dancing.className}`}>Select Category</label>
            <select id="category" name="category" className={`${styles.labelfont} ${dancing.className}`} required>
              <option value="" >Select Category</option>
              <option value="coffee">Coffee</option>
              <option value="desserts">Desserts</option>
              <option value="mocktails">Mocktails</option>
              <option value="soups">Soups</option>
              <option value="quickbites">QuickBites</option>
            </select>


            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label className={`${styles.labelfont} ${dancing.className}`}>Customer Name</label>
                <input type="text" placeholder="Name" required />
              </div>

              <div className={styles.inputGroup}>
                <label className={`${styles.labelfont} ${dancing.className}`}>Mobile Number</label>
                <input type="text" placeholder="Mobile Number" required />
              </div>
            </div>

            <label className={`${styles.labelfont} ${dancing.className}`}>Description</label>
            <textarea className={styles.textarea} maxLength={500} required></textarea>

            <button className={styles.button} onClick={Submit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
