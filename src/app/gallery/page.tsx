import React from 'react'
import styles from "./gallery.module.css";
import { Dancing_Script } from "next/font/google";

const dancing = Dancing_Script({
    subsets: ["latin"],
    weight: ["400", "700"],
});

const Gallery = () => {
  return (
    <div className={styles.maindiv}>
            <div className={styles.heading}>
                <h1 className={`${styles.heading} ${dancing.className}`}>Gallery</h1>
            </div>

            <div className={styles.images}>
                <div className={styles.mediaItem}>
                    <img src="https://media.gettyimages.com/id/1428594094/photo/empty-coffee-shop-interior-with-wooden-tables-coffee-maker-pastries-and-pendant-lights.jpg?s=612x612&w=0&k=20&c=dMqeYCJDs3BeBP_jv93qHRISDt-54895SPoVc6_oJt4=" alt="Coffee Cup" />
                </div>
                <div className={styles.mediaItem}>
                    <video autoPlay loop muted playsInline>
                        <source src="https://cdn.pixabay.com/video/2018/04/08/15484-264671701_tiny.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className={styles.mediaItem}>
                    <img src="https://media.gettyimages.com/id/1125725514/photo/the-it-place.jpg?s=612x612&w=0&k=20&c=atYC_U7jgwN8XcMc8uOGBEDZLVvWTxDGokds3uZot-A=" alt="Cafe Interior" />
                </div>
                <div className={styles.mediaItem}>
                    <video autoPlay loop muted playsInline>
                        <source src="https://media.istockphoto.com/id/1703894260/video/pub-interior-with-bar-counter-and-tables-at-night.mp4?s=mp4-640x640-is&k=20&c=de6OtcPL1p1fEokJMOKVozfg-8pZQ3zFLF_wrG6Abh0=" type="video/mp4" />
                    </video>
                </div>
                <div className={styles.mediaItem}>
                    <img src="https://images.unsplash.com/photo-1541167760496-1628856ab772" alt="Dessert" />
                </div>
                <div className={styles.mediaItem}>
                    <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4" alt="Cafe People" />
                </div>
                <div className={styles.mediaItem}>
                    <video autoPlay loop muted playsInline>
                        <source src="https://media.istockphoto.com/id/1095375642/video/empty-restaurant-with-table-set-for-dining.mp4?s=mp4-640x640-is&k=20&c=Cnd86kASXMo0kjQNYx-GXXL2FuAHXSQRw6NWB6C0TxE=" type="video/mp4" />
                    </video>
                </div>
                <div className={styles.mediaItem}>
                    <img src="https://images.unsplash.com/photo-1481833761820-0509d3217039" alt="Latte Art" />
                </div>

                <div className={styles.mediaItem}>
                    <img src="https://media.gettyimages.com/id/1428594094/photo/empty-coffee-shop-interior-with-wooden-tables-coffee-maker-pastries-and-pendant-lights.jpg?s=612x612&w=0&k=20&c=dMqeYCJDs3BeBP_jv93qHRISDt-54895SPoVc6_oJt4=" alt="Coffee Cup" />
                </div>
                <div className={styles.mediaItem}>
                    <video autoPlay loop muted playsInline>
                        <source src="https://cdn.pixabay.com/video/2018/04/08/15484-264671701_tiny.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className={styles.mediaItem}>
                    <img src="https://media.gettyimages.com/id/1125725514/photo/the-it-place.jpg?s=612x612&w=0&k=20&c=atYC_U7jgwN8XcMc8uOGBEDZLVvWTxDGokds3uZot-A=" alt="Cafe Interior" />
                </div>
                <div className={styles.mediaItem}>
                    <video autoPlay loop muted playsInline>
                        <source src="https://media.istockphoto.com/id/1703894260/video/pub-interior-with-bar-counter-and-tables-at-night.mp4?s=mp4-640x640-is&k=20&c=de6OtcPL1p1fEokJMOKVozfg-8pZQ3zFLF_wrG6Abh0=" type="video/mp4" />
                    </video>
                </div>
                <div className={styles.mediaItem}>
                    <img src="https://images.unsplash.com/photo-1541167760496-1628856ab772" alt="Dessert" />
                </div>
                <div className={styles.mediaItem}>
                    <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4" alt="Cafe People" />
                </div>
                <div className={styles.mediaItem}>
                    <video autoPlay loop muted playsInline>
                        <source src="https://media.istockphoto.com/id/1095375642/video/empty-restaurant-with-table-set-for-dining.mp4?s=mp4-640x640-is&k=20&c=Cnd86kASXMo0kjQNYx-GXXL2FuAHXSQRw6NWB6C0TxE=" type="video/mp4" />
                    </video>
                </div>
                <div className={styles.mediaItem}>
                    <img src="https://images.unsplash.com/photo-1481833761820-0509d3217039" alt="Latte Art" />
                </div>
            </div>
        </div>
  )
}

export default Gallery