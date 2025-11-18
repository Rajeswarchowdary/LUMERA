import React from 'react'
import { Dancing_Script } from "next/font/google";
import styles from './table.module.css'

const dancing = Dancing_Script({
    subsets: ["latin"],
    weight: ["400", "700"],
});

const Booktable = () => {
    return (
        <div className={styles.heading}>
            <h1 className={`${styles.heading} ${dancing.className}`}>Table Booking</h1>

        </div>
    )
}

export default Booktable

