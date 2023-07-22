import React from "react";
import "./Test.scss";
import hm_logo from "../../images/hm_logo.png";
import TestSquare from "./TestSquare";

const Test = () => {
  return (
    <div>
      <div className="testTitle">
        <img src={hm_logo} alt="hm_logo" style={{ height: "55px" }} />
        <br />
        자가진단 검사
      </div>
      <br />
      <div className="testLink">
        <TestSquare
          img="stress_pic"
          name={["스트레스", <br />, "자가진단"]}
        ></TestSquare>
        <TestSquare
          img="burnout_pic"
          name={["번아웃 증후군", <br />, " 자가진단"]}
        ></TestSquare>
        <TestSquare
          img="depress_pic"
          name={["우울증", <br />, "자가진단"]}
        ></TestSquare>
      </div>
    </div>
  );
};

export default Test;
