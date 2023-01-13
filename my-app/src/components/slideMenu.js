import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hello from "../img/Hello.jpg";
import Pencil from "../img/Pencil.jpg";
import "./slideMenu.css";

function SlideMenu() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };

  return (
    <div id="box">
      <Slider {...settings}>
        <div className="window">
          <img src={Hello} alt="" />
          <div className="text1">
            i{`'`}m groot
            <br />
            <a href="http://naver.com" target="_blank" rel="noreferrer">
              <span>view cv</span>
            </a>
          </div>
        </div>
        <div className="window">
          <img src={Pencil} alt="" />
          <div className="text2">
            I love building <br />
            THINGS!!
            <br />
            <a href="http://google.com" target="_blank" rel="noreferrer">
              <span>view projects</span>
            </a>
          </div>
        </div>
      </Slider>
    </div>
  );
}
export default SlideMenu;
