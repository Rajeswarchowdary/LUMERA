"use client";
import React from "react";
import Home from "./home/page";
import Homemenu from "./homemenu/page";
import Services from "./services/page";
import About from "./about/page";
import Images from "../images/page"
import Booktable from "../booktable/page"
import Review from "./review/review"
import Footer from "./footer/page";
import Difference from "./difference/page";
// import Join from "./join/page"


const Dashboard = () => {
  return (
    <>
      <Home />
      <section id="about"><About /></section>
      <section id="services"><Services /></section>
      <section id="homemenu"><Homemenu /></section>
      <Images />
      <Review />
      <Difference />
      <Footer />
      {/* <Join /> */}

      {/* <Services /> */}
      {/* <Booktable /> */}
      {/* <Gallery /> */}
    </>
  );
};

export default Dashboard;
