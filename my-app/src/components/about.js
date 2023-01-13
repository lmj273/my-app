import React from "react";
import useScrollFadeIn from "../function/scroll";
import "./about.css";

function About() {
  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0.5),
    1: useScrollFadeIn("down", 1, 0.5),
    2: useScrollFadeIn("left", 1, 0.5),
    3: useScrollFadeIn("right", 1, 0.5),
  };

  return (
    <div id="aboutTextBox" {...animatedItem[3]}>
      <h4>ABOUT ME</h4>
      <h2>WHO AM I?</h2>
      <div className="detail">
        <div>
          My name is <strong>SACHIN MITTAL</strong> and I am currently working
          as Software Developer Engineer at Springworks. I completed my degree
          in Bachelor of Technology in Computer Science and Engineering from
          Sant Longowal Institute of Engineering and Technology. I am much
          interested in developing new things which excite me a lot.
        </div>
        <div>
          I love exploring new technologies and being a practitioner, I like to
          stay on top of latest trends. I try to leave every line of code I
          write more readable, accessible, and modular.
        </div>
      </div>
    </div>
  );
}
export default About;
