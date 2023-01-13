import React from "react";
import useScrollFadeIn from "../function/scroll";
import "./journey.css";

function Journey() {
  const jourLists = [
    {
      num: 3,
      head: "Experience",

      date: "July(2021)-Present",
      detail:
        "I am currently working as Software Developer Engineer at Springworks (previously Springrole and Springworks is a HR technology startup that is building tools and products to simplify recruiting and help organizations engage and retain their employees) and boosting my professional skills.",
    },
    {
      num: 0,
      head: "Undergraduation at SLIET",
      date: "2017-2021",
      detail:
        "I completed my undergraduation in CSE (Computer Science and Engineering) from SLIET with overall 82.71%.",
    },
    {
      num: 1,
      head: "Higher Education",
      date: "2014-2016",
      detail:
        "I have completed my higher education from HKIS with major subjects as Physics,Chemistry & Maths with 85% merit in CBSE board.",
    },
    {
      num: 2,
      head: "Internship",
      date: "2016~",
      detail:
        "Completed one month Internship in React Js with Internity Foundation",
    },
  ];

  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0.5),
    1: useScrollFadeIn("down", 1, 0.5),
    2: useScrollFadeIn("left", 1, 0.5),
    3: useScrollFadeIn("right", 1, 0.5),
    4: useScrollFadeIn("right", 1, 0.5),
  };

  return (
    <div id="jourTextBox">
      <div className="jourHead" {...animatedItem[4]}>
        <h3>MY JOURNEY</h3>
      </div>
      <div className="jourContent">
        {jourLists.map((jourList) => (
          <div
            className="jourList"
            key={jourList.head}
            {...animatedItem[jourList.num]}
          >
            <span className=" jourListHead">{jourList.head}</span>
            <span className=" jourListDate">{jourList.date}</span>
            <div className="jourListDetail">{jourList.detail}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Journey;
