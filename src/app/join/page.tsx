"use client";

import React, { useState, useEffect } from "react";
import style from "./join.module.css";
import { Dancing_Script } from "next/font/google";

const dancing = Dancing_Script({
    subsets: ["latin"],
    weight: ["400", "700"],
});

export default function Join() {

    const [method, setMethod] = useState("mail");
    useEffect(() => {
        const elements = document.querySelectorAll(".reveal");

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                    }
                });
            },
            { threshold: 0.2 }
        );

        elements.forEach(el => observer.observe(el));
    }, []);

    return (
        <div className={`${style.joinPage} reveal`}>

            <div className={style.box}>
                <h1 className={`${dancing.className} ${style.title}`}>
                    Join Our LUMERA Family
                </h1>

                <p className={style.text}>
                    You will receive the best offers and exclusive updates directly.
                </p>

                <p className={style.smallNote}>
                    Choose how you want to receive our notifications.
                </p>


                <div className={style.selectBox}>
                    <button
                        className={`${style.selectBtn} ${method === "mail" ? style.active : ""}`}onClick={() => setMethod("mail")}>Mail
                    </button>

                    <button
                        className={`${style.selectBtn} ${method === "whatsapp" ? style.active : ""}`}onClick={() => setMethod("whatsapp")}>WhatsApp
                    </button>
                </div>
                <form className={style.form}>
                    {method === "mail" ? (
                        <input
                            type="email"
                            placeholder="Enter your Email"
                            className={style.input}
                        />
                    ) : (
                        <input
                            type="number"
                            placeholder="Enter your WhatsApp Number"
                            className={style.input}
                        />
                    )}

                    <button className={style.button}>Join Now</button>
                </form>
            </div>
        </div>
    );
}
