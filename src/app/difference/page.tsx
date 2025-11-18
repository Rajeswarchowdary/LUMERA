// import React from 'react'
// import style from "./difference.module.css";
// import { Dancing_Script } from "next/font/google";
// import Link from 'next/link';

// const dancing = Dancing_Script({
//   subsets: ["latin"],
//   weight: ["400", "700"],
// });

// const Difference = () => {
//   return (
//     <div className={style.maindiv}>
//       <div className={style.heading}>
//         <h1 className={`${dancing.className} ${style.headingTitle}`}>Why are we different</h1>
//         <p>Discover what makes our coffee truly special through a journey of taste and ethical sourcing.</p>
//       </div>

//       <div className={style.div}>
//         <div className={style.cointainer}>
//             <img src="/quality.png" alt="icon" className={style.icon} />
//             <h4 className={dancing.className}>High Quality</h4>
//             <p>We provide the highest quality coffee, meticulously roasted for perfection.</p>
//         </div>

//         <div className={style.cointainer}>
//             <img src="/Extraordinary.png" alt="icon" className={style.icon} />
//             <h4 className={dancing.className}>Extraordinary</h4>
//             <p>Coffee like you have never tasted, a unique blend of flavors and aromas.</p>
//         </div>

//         <div className={style.cointainer}>
//             <img src="/price.png" alt="icon" className={style.icon} />
//             <h4 className={dancing.className}>High Quality</h4>
//             <p>Our Coffee prices are easy to afford, ensuring everyone can enjoy premium coffee.</p>
//         </div>
//       </div>
//       <div className={style.bottom}>
//         <p>Great ideas start with great coffee, Let us help you achieve that</p>
//         <h3>Get started today.</h3>
//         <Link href="/join"><button className={style.bottombutton}>Join Us</button></Link>
//       </div>
//     </div>
//   )
// }

// export default Difference;

"use client";

import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import style from "./difference.module.css";
import { useRouter } from "next/navigation";
import { Dancing_Script } from "next/font/google";

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Difference = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleJoin = () => {
    setLoading(true);

    setTimeout(() => {
      router.push("/join");
      setLoading(false);
    }, 2500);
  };

  return (
    <>
      {/* FULL PAGE LOADER */}
      {loading && (
        <div className={style.fullPageLoader}>
          <div className={style.loaderContent}>
            <Image
              src="/logo1.png"
              width={140}
              height={140}
              alt="Loading"
              className={style.logoFade}
            />

            <p className={`${dancing.className} ${style.loaderText}`}>
              Because Every Cup Deserves Its Own Little Story.
            </p>
          </div>
        </div>
      )}

      {/* MAIN PAGE CONTENT */}
      <div className={style.maindiv}>
        <div className={style.heading}>
          <h1 className={`${dancing.className} ${style.headingTitle}`}>
            Why are we different
          </h1>
          <p>
            Discover what makes our coffee truly special through a journey of
            taste and ethical sourcing.
          </p>
        </div>

        <div className={style.div}>
          <div className={style.cointainer}>
            <img src="/quality.png" alt="icon" className={style.icon} />
            <h4 className={dancing.className}>High Quality</h4>
            <p>
              We provide the highest quality coffee, meticulously roasted for
              perfection.
            </p>
          </div>

          <div className={style.cointainer}>
            <img src="/Extraordinary.png" alt="icon" className={style.icon} />
            <h4 className={dancing.className}>Extraordinary</h4>
            <p>
              Coffee like you have never tasted, a unique blend of flavors and
              aromas.
            </p>
          </div>

          <div className={style.cointainer}>
            <img src="/price.png" alt="icon" className={style.icon} />
            <h4 className={dancing.className}>Affordable Price</h4>
            <p>
              Our coffee prices are easy to afford, ensuring everyone can enjoy
              premium coffee.
            </p>
          </div>
        </div>

        <div className={style.bottom}>
          <p>Great ideas start with great coffee, Let us help you achieve that</p>
          <h3>Get started today.</h3>

          <button
            className={style.bottombutton}
            onClick={handleJoin}
            disabled={loading}
          >
            Join Us
          </button>
        </div>
      </div>
    </>
  );
};

export default Difference;

