import React from "react";
import "./Test.scss";
import { Link } from 'react-router-dom';
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
      <Link to="/stress">
        <TestSquare
          img="stress_pic"
          name={["스트레스", <br />, "자가진단"]}
        ></TestSquare>
        </Link>

        <Link to="/burnout">
        <TestSquare
          img="burnout_pic"
          name={["번아웃 증후군", <br />, " 자가진단"]}
        ></TestSquare>
        </Link>

        <Link to="/depression">
        <TestSquare
          img="depress_pic"
          name={["우울증", <br />, "자가진단"]}
        ></TestSquare>
        </Link>

      </div>
    </div>
  );
};

export default Test;
