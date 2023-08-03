import React from "react";
import NavBar from "../../components/NavBar";

import "./Main.scss";
import bigLogo from "../../images/hm_bigLogo.png";
import HeadLine from "../../images/hm_headline.png";
import cmBar from "../../images/cm_bar.png";
import cmRec from "../../images/cm_rectangle.png";
import histBar from "../../images/history_bar.png";
import histRec from "../../images/history_rectangle.png";
import testBar from "../../images/test_bar.png";
import BlurEffect from "../../components/blurEffect";
import testRec from "../../images/test_rectangle.png";
import testImg from "../../images/test_img.png";
import testButton from "../../images/test_button.png";

function Main() {
  return (
    <div className="main">
      <div className="homeLogo">
        <img alt="bigLogo" src={bigLogo}></img>
      </div>

      <div className="headline">
        <img alt="headline" src={HeadLine}></img>
      </div>

      <div className="cmBar">
        <img alt="cmBar" src={cmBar}></img>
      </div>

      <div className="cmRec">
        <img alt="cmRec" src={cmRec}></img>
      </div>

      <div className="historyBar">
        <img alt="histBar" src={histBar}></img>
      </div>

      <div className="historyRec">
        <img alt="histRec" src={histRec}></img>
      </div>

      <div className="testBar">
        <img alt="testBar" src={testBar}></img>
      </div>

      <div className="testRec">
        <img alt="testRec" src={testRec}></img>
      </div>

      <div className="testImg">
        <img alt="testImg" src={testImg}></img>
      </div>
      <BlurEffect />

      <div className="testButton">
        <button className="testBut">
          <img alt="testButton" src={testButton}></img>
        </button>
      </div>
    </div>
  );
}

const main = () => {
  return <div className="main"></div>;
};

export default Main;
