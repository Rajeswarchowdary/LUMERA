"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./header.module.css";
import { useRouter } from "next/navigation";
import { Dancing_Script } from "next/font/google";

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const navigateWithLoader = (path: string) => {
    setOpenMenu(false);
    setLoading(true);

    setTimeout(() => {
      router.push(path);
      setLoading(false);
    }, 1200);
  };

  const handleScroll = (e: any) => {
    e.preventDefault();
    const target = document.getElementById(
      e.currentTarget.getAttribute("href")?.substring(1) || ""
    );
    target?.scrollIntoView({ behavior: "smooth" });
    setOpenMenu(false);
  };

  return (
    <>
      {/* FULL PAGE LOADER */}
      {loading && (
        <div className={styles.fullPageLoader}>
          <div className={styles.loaderContent}>
            <Image
              src="/logo1.png"
              width={140}
              height={140}
              alt="Loading"
              className={styles.logoFade}
            />

            <p className={`${dancing.className} ${styles.loaderText}`}>
              Because Every Cup Deserves Its Own Little Story.
            </p>
          </div>
        </div>
      )}

      {/* HEADER */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image src="/logo1.png" alt="Logo" width={100} height={70} />
        </div>

        <nav
          className={`${styles.nav} ${
            openMenu ? styles.mobileNav + " " + styles.showNav : ""
          }`}
        >
          {/* APPLY FONT TO ALL TEXT ITEMS */}
          <Link href="/" className={dancing.className}>
            Home
          </Link>

          <a
            className={dancing.className}
            onClick={() => navigateWithLoader("/menu")}
          >
            Menu
          </a>

          <a
            href="#services"
            onClick={handleScroll}
            className={dancing.className}
          >
            Services
          </a>

          <a href="#about" onClick={handleScroll} className={dancing.className}>
            About
          </a>

          <a
            className={dancing.className}
            onClick={() => navigateWithLoader("/gallery")}
          >
            Gallery
          </a>
        </nav>

        {/* MENU BUTTON ALSO GETS FONT */}
        <div
          className={`${styles.menuBtn} ${dancing.className}`}
          onClick={() => setOpenMenu(!openMenu)}
        >
          ☰
        </div>
      </header>
    </>
  );
};

export default Header;

// "use client";

// import Link from "next/link";
// import React from "react";
// import Image from "next/image";
// import styles from "./header.module.css"; // ✅ Import CSS

// const Header = () => {
//   const handleScroll = (e: any) => {
//     e.preventDefault();
//     const id = e.currentTarget.getAttribute("href")?.substring(1);
//     document.getElementById(id!)?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <header className={styles.header}>
//       <div className={styles.logo}>
//         <Image src="/logo1.png" alt="Logo" width={100} height={70} />
//       </div>

//       <nav className={styles.nav}>
//         <Link href="/">Home</Link>
//         <Link href="/menu">Menu</Link>
//         <a href="#services" onClick={handleScroll}>Services</a>
//         <a href="#about" onClick={handleScroll}>About</a>
//         <Link href="/images">Images</Link>
//       </nav>


//       <div className={styles.menuBtn}>☰</div>
//     </header>
//   );
// };

// export default Header;

// "use client";

// import Link from "next/link";
// import React, { useState } from "react";
// import Image from "next/image";
// import styles from "./header.module.css"; 
// import { useRouter } from "next/navigation";
// import { Dancing_Script } from "next/font/google";

// const dancing = Dancing_Script({
//     subsets: ["latin"],
//     weight: ["400", "700"],
// });


// const Header = () => {

//   const [openMenu, setOpenMenu] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   const navigateWithLoader = (path: string) => {
//     setOpenMenu(false);
//     setLoading(true);

//     setTimeout(() => {
//       router.push(path);
//       setLoading(false);
//     }, 1200);
//   };

//   const handleScroll = (e: any) => {
//     e.preventDefault();
//     const target = document.getElementById(
//       e.currentTarget.getAttribute("href")?.substring(1) || ""
//     );
//     target?.scrollIntoView({ behavior: "smooth" });
//     setOpenMenu(false);
//   };

//   return (
//     <>
//       {loading && (
//   <div className={styles.fullPageLoader}>
//     <div className={styles.loaderContent}>
//       <Image
//         src="/logo1.png"
//         width={140}
//         height={140}
//         alt="Loading"
//         className={styles.logoFade}
//       />

//       <p className={`${dancing.className} ${styles.loaderText}`}>
//         Because Every Cup Deserves Its Own Little Story.
//       </p>
//     </div>
//   </div>
// )}


  
//       <header className={styles.header}>
//         <div className={styles.logo}>
//           <Image src="/logo1.png" alt="Logo" width={100} height={70} />
//         </div>

//         <nav className={`${styles.nav} ${openMenu ? styles.mobileNav + " " + styles.showNav : ""}`}>
//           {/* <a onClick={() => navigateWithLoader("/")}>Home</a> */}
//           <Link href="/">Home</Link>
//           <a onClick={() => navigateWithLoader("/menu")}>Menu</a>

//           <a href="#services" onClick={handleScroll}>Services</a>
//           <a href="#about" onClick={handleScroll}>About</a>

//           <a onClick={() => navigateWithLoader("/gallery")}>Gallery</a>
//         </nav>

//         <div className={styles.menuBtn} onClick={() => setOpenMenu(!openMenu)}>
//           ☰
//         </div>
//       </header>
//     </>
//   );
// };

// export default Header;
