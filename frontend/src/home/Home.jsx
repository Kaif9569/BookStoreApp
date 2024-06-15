import React from "react";
import Footer from "../component/Footer";
import Freebook from "../component/Freebook";
import Banner from "../component/Banner";
import Navbar from "../component/Navbar";

function Home() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Freebook/>
      <Footer/>
    </>
  );
}

export default Home;
