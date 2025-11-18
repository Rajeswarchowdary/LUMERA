"use client";

import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import styles from "./home.module.css";
import About from "../about/page";

const inter = Inter({ subsets: ["latin"] });

const images = [
    "/public/bg_1.jpg",
    "/public/bg_2.jpg",
    "/public/bg_3.jpg",
];

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.backgroundContainer}>

            {images.map((src, index) => (
                <Image
                    key={index}
                    src={src}
                    alt={`background-${index}`}
                    fill
                    priority
                    className={`${styles.bgImage} ${index === currentIndex ? styles.active : ""
                        }`}
                />
            ))}

            <div className={styles.maindiv}>
                <div className={styles.textdiv}>
                    <Image src="/logo1.png" alt="Description" width={300} height={200} />
                </div>

                <h1
                    style={{
                        marginBottom: "10px",
                        fontFamily: "CoFo Sans",
                        fontSize: "50px",
                        fontWeight: "600",
                        textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
                        margin: 0,
                        color: "white",
                    }}
                >
                    Awaken your senses at Lumera
                </h1>

                <p style={{ fontSize: "20px", maxWidth: "600px", color: "white" }}>
                    Discover a world where light, aroma, and emotion meet in perfect harmony.
                </p>
            </div>
        </div>


    );
};

export default Home;
