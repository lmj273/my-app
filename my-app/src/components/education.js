import React from "react";
import useScrollFadeIn from "../function/scroll";
import "./education.css";

function Education() {
  const eduLists = [
    {
      num: 1,
      head: "APP DEVELPOMENT",
      detail: `I also have knowledge of flutter development and have experience in building android and IOS applications.\n I also have live app published on Google Play Store.`,
    },
    {
      num: 2,
      head: "WEB DEVELPOMENT",
      detail:
        "I am a full stack web developer(MERN) and build websites using HTML, CSS, Javascript, ReactJs.\nI have also good grasp on Node and NoSQL(MongoDb)",
    },
    {
      num: 0,
      head: "OTHER'S INTEREST",
      detail:
        "I also have decent hand in developing website with WordPress.\nC++, Github are my other fields of interest.\nCurrently, I am investing my free time in Web3.js",
    },
  ];

  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0.5),
    1: useScrollFadeIn("down", 1, 0.5),
    2: useScrollFadeIn("left", 1, 0.5),
    3: useScrollFadeIn("right", 1, 0.5),
  };

  return (
    <div id="eduTextBox">
      <div className="eduHead" {...animatedItem[3]}>
        <h4>WHAT I DO?</h4>
        <h2>HERE ARE SOME OF MY EXPERTISE</h2>
      </div>
      <div className="eduContent">
        {eduLists.map((eduList) => (
          <div
            className="eduList"
            key={eduList.head}
            {...animatedItem[eduList.num]}
          >
            <h3>{eduList.head}</h3>
            <span>{eduList.detail}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Education;
