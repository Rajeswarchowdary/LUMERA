"use client";

import React from "react";
import styles from "./footer.module.css";
import { InstagramOutlined, FacebookFilled, YoutubeFilled, MailOutlined } from "@ant-design/icons";
import Image from "next/image";
import { Dancing_Script } from "next/font/google";

const dancing = Dancing_Script({
    subsets: ["latin"],
    weight: ["400", "700"],
});

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>

                <div className={styles.imageBox}>
                    <Image src="/fottercup.png" alt="Cafe Cup" width={260} height={260} className={styles.cupImg} />
                </div>

                <div className={styles.columns}>

                    <div className={styles.column}>
                        <h3 className={dancing.className}>About Lumera</h3>
                        {/* <p>
                            At Lumera, every cup is brewed with warmth, comfort, and a touch of art.
                            We believe coffee isn’t just a drink it’s a moment, a pause, a feeling.
                        </p> */}
                        <p className={dancing.className}>
                            Step inside, slow down, breathe in the aroma…
                            and let your heart sip a little peace.
                        </p>
                    </div>

                    <div className={styles.column}>
                        <h3 className={dancing.className}>Contact Us</h3>
                        <p>Lumera Cafe, Near Complex</p>
                        <p>Rajahmundry, East Godavari</p>

                        <p className={styles.mail}><MailOutlined /> lumera.contact@gmail.com</p>

                        <div className={styles.socials}>
                            <a className={`${styles.icon} ${styles.insta}`}><InstagramOutlined /></a>
                            <a className={`${styles.icon} ${styles.fb}`}><FacebookFilled /></a>
                            <a className={`${styles.icon} ${styles.yt}`}><YoutubeFilled /></a>
                        </div>
                    </div>

                </div>

            </div>

            <p className={styles.copy}>© 2025 Café Moments | All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;
