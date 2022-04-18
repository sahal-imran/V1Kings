import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProjectLore from "../components/ProjectLore";
import Clans from "../components/Clans";
import Map from "../components/Map";
import Roadmap from "../components/Roadmap";
import Team from "../components/Team";
import Footer from "../components/Footer";

function index() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProjectLore />
      <Clans />
      <Map />
      <Roadmap />
      <Team />
      <Footer />
    </>
  );
}

export default index;
