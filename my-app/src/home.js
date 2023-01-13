import React from "react";
import SideMenu from "./components/sideMenu";
import SlideMenu from "./components/slideMenu";
import About from "./components/about";
import Education from "./components/education";
import Journey from "./components/journey";
import GoTop from "./function/goTop";
import "./home.css";

function Home() {
  return (
    <div id="wrap">
      <div className="sideArea">
        <SideMenu />
      </div>
      <div className="mainArea">
        <SlideMenu />
        <About />
        <Education />
        <Journey />
        <GoTop />
      </div>
    </div>
  );
}
export default Home;
